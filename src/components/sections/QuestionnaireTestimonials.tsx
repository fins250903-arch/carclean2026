import React from 'react';
import { questionnaireTestimonials } from '@/data/questionnaireTestimonials';
import { useRegion } from '@/lib/RegionContext';

export default function QuestionnaireTestimonials({ displayName: propDisplayName }: { displayName?: string }) {
    const context = useRegion();
    const displayName = propDisplayName || context.displayName;

    return (
        <section className="bg-amber-50 py-10">
            <div className="container mx-auto px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        お客様アンケートの結果
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        施工後にいただいたアンケートの一部をご紹介します。{displayName}周辺のお客様からも多くの喜びの声をいただいております。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {questionnaireTestimonials.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-amber-100 flex flex-col">
                            <div className="mb-4">
                                <img
                                    src={item.image}
                                    alt={`${item.name}様のアンケート`}
                                    className="w-full h-auto rounded-lg shadow-sm border border-gray-100"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">
                                        {item.service}
                                    </span>
                                    <span className="text-gray-500 text-xs">{item.region} {item.name}様</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2 italic">
                                    「{item.title}」
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.comment}
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-amber-50 flex items-center justify-between">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-amber-600">満足度 100%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
