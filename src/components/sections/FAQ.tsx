import { faqData, truckFaqData } from '@/data/seoData';
import { useRegion } from '@/lib/RegionContext';

export default function FAQ() {
    const { niche } = useRegion();
    const isTruck = niche === 'truck';
    const faqs = isTruck ? truckFaqData : faqData;

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    よくあるご質問
                </h2>

                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="flex items-start gap-3 font-bold text-lg text-gray-900 mb-3">
                                <span className="bg-primary text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm">Q</span>
                                {item.q}
                            </h3>
                            <div className="flex items-start gap-3 text-gray-700 ml-2">
                                <span className="text-red-500 font-bold text-lg w-6 text-center">A.</span>
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
