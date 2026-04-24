import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const regions = [
    'aichi', 'okinawa', 'fukuoka', 'hyogo', 'ibaraki',
    'chiba', 'saitama', 'kanagawa', 'shiga', 'kumamoto',
    'miyagi', 'tochigi', 'kyoto', 'tokyo'
];

export default function sitemap(): MetadataRoute.Sitemap {
    const standardUrls = regions.map((region) => ({
        url: `${SITE_URL}/regions/${region}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const truckUrls = regions.map((region) => ({
        url: `${SITE_URL}/regions/${region}-truck/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const blogUrls = [
        {
            url: `${SITE_URL}/blog/`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/blog/2026/02/14/childouto/`,
            lastModified: new Date('2026-02-14'),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }
    ];

    const coatingUrls = [
        {
            url: `${SITE_URL}/coating/fukuoka/`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }
    ];

    return [
        {
            url: `${SITE_URL}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        ...standardUrls,
        ...truckUrls,
        ...blogUrls,
        ...coatingUrls,
    ];
}
