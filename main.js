import { IPATool } from './src/ipa.js';

const ipaTool = new IPATool();

await ipaTool.downipa({
    path: './app',
    APPID: process.env.APPID,
    appVerId: process.env.APP_VER_ID,
    APPLE_ID: process.env.APPLE_ID,
    PASSWORD: process.env.PASSWORD,
    CODE: process.env.CODE || ''
});
