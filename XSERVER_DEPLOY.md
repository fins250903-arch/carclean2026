# Xserver デプロイ手順

このサイトは静的出力です。Xserver には out フォルダの中身をそのまま配置します。

## 1. ビルド

PowerShell でプロジェクト直下に移動して実行します。

```powershell
if (Test-Path '.\out') { Remove-Item '.\out' -Recurse -Force }
npm run build
```

実行後に以下が自動生成されます。

- out/.htaccess
- deploy/xserver-deploy.zip

自動アップロード用スクリプトもあります。

- scripts/deploy-xserver.ps1

## 2. Xserver へアップロード

アップロード先は通常 public_html です。

- zip を使う場合: deploy/xserver-deploy.zip を展開して、中身を public_html にアップロード
- フォルダを使う場合: out の中身を public_html にアップロード

PowerShell から自動アップロードする場合:

```powershell
$env:XSERVER_HOST = 'sv***.xserver.jp'
$env:XSERVER_USER = 'xserver-account-or-ftp-user'
$env:XSERVER_PASSWORD = 'your-password'
$env:XSERVER_REMOTE_PATH = 'public_html'

powershell -ExecutionPolicy Bypass -File .\scripts\deploy-xserver.ps1 -Protocol ftps
```

SFTP を使う場合:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\deploy-xserver.ps1 -Protocol sftp
```

注意点:

- out フォルダ自体を一段上に置かず、中身だけを public_html に置く
- 既存ファイルがある場合はバックアップを取ってから置き換える
- mail.php も同じ階層に配置される
- Xserver の接続先パスが public_html 直下でない場合は XSERVER_REMOTE_PATH を実サーバーパスに変更する

## 3. 配置後の確認

以下をブラウザで確認します。

- /
- /regions/tokyo/
- /robots.txt
- /sitemap.xml
- /mail.php

mail.php はブラウザで直接開くと Method Not Allowed か JSON エラーになれば正常です。

## 4. この設定で入るもの

out/.htaccess で以下を設定しています。

- index.html を優先表示
- ディレクトリ一覧を無効化
- 末尾スラッシュへ 301 正規化
- gzip 圧縮
- 静的アセットのキャッシュ制御
- 最低限のセキュリティヘッダー

## 5. 更新時

更新時も同じです。

```powershell
if (Test-Path '.\out') { Remove-Item '.\out' -Recurse -Force }
npm run build
```

新しく生成された deploy/xserver-deploy.zip を再アップロードします。

自動アップロードする場合は、ビルド後に以下です。

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\deploy-xserver.ps1 -Protocol ftps
```