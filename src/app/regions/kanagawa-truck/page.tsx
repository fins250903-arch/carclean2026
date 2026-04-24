import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('神奈川県', '/regions/kanagawa-truck', 'truck');

export default function Page() {
  return <RegionPageClient regionName="神奈川県" path="/regions/kanagawa-truck" niche="truck" />;
}
