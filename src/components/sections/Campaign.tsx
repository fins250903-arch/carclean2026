import { useRegion } from '@/lib/RegionContext';

export default function Campaign() {
    const { regionName, displayName } = useRegion();
    return (
        <section className="py-12 bg-accent/10 border-y-4 border-accent">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-red-600 mb-4 drop-shadow-sm bg-white/80 inline-block px-4 py-2 rounded-lg">
                    {displayName}進出記念キャンペーン
                </h2>
                <div className="bg-white p-8 rounded-xl shadow-xl max-w-3xl mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <p className="text-2xl font-bold text-gray-800 mb-2">
                        今なら、通常2,000円の
                    </p>
                    <p className="text-4xl md:text-6xl font-black text-accent mb-4">
                        抗菌コート 無料！
                    </p>
                    <p className="text-gray-600">
                        クリーニング後のきれいな状態を長持ちさせ、菌の繁殖を抑えます。
                    </p>
                </div>
            </div>
        </section>
    );
}
