import { generateJsonLd } from '@/lib/seo';

type JsonLdProps = {
    regionName: string;
    path?: string;
    niche?: 'car' | 'truck';
    data?: Record<string, unknown> | Record<string, unknown>[];
    regionOverrides?: {
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
};

export default function JsonLd({ regionName, path, niche = 'car', data, regionOverrides }: JsonLdProps) {
    const generatedJsonLd = generateJsonLd(regionName, path, regionOverrides, niche);
    const jsonLdArray: any[] = [...generatedJsonLd];

    if (data) {
        jsonLdArray.push(...(Array.isArray(data) ? data : [data]));
    }

    // AI Overview向けにネストされた @context を削除し純粋な @graph 構造にする
    const cleanedGraph = jsonLdArray.map(item => {
        if (typeof item === 'object' && item !== null) {
            const { '@context': _, ...rest } = item;
            return rest;
        }
        return item;
    });

    const schemaObj = {
        "@context": "https://schema.org",
        "@graph": cleanedGraph
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
    );
}
