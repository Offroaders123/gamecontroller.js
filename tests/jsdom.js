import { JSDOM } from 'jsdom';

const { window } = new JSDOM("", { pretendToBeVisual: true });

// @ts-expect-error
globalThis.window = window;