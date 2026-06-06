# Naoki Tamura — Personal Website

田村 直樹 の個人サイト（研究プロフィール・業績・プロジェクト紹介）のソースコードです。

**Stack:** [Astro](https://astro.build/) + TypeScript / GitHub Pages

## Development

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # dist/ に静的サイトを出力
npm run check    # 型チェック
```

## Deploy

`main` へ push すると GitHub Actions（`.github/workflows/deploy.yml`）が
自動でビルドし、`https://tam1110.github.io/` に公開します
（Settings → Pages → Source = "GitHub Actions"）。
