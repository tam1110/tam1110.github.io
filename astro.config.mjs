// @ts-check
import { defineConfig } from 'astro/config';

// tam1110.github.io はユーザーページのためドメインルートで公開される。
// よって base は不要（'/'）。独自ドメイン化する場合は site を差し替える。
export default defineConfig({
  site: 'https://tam1110.github.io',
});
