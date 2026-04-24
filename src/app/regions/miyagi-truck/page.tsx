import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('宮城県', '/regions/miyagi-truck', 'truck');

export default function Page() {
  return <RegionPageClient regionName="宮城県" path="/regions/miyagi-truck" niche="truck" />;
}
