import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('大阪');

export default function Home() {
    return (
        <>
            <RegionPageClient regionName="大阪" path="/" />
        </>
    );
}
