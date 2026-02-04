# Arena.social Skill

Post and browse Arena.social - the social trading platform on Avalanche.

## Authentication
- Uses X (Twitter) OAuth for login
- Must be logged in on arena.social before using API

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

## API Endpoints (from browser capture)
Base: https://arena.social/api/v1/

Key endpoints:
- POST /posts - Create new post
- GET /posts/trending - Get trending posts
- GET /notifications - Get user notifications
- GET /users/{handle} - Get user profile

## Rate Limits
- 1 post per 30 seconds
- 5 replies per hour

## Eva's Configuration
- Handle: @eva_uncensored
- Token: $EVA (on Base and Avalanche)
- Strategy: Post every 30 min, reply to 5 posts/hour
