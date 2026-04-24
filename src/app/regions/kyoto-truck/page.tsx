import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('京都府', '/regions/kyoto-truck', 'truck');

export default function Page() {
  return <RegionPageClient regionName="京都府" path="/regions/kyoto-truck" niche="truck" />;
}
