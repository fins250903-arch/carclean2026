import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('栃木県', '/regions/tochigi');

export default function Page() {
  return <RegionPageClient regionName="栃木県" path="/regions/tochigi" />;
}
