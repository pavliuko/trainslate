# Trainslate TODO List

## ✅ Core MVP

- [ ] Mobile-friendly UI:
  - [ ] Responsive layout
  - [ ] Touch-optimized interactions
  - [ ] Accessible buttons and input fields
- [ ] Two-field layout:
  - [ ] Editable input field
  - [ ] Read-only output field (auto-updated)
  - [ ] Copy button to copy translated output to clipboard
- [ ] Translation via OpenAI API
  - [ ] Configurable API key
  - [ ] Uses `chat/completions` endpoint
- [ ] Countdown-based translation trigger:
  - [ ] Start countdown (e.g. 3 seconds) after user stops typing
  - [ ] If user resumes typing, reset countdown
  - [ ] Display visible countdown indicator
- [ ] Instant translation trigger:
  - [ ] On `Enter` keypress, immediately send translation request
- [ ] Interruptible translation:
  - [ ] Allow editing input during translation
  - [ ] Cancels current request and restarts countdown
- [ ] New session trigger:
  - [ ] `Cmd+K` / `Ctrl+K` starts a new translation session (clears input/output and focuses input)


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

- [ ] `Enter`: send translation immediately
- [ ] `Cmd+K` / `Ctrl+K`: 
  - [ ] Start new translation session (clear and focus input)
- [ ] `Cmd+↑ / Cmd+↓`: navigate history
- [ ] `Cmd+C` / `Ctrl+C` (while output field focused): copy translated output to clipboard

## 🚀 Optional / Future Enhancements

- [ ] Auth via third-party provider (to be selected)
- [ ] Support OpenAI-compatible cloud LLM providers (no local models)
- [ ] Prompt preset selector
- [ ] Export/import history
- [ ] Auth/token for multi-user deployment
- [ ] API fallback logic
