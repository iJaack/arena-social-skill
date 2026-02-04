#!/usr/bin/env node
/**
 * Arena.social CLI
 * Post and browse Arena.social
 * 
 * Requires active browser session logged into arena.social
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const ARENA_BASE = 'arena.social';
const COOKIE_PATH = path.join(process.env.HOME || process.env.USERPROFILE, '.config', 'arena-social', 'cookies.json');

// Load session cookies from browser storage
function loadCookies() {
  try {
    if (fs.existsSync(COOKIE_PATH)) {
      return JSON.parse(fs.readFileSync(COOKIE_PATH, 'utf8'));
    }
  } catch (err) {
    // Silent fail - will use empty cookies
  }
  return {};
}

// Make authenticated request to Arena API
async function arenaRequest(endpoint, method = 'GET', data = null) {
  const cookies = loadCookies();
  const cookieHeader = Object.entries(cookies)
    .map(([k, v]) => `${k}=${v}`)
    .join('; ');

  const options = {
    hostname: ARENA_BASE,
    path: endpoint,
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      'Origin': 'https://arena.social',
      'Referer': 'https://arena.social/',
      ...(cookieHeader && { 'Cookie': cookieHeader })
    },
    timeout: 10000
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ status: res.statusCode, data: data ? JSON.parse(data) : null });
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
          }
        } catch (e) {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

// Validate message input
function validateMessage(message) {
  if (!message || message.trim().length === 0) {
    throw new Error('Message cannot be empty');
  }
  if (message.length > 280) {
    throw new Error('Message exceeds 280 character limit');
  }
  // Sanitize to prevent injection
  return message.trim().replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, '');
}

async function post(message) {
  try {
    const sanitizedMessage = validateMessage(message);
    console.log(`🎯 Posting to Arena: "${sanitizedMessage.substring(0, 50)}${sanitizedMessage.length > 50 ? '...' : ''}"`);
    
    // Note: Full API implementation requires browser cookie extraction
    // This is a scaffold - actual implementation needs browser-automation for auth
    console.log('⚠️  API integration pending - requires authenticated session');
    console.log('   To post: Use browser automation or manually extract session cookie');
    
    process.exitCode = 1;
  } catch (err) {
    console.error(`❌ Post failed: ${err.message}`);
    process.exitCode = 1;
  }
}

async function trending() {
  try {
    console.log('🔥 Fetching trending posts...');
    const result = await arenaRequest('/api/trending');
    console.log('✅ Trending posts:', result.data);
  } catch (err) {
    console.error(`❌ Failed to fetch trending: ${err.message}`);
    process.exitCode = 1;
  }
}

async function notifications() {
  try {
    console.log('🔔 Fetching notifications...');
    console.log('⚠️  Requires authenticated session');
    process.exitCode = 1;
  } catch (err) {
    console.error(`❌ Failed: ${err.message}`);
    process.exitCode = 1;
  }
}

function showUsage() {
  console.log(`
Arena.social CLI

Usage:
  arena-social post "Your message"    Post a message (max 280 chars)
  arena-social trending               Show trending posts
  arena-social notifications          Show notifications (requires auth)
  arena-social --help                 Show this help

Authentication:
  Requires active browser session at https://arena.social
  Login with X (@eva_uncensored) to enable posting.

Examples:
  arena-social post "Hello Arena! 🔺"
  arena-social trending
`);
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (!command || command === '--help' || command === '-h') {
    showUsage();
    process.exitCode = command ? 0 : 2;
    return;
  }
  
  switch (command) {
    case 'post':
      const message = args.slice(1).join(' ');
      if (!message) {
        console.error('❌ Error: Message required');
        console.error('Usage: arena-social post "Your message"');
        process.exitCode = 2;
        return;
      }
      await post(message);
      break;
      
    case 'trending':
      await trending();
      break;
      
    case 'notifications':
      await notifications();
      break;
      
    default:
      console.error(`❌ Unknown command: ${command}`);
      showUsage();
      process.exitCode = 2;
  }
}

main().catch(err => {
  console.error(`❌ Unexpected error: ${err.message}`);
  process.exitCode = 1;
});
