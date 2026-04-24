import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('埼玉県', '/regions/saitama-truck', 'truck');

export default function Page() {
  return <RegionPageClient regionName="埼玉県" path="/regions/saitama-truck" niche="truck" />;
}
