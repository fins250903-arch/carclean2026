import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('神奈川県', '/regions/kanagawa');

export default function Page() {
  return <RegionPageClient regionName="神奈川県" path="/regions/kanagawa" />;
}
