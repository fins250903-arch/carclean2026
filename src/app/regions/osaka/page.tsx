import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('大阪', '/regions/osaka');

export default function Page() {
  return <RegionPageClient regionName="大阪" path="/regions/osaka" />;
}
