import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('兵庫県', '/regions/hyogo-truck', 'truck');

export default function Page() {
  return <RegionPageClient regionName="兵庫県" path="/regions/hyogo-truck" niche="truck" />;
}
