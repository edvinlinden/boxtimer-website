const script = document.currentScript;
const appId = script.dataset.appId;

const assert = (value, message) => {
  if (!value) {
    throw new Error(`TelemetryDeck: ${message}`);
  }
};

assert(appId, '"data-app-id" missing');

class TelemetryDeck {
  constructor(appId) {
    this.appId = appId;
    this.version = "1.1.0-custom";
    this.locale = navigator.language.locale;
    this.api = "https://nom.telemetrydeck.com/v2/w/";

    this.sendSignal();
  }

  sendSignal(params) {
    const isTestMode =
      /^localhost$|^127(\.\d+){0,2}\.\d+$|^\[::1?]$/.test(location.hostname) ||
      "file:" === location.protocol;

    const config = {
      appID: this.appId,
      url: location.href,
      referrer: document.referrer,
      telemetryClientVersion: `WebSDK ${this.version}`,
      locale: this.locale,
    };

    if (isTestMode) {
      config.isTestMode = true;
    }

    const body = { ...params, ...config };

    fetch(this.api, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
}

window.TelemetryDeck = new TelemetryDeck(appId);

// Dead click & rage click tracking
(function (td) {
  const RAGE_THRESHOLD = 3;
  const RAGE_INTERVAL = 800; // ms between clicks to count as rage
  const INTERACTIVE =
    "A,BUTTON,INPUT,SELECT,TEXTAREA,SUMMARY,LABEL,[role='button'],[role='link'],[role='tab'],[onclick]";

  let clickLog = [];

  function describeElement(el) {
    const tag = el.tagName.toLowerCase();
    const id = el.id ? `#${el.id}` : "";
    const classes = el.className && typeof el.className === "string"
      ? "." + el.className.trim().split(/\s+/).slice(0, 3).join(".")
      : "";
    const text = (el.textContent || "").trim().slice(0, 40);
    return `${tag}${id}${classes}` + (text ? ` "${text}"` : "");
  }

  function isInteractive(el) {
    if (el.closest(INTERACTIVE)) return true;
    if (getComputedStyle(el).cursor === "pointer") return true;
    return false;
  }

  document.addEventListener("click", function (e) {
    const target = e.target;
    const now = Date.now();

    // Track rage clicks (rapid repeated clicks in same area)
    clickLog.push({ x: e.clientX, y: e.clientY, time: now, target });
    clickLog = clickLog.filter((c) => now - c.time < RAGE_INTERVAL * RAGE_THRESHOLD);

    if (clickLog.length >= RAGE_THRESHOLD) {
      const first = clickLog[0];
      const allClose = clickLog.every(
        (c) => Math.abs(c.x - first.x) < 50 && Math.abs(c.y - first.y) < 50
      );
      if (allClose) {
        td.sendSignal({
          type: "RageClick",
          "RageClick.element": describeElement(target),
          "RageClick.clickCount": String(clickLog.length),
          "RageClick.path": location.pathname,
        });
        clickLog = [];
        return;
      }
    }

    // Track dead clicks (clicks on non-interactive elements)
    if (!isInteractive(target)) {
      td.sendSignal({
        type: "DeadClick",
        "DeadClick.element": describeElement(target),
        "DeadClick.path": location.pathname,
      });
    }
  });
})(window.TelemetryDeck);
