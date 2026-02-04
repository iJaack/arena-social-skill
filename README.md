# Arena.social Skill for OpenClaw

Post and browse Arena.social - the social trading platform on Avalanche.

## ⚠️ Status: MVP / Scaffold

This skill is currently a **scaffold** with partial implementation. The API integration requires authenticated session cookies from a browser login.

## Current Implementation Status

| Feature | Status | Notes |
|---------|--------|-------|
| `post` | ⚠️ Partial | Requires browser session cookie |
| `trending` | ✅ Implemented | Public endpoint |
| `notifications` | ⚠️ Scaffold | Requires authentication |
| `reply` | 🚫 Not implemented | Planned |
| Automated cron | 🚫 Not implemented | Planned |

## Installation

```bash
# Clone the skill
git clone https://github.com/iJaack/arena-social-skill.git

# Install
cd arena-social-skill
chmod +x arena-social.js

# Optional: Link to PATH
ln -s $(pwd)/arena-social.js /usr/local/bin/arena-social
```

## Configuration

### Secure Credential Storage

**⚠️ NEVER commit credentials to git!**

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit `.env` with your session cookie (see Authentication below)

3. The `.gitignore` already protects `.env` files

### Authentication

Arena.social uses X (Twitter) OAuth for login. This skill requires:

1. **Manual browser login** to https://arena.social
2. **Session cookie extraction**:
   - Login with X (@eva_uncensored)
   - Open DevTools → Application → Cookies
   - Find the session cookie
   - Add to `.env` file
3. **Future**: Browser automation for seamless auth

### Current Workflow
```bash
# 1. Setup environment
cp .env.example .env
# Edit .env with your session cookie

# 2. Post (requires active session)
arena-social post "Hello Arena! 🔺"
```

## Usage

### Post to Arena
```bash
arena-social post "Your message here"
```

**Features:**
- ✅ Max 280 characters (validated)
- ✅ Input sanitization (prevents injection)
- ✅ Truncated logging (no credential leaks)
- ⚠️ Requires authenticated browser session

### Browse Trending
```bash
arena-social trending
```

### Check Notifications (requires auth)
```bash
arena-social notifications
```

### Help
```bash
arena-social --help
```

## Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | Runtime error |
| 2 | Usage error (invalid args) |

## Automation (Planned)

Future versions will support:
- Cron-scheduled posting (every 30 minutes)
- Automated replies (5 per hour)
- X cross-posting toggle (via "+" button)
- Notification monitoring

## Security Best Practices

- ✅ `.env` files excluded from git (see `.gitignore`)
- ✅ Input validation and sanitization
- ✅ Truncated logging (prevents credential leaks)
- ✅ Proper exit codes for error handling
- 🔒 Use OS keychain for production deployments
- 🔄 Rotate session cookies periodically

## Token Information

- **Platform**: Arena.social on Avalanche
- **Handle**: @eva_uncensored
- **Token**: $EVA
- **Contract (Base)**: `0x6Ae3b236d5546369db49AFE3AecF7e32c5F27672`

## Development

### Project Structure
```
arena-social/
├── SKILL.md           # OpenClaw skill documentation
├── README.md          # This file
├── arena-social.js    # Main CLI implementation
├── package.json       # Package metadata
├── .env.example       # Environment template
├── .gitignore         # Git exclusions
└── LICENSE            # MIT License
```

### Roadmap
- [ ] Browser cookie extraction helper
- [ ] Full API implementation with retry logic
- [ ] Reply and thread support
- [ ] Image/media attachments
- [ ] Automated cron integration
- [ ] X cross-post toggle

## Changelog

### v1.0.1
- ✅ Fixed audit issues (input validation, exit codes, docs)
- ✅ Added `.env.example` and `.gitignore`
- ✅ Removed unused dependencies
- ✅ Added security best practices

### v1.0.0
- Initial scaffold release

## License

MIT License - See LICENSE file

## Credits

Built for Eva (@eva_uncensored) as part of the OpenClaw agent ecosystem.
Repository: https://github.com/iJaack/arena-social-skill
