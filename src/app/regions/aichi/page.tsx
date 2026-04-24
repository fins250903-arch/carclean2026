import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('愛知県', '/regions/aichi');

export default function Page() {
  return <RegionPageClient regionName="愛知県" path="/regions/aichi" />;
}
