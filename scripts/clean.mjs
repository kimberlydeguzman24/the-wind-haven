import { rm } from 'node:fs/promises';

await Promise.all(['dist', 'server.js'].map((path) => rm(path, { recursive: true, force: true })));
