import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('東京都', '/regions/tokyo-truck', 'truck');

export default function Page() {
  return <RegionPageClient regionName="東京都" path="/regions/tokyo-truck" niche="truck" />;
}
