import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('茨城県', '/regions/ibaraki-truck', 'truck');

export default function Page() {
  return <RegionPageClient regionName="茨城県" path="/regions/ibaraki-truck" niche="truck" />;
}
