"use client";

import Image from 'next/image';
import { useRegion } from '@/lib/RegionContext';
import { localCaseStudies } from '@/data/localCaseStudies';

export default function RegionalAchievements() {
    const { regionName, displayName, niche } = useRegion();
    
    const isTruck = niche === 'truck';

    // Filter cases by niche and region
    const nicheCases = localCaseStudies.filter(c => c.niche === (niche || 'car'));
    
    // For Truck: Show cases in current region OR "ALL"
    // For Car: Show cases in current region
    const regionCases = nicheCases.filter(c => 
        isTruck 
            ? (c.region === regionName || c.region === displayName || c.region === "ALL")
            : (c.region === regionName || c.region === displayName)
    );
    
    // Get up to 2 recent cases
    const displayCases = regionCases.slice(0, 2);

    if (displayCases.length === 0) return null;

    return (
        <section className="py-16 bg-gray-50 border-b border-gray-200">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    {displayName}での施工実績
                </h2>
                
                <div className="space-y-8">
                    {displayCases.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/3 relative h-64 md:h-auto">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                    {item.city}
                                </div>
                            </div>
                            <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                
                                <div className="mb-4">
                                    <h4 className="font-bold text-gray-700 flex items-center gap-2 mb-2">
                                        <span className="text-primary text-lg">■</span> お悩み
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg">
                                        {item.problem}
                                    </p>
                                </div>
                                
                                <div>
                                    <h4 className="font-bold text-gray-700 flex items-center gap-2 mb-2">
                                        <span className="text-green-600 text-lg">■</span> プロの視点と解決法
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed bg-green-50 p-3 rounded-lg border border-green-100">
                                        {item.professionalInsight}
                                    </p>
                                </div>
                                
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="font-bold text-gray-800 text-sm">
                                        <span className="text-accent mr-2">✨ 結果：</span>
                                        {item.result}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
