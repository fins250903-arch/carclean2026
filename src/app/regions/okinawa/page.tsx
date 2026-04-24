import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('沖縄県', '/regions/okinawa');

export default function Page() {
  return <RegionPageClient regionName="沖縄県" path="/regions/okinawa" />;
}
