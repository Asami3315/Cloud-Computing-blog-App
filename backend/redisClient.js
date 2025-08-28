// backend/redisClient.js
const { createClient } = require('redis');

const host = process.env.REDIS_HOST || '127.0.0.1';
const port = process.env.REDIS_PORT || 6379;
const url  = `redis://${host}:${port}`;

const client = createClient({ url });

client.on('error', err => console.error('🔴 Redis Error:', err));

async function connectRedis() {
  await client.connect();
  console.log('✅ Connected to Redis at', url);
}

module.exports = { client, connectRedis };
