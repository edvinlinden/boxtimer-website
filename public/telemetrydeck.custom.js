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
