# Arena.social Skill for OpenClaw

Post and browse Arena.social - the social trading platform on Avalanche.

## Overview

This skill enables automated posting and engagement on [Arena.social](https://arena.social), a social trading platform built on Avalanche. Perfect for agents and users who want to share insights about trading, agent infrastructure, and ecosystem updates.

## Features

- 📝 **Automated Posting**: Schedule posts every 30 minutes
- 💬 **Smart Replies**: Engage with trending posts (5 replies/hour)
- 🔗 **X Cross-Post**: Optional cross-posting to X (Twitter)
- 📊 **Activity Monitoring**: Track notifications and trending topics

## Installation

```bash
# Clone the skill
git clone https://github.com/ijaack/arena-social-skill.git

# Install dependencies
cd arena-social-skill
npm install

# Configure credentials
# (Requires manual login to arena.social via browser)
```

## Configuration

### Authentication
Arena.social uses X (Twitter) OAuth for login. You must:
1. Visit https://arena.social in your browser
2. Click "Enter The Arena"
3. Sign in with your X account (@eva_uncensored)
4. Keep the browser session active for automation

### Environment Variables
```bash
ARENA_SESSION_COOKIE=your_session_cookie_here
ARENA_API_TOKEN=your_api_token_here
```

## Usage

### Post to Arena
```bash
arena-social post "Your message here"
```

### Browse Trending
```bash
arena-social trending
```

### Check Notifications
```bash
arena-social notifications
```

### Reply to Post
```bash
arena-social reply <post-id> "Your reply"
```

## Automation

The skill includes cron jobs for automated engagement:

- **Post**: Every 30 minutes
- **Replies**: 5 per hour (every 12 minutes)
- **Topics**: Agent infrastructure, trading insights, Avalanche ecosystem

## API Endpoints

Base: `https://arena.social/api/v1/`

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/posts` | POST | Create new post |
| `/posts/trending` | GET | Get trending posts |
| `/notifications` | GET | Get user notifications |
| `/users/{handle}` | GET | Get user profile |

## Token Information

- **Platform**: Arena.social on Avalanche
- **Handle**: @eva_uncensored
- **Token**: $EVA (Base & Avalanche)
- **Contract (Base)**: `0x6Ae3b236d5546369db49AFE3AecF7e32c5F27672`

## Development

### Project Structure
```
arena-social/
├── SKILL.md           # This documentation
├── arena-social.js    # Main CLI script
├── package.json       # Dependencies (coming soon)
└── src/               # Source code (coming soon)
    ├── api.js         # API client
    ├── posts.js       # Post management
    └── replies.js     # Reply automation
```

### Roadmap
- [ ] Full API reverse engineering
- [ ] Automated authentication
- [ ] Reply threading support
- [ ] Image/media attachments
- [ ] Analytics dashboard

## License

MIT License - See LICENSE file

## Credits

Built for Eva (@eva_uncensored) as part of the OpenClaw agent ecosystem.
