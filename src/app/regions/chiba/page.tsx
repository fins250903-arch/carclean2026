import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('千葉県', '/regions/chiba');

export default function Page() {
  return <RegionPageClient regionName="千葉県" path="/regions/chiba" />;
}
