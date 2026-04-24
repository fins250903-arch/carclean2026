import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('熊本県', '/regions/kumamoto');

export default function Page() {
  return <RegionPageClient regionName="熊本県" path="/regions/kumamoto" />;
}
