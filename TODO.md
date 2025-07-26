@@ -0,0 +1,68 @@
# Trainslate TODO List

## ✅ Core MVP

- [x] Prompt, and api key should be set via env variables
- [x] Two-field layout:
  - [x] Editable input field
  - [x] Read-only output field (auto-updated)
  - [x] Copy button to copy translated output to clipboard
- [x] Translation via OpenAI API
  - [x] Configurable API key
  - [x] Uses `chat/completions` endpoint
- [x] Countdown-based translation trigger:
  - [x] Start countdown (e.g. 3 seconds) after user stops typing
  - [x] If user resumes typing, reset countdown
  - [x] Display visible countdown indicator
- [x] Instant translation trigger:
  - [x] On `Enter` keypress, immediately send translation request
- [x] Interruptible translation:
  - [x] Allow editing input during translation
  - [x] Cancels current request and restarts countdown
- [x] New session trigger:
  - [x] `Cmd+K` / `Ctrl+K` starts a new translation session (clears input/output and focuses input)
- [x] Mobile-friendly UI:
  - [x] Responsive layout
  - [x] Touch-optimized interactions
  - [x] Accessible buttons and input fields



## 🔁 History

- [ ] Save each translation with:
  - [ ] Timestamp
  - [ ] Input and output text
  - [ ] Optional: prompt used
- [ ] Show translation history list
- [ ] Reuse past inputs
- [ ] Store history locally in browser storage
- [ ] Backend/database architecture to be defined in future


## 📊 Usage Tracking

- [ ] Optional: track token usage
- [ ] Optional: per-day or per-user stats


## ⚙️ Customization

- [ ] All customization (prompt behavior, logic) via forking the repository
- [ ] Easy to modify source to adjust tone, domain, or behavior


## ⌨️ Hotkeys

- [x] `Enter`: send translation immediately
- [x] `Cmd+K` / `Ctrl+K`: 
  - [x] Start new translation session (clear and focus input)
- [ ] `Cmd+↑ / Cmd+↓`: navigate history
- [ ] `Cmd+C` / `Ctrl+C` (while output field focused): copy translated output to clipboard

## 🚀 Optional / Future Enhancements

- [ ] Auth via third-party provider (to be selected)
- [ ] Support OpenAI-compatible cloud LLM providers (no local models)
- [ ] Prompt preset selector
- [ ] Export/import history
- [ ] Auth/token for multi-user deployment
- [ ] API fallback logic
