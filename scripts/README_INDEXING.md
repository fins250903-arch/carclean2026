# Google Indexing API 一括送信スクリプト 使用方法

このスクリプトは、13地域のサイトマップから全URLを取得し、Google Indexing APIに一括送信します。

## 事前準備

### 1. Google Cloud設定

1. [Google Cloud Console](https://console.cloud.google.com/)にアクセス
2. プロジェクトを作成または選択
3. **Indexing API**を有効化
4. サービスアカウントを作成:
   - IAMと管理 → サービスアカウント → サービスアカウントを作成
   - 名前を入力して作成
   - 鍵を作成(JSON形式)してダウンロード
5. [Google Search Console](https://search.google.com/search-console)で:
   - サイトの所有権を確認
   - サービスアカウントのメールアドレスを**所有者**として追加

### 2. サービスアカウントキーファイルの配置

ダウンロードしたJSON鍵ファイルを以下の場所に配置してください:

```
c:/Users/yu2/Documents/カオル/車内掃除/antiLP/260116/c62cb22cb5a3ede90e4111165782627d7ff8a858.json
```

### 3. 必要なPythonパッケージのインストール

```powershell
pip install google-api-python-client oauth2client requests
```

## 実行方法

### PowerShellから実行

```powershell
cd c:/Users/yu2/Documents/カオル/車内掃除/antiLP/260116
python scripts/submit_indexing.py
```

### 実行結果の例

```
--- サイトマップからURLを取得中 ---
https://carinteriorcleaning.jp: 15件見つかりました
https://carinteriorcleaning.jp/regions/aichi/: 10件見つかりました
https://carinteriorcleaning.jp/regions/okinawa/: 10件見つかりました
...

--- 合計 145 件を送信開始 ---
Successfully submitted: https://carinteriorcleaning.jp
Successfully submitted: https://carinteriorcleaning.jp/regions/aichi/
...
```

## トラブルシューティング

### エラー: `No such file or directory: 'c62cb22cb5a3ede90e4111165782627d7ff8a858.json'`

→ JSON鍵ファイルが正しい場所に配置されていません。ファイルパスを確認してください。

### エラー: `HttpError 403: Permission denied`

→ サービスアカウントがSearch Consoleで所有者として追加されていません。Search Consoleの設定を確認してください。

### エラー: `ImportError: No module named 'googleapiclient'`

→ 必要なパッケージがインストールされていません。`pip install`コマンドを実行してください。

## カスタマイズ

### サイトマップURLの変更

`scripts/submit_indexing.py`の`SITEMAP_URLS`リストを編集してください:

```python
SITEMAP_URLS = [
    'https://carinteriorcleaning.jp',
    'https://carinteriorcleaning.jp/regions/aichi/',
    # 追加のURLをここに記述
]
```

### JSON鍵ファイル名の変更

`scripts/submit_indexing.py`の`JSON_KEY_FILE`を編集してください:

```python
JSON_KEY_FILE = 'your-key-file.json'
```

## 注意事項

- Indexing APIには1日あたりの送信制限があります(200件/日)
- 大量のURLを送信する場合は、複数日に分けて実行してください
- エラーが発生したURLは手動で確認が必要な場合があります
