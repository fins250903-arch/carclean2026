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

    const schemaObj = {
        "@context": "https://schema.org",
        "@graph": jsonLdArray
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
    );
}
