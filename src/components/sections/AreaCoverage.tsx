'use client';

import { useRegion } from '@/lib/RegionContext';
import { regionAreaData } from '@/data/regionAreaData';
import { MapPin, ChevronRight } from 'lucide-react';

export default function AreaCoverage() {
    const { regionName, displayName } = useRegion();
    const areaConfig = regionAreaData[regionName];

    if (!areaConfig) return null;

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="area-coverage">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Headline */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                        <MapPin className="w-4 h-4" />
                        出張対応エリア
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                        {areaConfig.headline}
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                        {areaConfig.reassurance}
                    </p>
                </div>

                {/* Area Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                    {areaConfig.areas.map((group, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="font-bold text-blue-900 text-base mb-2 flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block flex-shrink-0"></span>
                                {group.label}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {group.cities.join('、')}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a
                        href="https://lin.ee/Xs8Orp2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl font-bold px-8 py-5 rounded-2xl shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                    >
                        <span>{areaConfig.ctaText}</span>
                        <ChevronRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
