import os
import json
import requests
from oauth2client.service_account import ServiceAccountCredentials
from googleapiclient.discovery import build
import xml.etree.ElementTree as ET

# ================= 設定項目 =================
# 1. Google Cloudで取得したJSON鍵ファイル名
JSON_KEY_FILE = 'c62cb22cb5a3ede90e4111165782627d7ff8a858.json' 

# 2. 13地域のサイトマップURLリスト
SITEMAP_URLS = [
    'https://carinteriorcleaning.jp',
    'https://carinteriorcleaning.jp/regions/aichi/',
    'https://carinteriorcleaning.jp/regions/okinawa/',
    'https://carinteriorcleaning.jp/regions/fukuoka/',
    'https://carinteriorcleaning.jp/regions/hyogo/',
    'https://carinteriorcleaning.jp/regions/ibaraki/',
    'https://carinteriorcleaning.jp/regions/chiba/',
    'https://carinteriorcleaning.jp/regions/saitama/',
    'https://carinteriorcleaning.jp/regions/shiga/',
    'https://carinteriorcleaning.jp/regions/kumamoto/',
    'https://carinteriorcleaning.jp/regions/miyagi/',
    'https://carinteriorcleaning.jp/regions/tochigi/',
    'https://carinteriorcleaning.jp/regions/kyoto/',
]
# ===========================================

def get_urls_from_sitemap(sitemap_url):
    """サイトマップからURLリストを抽出する"""
    try:
        response = requests.get(sitemap_url)
        response.raise_for_status()
        root = ET.fromstring(response.content)
        # サイトマップのネームスペースに対応
        namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        urls = [loc.text for loc in root.findall('.//ns:loc', namespace)]
        return urls
    except Exception as e:
        print(f"Error fetching sitemap {sitemap_url}: {e}")
        return []

def submit_to_indexing_api(url_list):
    """Indexing APIにURLを送信する"""
    scopes = ['https://www.googleapis.com/auth/indexing']
    credentials = ServiceAccountCredentials.from_json_keyfile_name(JSON_KEY_FILE, scopes=scopes)
    service = build('indexing', 'v3', credentials=credentials)

    for url in url_list:
        body = {
            'url': url,
            'type': 'URL_UPDATED'  # 更新または新規作成を通知
        }
        try:
            result = service.urlNotifications().publish(body=body).execute()
            print(f"Successfully submitted: {url}")
        except Exception as e:
            print(f"Failed to submit {url}: {e}")

if __name__ == "__main__":
    all_urls = []
    
    print("--- サイトマップからURLを取得中 ---")
    for sitemap in SITEMAP_URLS:
        urls = get_urls_from_sitemap(sitemap)
        print(f"{sitemap}: {len(urls)}件見つかりました")
        all_urls.extend(urls)
    
    # 重複削除
    all_urls = list(set(all_urls))
    
    if all_urls:
        print(f"\n--- 合計 {len(all_urls)} 件を送信開始 ---")
        submit_to_indexing_api(all_urls)
    else:
        print("送信するURLが見つかりませんでした。")
