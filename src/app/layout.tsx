import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { GOOGLE_SITE_VERIFICATION, SITE_URL, STORE_NAME } from '@/lib/site';

const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"],
    variable: '--font-noto-sans-jp'
});

export const metadata: Metadata = {
    title: `${STORE_NAME} | 車内クリーニング・シート洗浄の専門店`,
    description: "車内清掃「特急便」は、車内クリーニング、シート洗浄、嘔吐・灯油・ペット臭の消臭洗浄に対応する出張専門サービスです。地域ごとに最適化したLPと構造化データで検索性を強化しています。",
    keywords: "車内清掃 特急便, 車内クリーニング, シート洗浄, 嘔吐掃除, 消臭, 車内清掃",
    metadataBase: new URL(SITE_URL),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: `${STORE_NAME} | 車内クリーニング・シート洗浄の専門店`,
        description: "車内清掃「特急便」は、車内クリーニング、シート洗浄、嘔吐・灯油・ペット臭の消臭洗浄に対応する出張専門サービスです。",
        url: SITE_URL,
        siteName: STORE_NAME,
        locale: 'ja_JP',
        type: 'website',
        images: [
            {
                url: '/images/fv.png',
                width: 1200,
                height: 630,
                alt: STORE_NAME,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${STORE_NAME} | 車内クリーニング・シート洗浄の専門店`,
        description: "車内クリーニング、シート洗浄、嘔吐・灯油・ペット臭の消臭洗浄に対応する出張専門サービス。",
        images: ['/images/fv.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
    verification: {
        google: GOOGLE_SITE_VERIFICATION,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={notoSansJP.className}>{children}</body>
        </html>
    );
}
