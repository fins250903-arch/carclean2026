"use client";

import LPTemplate from '@/components/templates/LPTemplate';
import { RegionProvider } from '@/lib/RegionContext';
import { generateQuestionnaireJsonLd } from '@/data/questionnaireTestimonials';
import { regionalPosts } from '@/data/regionalPosts';
import JsonLd from '@/components/JsonLd';
import { STORE_NAME } from '@/lib/site';

export default function RegionPageClient({ regionName, path, niche = 'car' }: { regionName: string; path?: string, niche?: 'car' | 'truck' }) {
    const post = regionalPosts[regionName];
    const displayName = post?.displayName || regionName;
    const questionnaireStructuredData = generateQuestionnaireJsonLd(regionName, displayName, path);
    const regionOverrides = {
        displayName,
        aiSummary: post?.aiSummary,
        article: post?.title && post?.excerpt && post?.image ? {
            headline: post.title,
            description: post.excerpt,
            image: post.image,
        } : undefined,
        localBusiness: post?.structuredData ? {
            areaServed: post.structuredData.areaServed,
            description: post.structuredData.description,
            geo: post.structuredData.geo
                ? {
                    ...post.structuredData.geo,
                    addressRegion: regionName,
                }
                : undefined,
        } : undefined,
    };

    return (
        <RegionProvider regionName={regionName} displayName={post?.displayName} niche={niche} path={path}>
            <JsonLd regionName={regionName} path={path} niche={niche} data={questionnaireStructuredData} regionOverrides={regionOverrides} />
            <LPTemplate />
        </RegionProvider>
    );
}
