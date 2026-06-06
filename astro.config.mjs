// @ts-check
import { defineConfig } from 'astro/config';

// tam1110.github.io はユーザーページのためドメインルートで公開される。
// よって base は不要（'/'）。独自ドメイン化する場合は site を差し替える。
export default defineConfig({
  site: 'https://tam1110.github.io',
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: { prefixDefaultLocale: false }, // 日本語はルート /、英語は /en/
  },
});
