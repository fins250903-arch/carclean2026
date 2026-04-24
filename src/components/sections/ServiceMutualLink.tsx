"use client";

import Link from 'next/link';
import { useRegion } from '@/lib/RegionContext';
import { STORE_NAME } from '@/lib/site';

export default function ServiceMutualLink() {
    const { regionName, displayName, niche, path } = useRegion();

    // Do not show links on the coating page itself if we want to keep it focused
    if (niche === 'coating') return null;

    const isTruck = niche === 'truck';
    const targetNiche = isTruck ? 'car' : 'truck';
    const targetDisplayName = isTruck ? '乗用車' : '大型トラック・バス';
    
    // Construct the target path by toggling the "-truck" suffix
    // Ensure path exists before performing replacement
    const safePath = path || '';
    let targetLink = '';
    
    if (safePath === '/' || safePath === '') {
        // Special case for root (Osaka home)
        targetLink = isTruck ? '/' : '/regions/osaka-truck';
    } else {
        targetLink = isTruck 
            ? safePath.replace(/-truck$/, '') 
            : `${safePath}-truck`;
    }

    const targetImage = isTruck ? '/images/fv_change_v2.png' : '/images/truck-fv.png';

    return (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
                        {isTruck ? '乗用車' : 'トラック・法人車'}の清掃もお任せください
                    </h2>
                    
                    <Link 
                        href={targetLink}
                        className="group relative flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-all duration-300"
                    >
                        <div className="w-full md:w-1/3 h-48 relative overflow-hidden">
                            <img 
                                src={targetImage} 
                                alt={targetDisplayName}
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                        </div>
                        
                        <div className="flex-1 p-6 md:p-8">
                            <div className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                                {isTruck ? 'FOR PASSENGER CAR' : 'FOR BUSINESS USE'}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                {displayName}の{targetDisplayName}清掃・消臭専門ページへ
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm md:text-base">
                                {isTruck 
                                    ? '嘔吐、ペット臭、中古車の生活臭など、乗用車のあらゆるお悩みをスピード解決いたします。'
                                    : '長距離ドライバーの快適な空間を。タバコ臭や皮脂汚れを徹底洗浄し、清潔なキャビンを取り戻します。'
                                }
                            </p>
                            <span className="text-primary font-bold flex items-center gap-2">
                                詳細を見る
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
