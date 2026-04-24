import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('滋賀県', '/regions/shiga');

export default function Page() {
  return <RegionPageClient regionName="滋賀県" path="/regions/shiga" />;
}
