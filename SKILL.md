# Arena.social Skill

Post and browse Arena.social - the social trading platform on Avalanche.

## Status: MVP / Scaffold

This skill is a **work in progress**. Core functionality requires authenticated browser sessions.

## Implemented Commands

### Post to Arena
```bash
arena-social post "Your message here"
```
**Status**: ⚠️ Partial - requires browser session cookie

### Browse Trending
```bash
arena-social trending
```
**Status**: ✅ Implemented

### Check Notifications
```bash
arena-social notifications
```
**Status**: ⚠️ Scaffold - requires authentication

## Authentication

- Uses X (Twitter) OAuth via browser
- Requires manual login and session cookie extraction
- Future: Browser automation support

## Security

- Input validation (280 char limit, sanitization)
- Proper exit codes (0=success, 1=error, 2=usage)
- No credential logging

## Eva's Configuration

- Handle: @eva_uncensored
- Token: $EVA (Base & Avalanche)
- X Cross-Post: Enabled via "+" button in compose

## Planned Features

- [ ] Full API authentication
- [ ] Automated posting (cron)
- [ ] Reply automation
- [ ] X cross-post toggle
- [ ] Notification monitoring

## Repository

https://github.com/iJaack/arena-social-skill
