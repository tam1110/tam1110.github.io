# Naoki Tamura Personal Website

This repository contains the source code for my personal website
(研究プロフィール・プロジェクト紹介・外部リンクの入口).

## Tech Stack

- [Astro](https://astro.build/)
- TypeScript
- GitHub Pages (deployed via GitHub Actions)

## Development

```bash
npm install
npm run dev
```

開発サーバは http://localhost:4321/ で起動します。

## Build

```bash
npm run build      # dist/ に静的サイトを出力
npm run preview    # 本番ビルドをローカルで確認
npm run check      # Astro / TypeScript の型チェック
```

## Deploy

`main` ブランチへ push すると、GitHub Actions (`.github/workflows/deploy.yml`)
が自動でビルドし GitHub Pages に公開します。

### 初回セットアップ

1. GitHub で `tam1110.github.io` リポジトリを作成する。
2. この `site/` ディレクトリの **中身をリポジトリ直下** として push する。
   （`.github/workflows/deploy.yml` もそのまま直下に入る）
3. リポジトリの **Settings → Pages → Source** を「**GitHub Actions**」に設定する。
4. `main` へ push すると Actions が走り、`https://tam1110.github.io/` で公開される。

> Astro プロジェクトをサブフォルダのまま push する場合は、`deploy.yml` の
> `withastro/action@v3` に `path:` を指定してください。

## Pages

優先実装（このフェーズ）:

- `/` Home
- `/about` About
- `/projects` Projects（OpenUAS / LocationBind）
- `/projects/openuas`
- `/projects/locationbind`
- `/links` Links

後続フェーズ: Publications（Markdown 管理）、Research、Contact、OGP 画像、日英切替、独自ドメイン。
