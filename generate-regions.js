const fs = require('fs');
const path = require('path');

const regions = [
  { id: 'aichi', name: '愛知県' },
  { id: 'okinawa', name: '沖縄県' },
  { id: 'fukuoka', name: '福岡県' },
  { id: 'hyogo', name: '兵庫県' },
  { id: 'ibaraki', name: '茨城県' },
  { id: 'chiba', name: '千葉県' },
  { id: 'saitama', name: '埼玉県' },
  { id: 'kanagawa', name: '神奈川県' },
  { id: 'shiga', name: '滋賀県' },
  { id: 'kumamoto', name: '熊本県' },
  { id: 'miyagi', name: '宮城県' },
  { id: 'tochigi', name: '栃木県' },
  { id: 'kyoto', name: '京都府' },
  { id: 'tokyo', name: '東京都' },
  { id: 'osaka', name: '大阪' }
];

const targetDir = path.join(__dirname, 'src', 'app', 'regions');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

regions.forEach(region => {
  // 1. Generate Standard Region Page
  const regionDir = path.join(targetDir, region.id);
  if (!fs.existsSync(regionDir)) {
    fs.mkdirSync(regionDir, { recursive: true });
  }

  const standardContent = `import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('${region.name}', '/regions/${region.id}');

export default function Page() {
  return <RegionPageClient regionName="${region.name}" path="/regions/${region.id}" />;
}
`;

  fs.writeFileSync(path.join(regionDir, 'page.tsx'), standardContent);
  console.log(`Generated standard ${region.id}`);

  // 2. Generate Truck Region Page
  const truckDirId = `${region.id}-truck`;
  const truckDir = path.join(targetDir, truckDirId);
  if (!fs.existsSync(truckDir)) {
    fs.mkdirSync(truckDir, { recursive: true });
  }

  const truckContent = `import { generateRegionMetadata } from '@/lib/seo';
import RegionPageClient from '@/components/templates/RegionPageClient';

export const metadata = generateRegionMetadata('${region.name}', '/regions/${truckDirId}', 'truck');

export default function Page() {
  return <RegionPageClient regionName="${region.name}" path="/regions/${truckDirId}" niche="truck" />;
}
`;

  fs.writeFileSync(path.join(truckDir, 'page.tsx'), truckContent);
  console.log(`Generated truck ${truckDirId}`);
});
