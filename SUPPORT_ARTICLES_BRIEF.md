# Box Timer — Support Articles Brief

This document contains everything needed to write support articles for the Box Timer iOS app. A separate Claude session should use this to produce the articles.

---

## About the App

Box Timer is a free, no-ads workout timer app for iPhone and iPad built with SwiftUI. It has three timer types (Up, Down, Intervals), workout history, display themes, multi-language support, and sound settings. There are no premium/paid features. The app uses a dark theme exclusively.

The support articles live at **https://boxtimer.app/support/**.

---

## Existing Support Articles (DO NOT rewrite these)

These articles already exist on the website:

1. **How to set a timer that counts down** — `/support/how-to-set-a-timer-that-counts-down/`
2. **How to set a timer that counts up** — `/support/how-to-set-a-timer-that-counts-up/`
3. **How to set an interval timer with both work and rest time** — `/support/how-to-set-an-interval-timer-with-both-work-and-rest-time/`
4. **How to set an interval timer with work time only** — `/support/how-to-set-a-interval-timer-with-work-time-only/`
5. **How to display the large timer** — `/support/how-to-display-the-large-timer/`
6. **How to change language** — `/support/how-to-change-language/`
7. **How to share the app with a friend** — `/support/how-to-share-the-app-with-a-friend/`

---

## Features That Need Support Articles

Below are all features NOT yet covered. Each section describes the feature in detail so accurate articles can be written.

---

### 1. How to enable or disable the countdown before a timer

**Feature:** There is an optional 10-second countdown that plays before the main timer starts. It applies to all timer types (Up, Down, Intervals).

**How it works:**
- The toggle is found in the timer settings modal (tap "Edit Timer" in the toolbar).
- When enabled, a 10-second countdown counts from 10 to 0 before the main timer begins.
- During the last 3 seconds (3, 2, 1), audio beeps play (if sound effects are on).
- The setting persists across app launches.
- The countdown status is also shown in the workout history entries.

**UI location:** Timer tab → Toolbar → "Edit Timer" button → Countdown toggle at the bottom of the settings modal.

---

### 2. How to adjust sound effects and volume

**Feature:** The app has configurable sound effects with a separate volume control.

**How it works:**
- Sound effects toggle: turns all beep sounds on or off.
- Volume slider: controls the volume of beep sounds from 0% to 100%.
- Sound effects include:
  - Short beeps (100ms) during the last 3 seconds of a countdown.
  - Long beeps (500ms) at round transitions in interval timers.
  - Short beeps during the last 3 seconds of a rest period in intervals.
- The app mixes its audio with other audio sources — it will not interrupt music, podcasts, or phone calls.

**UI location:** Timer tab → Toolbar → Speaker icon → Popover with toggle and volume slider.

---

### 3. How to change the display theme

**Feature:** Three display themes control how the timer numbers look.

**Available themes:**
1. **Standard** (default) — Green prefix, red time numbers, glow effect on digits.
2. **Minimal** — Green prefix, red time numbers, no glow effect. Cleaner look.
3. **High Contrast** — Blue prefix, orange time numbers, no glow effect. Designed for better visibility/accessibility.

**How it works:**
- Select a theme and the timer display updates instantly.
- The setting persists across app launches.

**UI location:** About tab → Settings section → Display Theme picker.

---

### 4. How to view workout history

**Feature:** Every completed timer session is automatically saved to workout history.

**What is saved:**
- Timestamp of the workout.
- Timer type (Up, Down, or Intervals).
- Timer configuration (duration, rounds, work/rest times).
- Whether the countdown was enabled.
- Custom name (if set).

**How it works:**
- Navigate to the History tab to see all past workouts.
- Workouts are sorted with pinned items first, then by newest timestamp.
- Each entry shows:
  - The workout name (or timer type if unnamed).
  - Relative timestamp ("Today", day name for recent, or full date for older).
  - Timer configuration details.
- Filter workouts by type using the filter control at the top: All, Up, Down, or Intervals.

**UI location:** History tab (second tab in the tab bar).

---

### 5. How to pin a workout in history

**Feature:** Pin frequently used workouts so they always appear at the top of the history list.

**How it works:**
- Swipe right on a workout in the history list.
- Tap the pin action button.
- Pinned workouts show a pin icon and appear at the top of the list.
- To unpin, swipe right again and tap the pin button to toggle it off.

**UI location:** History tab → Swipe right on any workout entry.

---

### 6. How to name or rename a workout

**Feature:** Give a custom name (up to 20 characters) to any workout in history for easy identification.

**How it works:**
- Swipe right on a workout in the history list.
- Tap the rename action button.
- Enter a custom name (max 20 characters).
- Workouts with a custom name show a purple dot indicator.
- The custom name replaces the default timer type label in the list.
- To remove a custom name, rename it to an empty string.

**UI location:** History tab → Swipe right on any workout entry → Rename action.

---

### 7. How to reuse settings from a previous workout

**Feature:** Quickly apply the timer settings from any past workout to the current timer.

**How it works:**
- In the History tab, tap on any workout entry.
- A confirmation dialog appears asking if the settings should be applied.
- Confirm to instantly load that workout's configuration (timer type, duration, rounds, work/rest times, countdown setting).
- The timer tab switches to the correct timer type with all settings applied.
- This is a quick way to repeat a workout without manually reconfiguring the timer.

**UI location:** History tab → Tap on any workout entry.

---

### 8. How to delete a workout from history

**Feature:** Remove unwanted workout entries from the history list.

**How it works:**
- Swipe left on a workout in the history list.
- Tap the delete action button.
- The workout is permanently removed.

**UI location:** History tab → Swipe left on any workout entry.

---

### 9. How to keep the screen on during a workout

**Feature:** The screen automatically stays on while a timer is running so the display doesn't go dark.

**How it works:**
- This is automatic — no user action needed.
- When a timer is running, the screen will not turn off due to the idle timer.
- When the timer is stopped or reset, normal screen timeout behavior resumes to save battery.
- There is no setting to toggle this; it is always active.

**Note:** This article should reassure users that the screen staying on is intentional and that battery usage returns to normal when the timer stops.

---

### 10. How to control the timer in landscape mode

**Feature:** In landscape orientation, the timer shows a large full-screen display that is controlled by tapping.

**How it works:**
- Rotate the device to landscape orientation.
- The timer fills the entire screen with large digits for easy reading from a distance.
- Tap anywhere on the timer display to start, pause, or resume.
- On-screen text shows the current action: "TAP TO START", "TAP TO PAUSE", or "TAP TO RESUME".
- To access settings or other tabs, rotate back to portrait orientation.

**Note:** The existing article "How to display the large timer" may already cover rotation, but this focuses on the tap-to-control interaction in landscape mode. Check the existing article before publishing to avoid overlap.

---

### 11. How to contact support or send feedback

**Feature:** Users can send feedback or ask questions via email directly from the app.

**How it works:**
- Navigate to the About tab.
- Tap "Contact" in the support section.
- The device's email app opens with a pre-filled subject line and device information.
- If the default Mail app is not available, the app offers alternative email clients (Gmail, Outlook, Spark, Yahoo Mail).

**UI location:** About tab → Contact.

---

### 12. How to support the developer

**Feature:** Users can support the developer through a "Buy me a coffee" donation link.

**How it works:**
- Navigate to the About tab.
- Tap "Buy me a coffee" link.
- This opens the external donation page in the browser.

**UI location:** About tab → "Buy me a coffee" link.

---

## App Details (for reference in articles)

- **App name:** Box Timer
- **Platform:** iOS (iPhone and iPad)
- **Price:** Free, no ads, no in-app purchases
- **Theme:** Dark mode only
- **Timer display font:** Digital-7 Mono (digital/segment-style display)
- **Supported languages:** English, German (Deutsch), Spanish (Español), French (Français), Polish (Polski), Swedish (Svenska)
- **Timer format:** MM:SS (minutes:seconds)
- **Timer prefixes:** "UP" for count-up, "DN" for countdown, round number (e.g. "1", "2") for intervals, "r" suffix during rest periods in intervals

## Navigation Structure

- **Timer tab** — Main timer display, start/pause/reset controls, toolbar with Edit Timer and Sound settings.
- **History tab** — List of all past workouts with filter, swipe actions, and tap-to-apply.
- **About tab** — Settings (theme, language), sharing (share link, QR code), support (contact, website, privacy policy), developer links.

## Style Guidance for Articles

- Keep articles short and scannable — users want quick answers.
- Use numbered steps for how-to instructions.
- Match the tone of existing articles at https://boxtimer.app/support/.
- Each article should have a clear title starting with "How to..." where appropriate.
- Include which tab or screen the feature is located on.
