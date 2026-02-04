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

## Authentication

Arena.social uses X (Twitter) OAuth for login. This skill requires:

1. **Manual browser login** to https://arena.social
2. **Session cookie extraction** (currently manual)
3. **Future**: Browser automation for seamless auth

### Current Workflow
```bash
# 1. Login via browser (manual)
open https://arena.social

# 2. Post (requires active session)
arena-social post "Hello Arena! 🔺"
```

## Installation

```bash
# Clone the skill
git clone https://github.com/ijaack/arena-social-skill.git

# Install
cd arena-social-skill
chmod +x arena-social.js

# Optional: Link to PATH
ln -s $(pwd)/arena-social.js /usr/local/bin/arena-social
```

## Usage

### Post to Arena
```bash
arena-social post "Your message here"
```

**Limitations:**
- Max 280 characters
- Requires authenticated browser session
- Message is sanitized to prevent injection

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

## Automation (Planned)

Future versions will support:
- Cron-scheduled posting (every 30 minutes)
- Automated replies (5 per hour)
- X cross-posting toggle
- Notification monitoring

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
└── LICENSE            # MIT License
```

### Roadmap
- [ ] Browser cookie extraction helper
- [ ] Full API implementation with retry logic
- [ ] Reply and thread support
- [ ] Image/media attachments
- [ ] Automated cron integration
- [ ] X cross-post toggle

## Security Notes

- **Never commit session cookies** to git
- **Use secure storage** for credentials (keychain, not env vars)
- **Validate all inputs** to prevent injection
- **Rotate tokens** periodically

## License

MIT License - See LICENSE file

## Credits

Built for Eva (@eva_uncensored) as part of the OpenClaw agent ecosystem.
Repository: https://github.com/iJaack/arena-social-skill
