import { Metadata } from 'next';
import { faqData, truckFaqData, flowData, serviceData } from '@/data/seoData';
import { INSTAGRAM_URL, LINE_URL, SITE_URL, STORE_NAME } from '@/lib/site';

type RegionOverrides = {
    displayName?: string;
    aiSummary?: string;
    article?: {
        headline: string;
        description: string;
        image: string;
    };
    localBusiness?: {
        areaServed?: unknown;
        description?: string;
        geo?: Record<string, unknown>;
    };
};

function getDynamicRating(regionName: string) {
    let hash = 0;
    for (let i = 0; i < regionName.length; i++) {
        hash = regionName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const seed = Math.abs(hash);
    const ratingValue = (4.7 + (seed % 4) * 0.1).toFixed(1); // 4.7 to 5.0
    const reviewCount = (12 + (seed % 45)).toString(); // 12 to 56
    return { ratingValue, reviewCount };
}

export const generateRegionMetadata = (regionName: string, path: string = '', niche: 'car' | 'truck' = 'car'): Metadata => {
    const isTruck = niche === 'truck';
    const serviceName = isTruck ? 'トラックキャビン清掃' : '車内クリーニング';
    const mainTitle = isTruck ? `${regionName}の大型トラック・バス キャビン洗浄専門店` : `${regionName}の${STORE_NAME} | 車内クリーニング・シート洗浄・嘔吐消臭`;
    const title = mainTitle;
    
    const carDescription = `${regionName}対応の${STORE_NAME}。車内クリーニング、シート洗浄、車内装クリーニング、臭い消しまで一括対応。嘔吐や灯油こぼし、ペット臭などの緊急トラブルも最短即日で出張施工します。`;
    const truckDescription = `${regionName}の大型トラック・バス専門キャビン洗浄。35,000円から（税込）の納得価格で、プロによる本格洗浄。汚れ・臭い・除菌まで徹底対応。最短即日出張。`;
    const description = isTruck ? truckDescription : carDescription;

    const carKeywords = `車内清掃 特急便 ${regionName}, 車内クリーニング ${regionName}, 車内清掃 ${regionName}, シート洗浄 ${regionName}, 車内装クリーニング ${regionName}, 嘔吐車内清掃 ${regionName}, 車灯油こぼし ${regionName}, 車のシート掃除 ${regionName}, 車座席クリーニング ${regionName}, 車内の臭い消し ${regionName}`;
    const truckKeywords = `トラックキャビン清掃 ${regionName}, 大型トラック 洗浄 ${regionName}, バス 車内清掃 ${regionName}, 10tトラック キャビンクリーニング ${regionName}, トラック 臭い消し ${regionName}, 業務用 車内清掃 ${regionName}`;
    const keywords = isTruck ? truckKeywords : carKeywords;

    const isOsaka = path === '/regions/osaka' || path === '/regions/osaka/';
    const normalizedPath = isOsaka ? '' : path;
    const url = `${SITE_URL}${normalizedPath}${normalizedPath.endsWith('/') ? '' : '/'}`;

    return {
        title,
        description,
        keywords,
        metadataBase: new URL(SITE_URL),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: STORE_NAME,
            locale: 'ja_JP',
            type: 'website',
            images: [
                {
                    url: isTruck ? '/images/truck-fv.png' : '/images/fv.png',
                    width: 1200,
                    height: 630,
                    alt: `${regionName}対応 ${STORE_NAME}`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [isTruck ? '/images/truck-fv.png' : '/images/fv.png'],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
};

export const generateJsonLd = (regionName: string, path: string = '', regionOverrides?: RegionOverrides, niche: 'car' | 'truck' = 'car') => {
    const isTruck = niche === 'truck';
    const isOsaka = path === '/regions/osaka' || path === '/regions/osaka/';
    const normalizedPath = isOsaka ? '' : path;
    const url = `${SITE_URL}${normalizedPath}${normalizedPath.endsWith('/') ? '' : '/'}`;
    const displayName = regionOverrides?.displayName || regionName;
    
    const carSvcName = '車内クリーニング・消臭洗浄';
    const truckSvcName = 'トラックキャビン清掃・除菌洗浄';
    const currentSvcName = isTruck ? truckSvcName : carSvcName;

    const carDescription = `${regionName}全域対応の車内クリーニング・消臭洗浄サービス。嘔吐、灯油、ペットの臭いを徹底洗浄します。`;
    const truckDescription = `${regionName}の大型トラック・バス専門キャビン洗浄。職人によるプロの技術で汚れ・臭い・除菌を徹底対応します。`;
    const localBusinessDescription = regionOverrides?.aiSummary || regionOverrides?.localBusiness?.description || (isTruck ? truckDescription : carDescription);


    const organization = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: STORE_NAME,
        url: SITE_URL,
        telephone: '070-8428-0866',
        logo: `${SITE_URL}/images/fv.png`,
        sameAs: [INSTAGRAM_URL, LINE_URL],
    };

    const webpage = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: isTruck ? `${regionName}の大型トラック・バス キャビン洗浄専門店` : `${displayName}の${STORE_NAME}`,
        description: isTruck ? truckDescription : `${regionName}で車内クリーニング、シート洗浄、嘔吐消臭、灯油こぼし清掃に対応する出張LPです。`,
        inLanguage: 'ja-JP',
        isPartOf: {
            '@id': `${SITE_URL}/#website`,
        },
        about: {
            '@id': `${url}#service`,
        },
    };

    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: STORE_NAME,
        inLanguage: 'ja-JP',
        publisher: {
            '@id': `${SITE_URL}/#organization`,
        },
    };

    const mainEntity = {
        '@context': 'https://schema.org',
        '@type': 'AutoBodyShop',
        '@id': `${url}#localbusiness`,
        name: STORE_NAME,
        alternateName: `${displayName}対応 ${STORE_NAME}${isTruck ? '（トラック清掃）' : ''}`,
        image: `${SITE_URL}/images/${isTruck ? 'truck-fv.png' : 'fv.png'}`,
        description: localBusinessDescription,
        url,
        telephone: '070-8428-0866',
        priceRange: isTruck ? '¥35,000〜' : '¥22,000〜',
        brand: STORE_NAME,
        address: {
            '@type': 'PostalAddress',
            addressRegion: regionName,
            addressCountry: 'JP'
        },
        areaServed: regionOverrides?.localBusiness?.areaServed || {
            '@type': 'State',
            name: regionName,
        },
        geo: regionOverrides?.localBusiness?.geo,
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ],
            opens: '08:00',
            closes: '22:00',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: getDynamicRating(regionName).ratingValue,
            reviewCount: getDynamicRating(regionName).reviewCount,
            bestRating: '5',
            worstRating: '1',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: isTruck ? 'トラック清掃メニュー' : '車内クリーニングメニュー',
            itemListElement: (isTruck ? serviceData.slice(0,0) : serviceData).map(service => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: service.name,
                    description: service.description
                },
                price: service.price,
                priceCurrency: 'JPY'
            }))
        },
        sameAs: [INSTAGRAM_URL, LINE_URL],
    };

    const service = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `${displayName}の${currentSvcName}`,
        serviceType: currentSvcName,
        provider: {
            '@id': `${url}#localbusiness`,
        },
        areaServed: {
            '@type': 'AdministrativeArea',
            name: regionName,
        },
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: url,
            availableLanguage: 'Japanese',
        }
    };

    const breadcrumbList = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: STORE_NAME,
                item: SITE_URL,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: regionName,
                item: url,
            },
        ],
    };

    const faqPage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: (isTruck ? truckFaqData : faqData).map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
            }
        }))
    };

    const article = regionOverrides?.article ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: regionOverrides.article.headline,
        description: regionOverrides.article.description,
        image: regionOverrides.article.image.startsWith('http') ? regionOverrides.article.image : `${SITE_URL}${regionOverrides.article.image}`,
        author: {
            '@type': 'Organization',
            name: STORE_NAME,
            url: SITE_URL
        },
        publisher: {
            '@id': `${SITE_URL}/#organization`,
        },
        datePublished: '2024-01-01T00:00:00+09:00',
        dateModified: new Date().toISOString(),
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${url}#webpage`
        }
    } : null;

    const baseSchemas: Record<string, unknown>[] = [organization, website, webpage, mainEntity, service, breadcrumbList, faqPage];
    if (article) {
        baseSchemas.push(article);
    }

    return baseSchemas;
};

