# Future Creation

## 概要 (Overview)
このプロジェクトは、Node.js、Express、Socket.IOを使用して構築されたリアルタイムWebアプリケーションです。
複数のユーザー間でアバターの位置情報を同期したり、動画の再生状態を共有したりする機能を備えています。

## 機能 (Features)
- **リアルタイム通信**: Socket.IOを用いた双方向通信。
- **アバター位置同期**: 各ユーザーのアバター位置情報をリアルタイムで他のユーザーと共有します。
- **動画の同期再生**: ユーザー間での動画の再生・一時停止などのコントロール状態を共有します。
- **静的ファイルの配信**: `public` ディレクトリから3Dモデルや動画などの静的コンテンツを提供します。

## 使用技術 (Tech Stack)
- **バックエンド**: Node.js, Express, Socket.IO
- **フロントエンド**: HTML, JavaScript (Socket.IO client)

## 動作環境 (Prerequisites)
- [Node.js](https://nodejs.org/) がインストールされていること

## インストール手順 (Installation)

1. リポジトリをクローンします。
   ```bash
   git clone <repository-url>
   cd "future creation" # クローンしたディレクトリに移動
   ```

2. 依存パッケージをインストールします。
   ```bash
   npm install
   ```

## 起動方法 (Usage)

1. サーバーを起動します。
   ```bash
   node server.js
   ```

2. ブラウザを開き、以下のURLにアクセスします。
   ```
   http://localhost:3000
   ```

## ディレクトリ構成 (Directory Structure)
```text
.
├── server.js          # エントリーポイント（サーバーサイドのメインロジック）
├── package.json       # パッケージと依存関係の設定
└── public/            # フロントエンドの静的ファイル（ブラウザで表示）
    ├── index.html     # メインページ
    ├── models/        # 3Dモデルなどのアセット
    └── *.mp4          # 動画ファイル
```


