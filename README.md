# Portfolio Auto Generator (Next.js)

ポートフォリオを自動生成する Next.js アプリケーションです。

⇩ ぜひお試しください

https://portfolio-auto-generator.vercel.app/

7月に行われたMUDS学内ハッカソンで作成した「Autofolio」をブラッシュアップとしてNext.jsを使って再構築し、デプロイしたものです。

元となるプロジェクトのgithubリンク
https://github.com/furuyashikiiori/portfolio-auto

## 機能

- 名前、自己紹介、スキル、制作物の入力フォーム
- 複数のデザインテンプレートから選択可能
- アイコン画像のアップロード機能
- 入力された情報を基にポートフォリオページを自動生成
- レスポンシブ Web デザイン

## 技術スタック

- **Frontend**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **File Upload**: Next.js API Routes
- **Data Storage**: JSON files

## 必要な環境

- Node.js 18.0 以上
- npm, yarn, pnpm, または bun

## インストール・実行手順

### 1. 依存関係のインストール

```bash
npm install
# または
yarn install
# または
pnpm install
# または
bun install
```

### 2. 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

### 3. ブラウザでアクセス

開発サーバーが起動したら、ブラウザで以下の URL にアクセスしてください：

```
http://localhost:3000
```

## 使用方法

1. トップページでポートフォリオ情報を入力
2. 必要に応じてアイコン画像をアップロード
3. 希望するデザインテンプレートを選択
4. 「生成」ボタンをクリック
5. 生成されたポートフォリオページが表示
