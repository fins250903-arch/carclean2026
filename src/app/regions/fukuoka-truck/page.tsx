import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('福岡県', '/regions/fukuoka-truck', 'truck');

export default function Page() {
  return <RegionPageClient regionName="福岡県" path="/regions/fukuoka-truck" niche="truck" />;
}
