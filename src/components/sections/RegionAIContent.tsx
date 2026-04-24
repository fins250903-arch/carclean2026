import { useRegion } from '@/lib/RegionContext';
import { regionalPosts } from '@/data/regionalPosts';

export default function RegionAIContent() {
    const { regionName, displayName } = useRegion();
    const post = regionalPosts[regionName];

    if (!post || !post.aiSummary || !post.specs) {
        return null;
    }

    return (
        <section className="py-12 bg-gray-50 border-b border-gray-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="w-1 h-8 bg-primary rounded-full"></span>
                        {displayName}の車内クリーニング・消臭洗浄
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        {post.aiSummary}
                    </p>
                    
                    {/* AIO向け：地域サービスのクイック概要 */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <p className="font-bold text-gray-800 mb-3 text-sm">【{displayName}の対応ポイント】</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                            <li className="flex items-center gap-2">✅ 最短即日の出張対応</li>
                            <li className="flex items-center gap-2">✅ 電源不要・場所を選ばず施工</li>
                            <li className="flex items-center gap-2">✅ 嘔吐・灯油・ペット臭の専門洗浄</li>
                            <li className="flex items-center gap-2">✅ 安心の事前見積もり・後払い決済</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
                        <h3 className="font-bold text-gray-700">施工サービス概要</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {post.specs.map((spec, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-4 p-4 hover:bg-gray-50 transition-colors">
                                <div className="font-bold text-gray-600 md:col-span-1 mb-1 md:mb-0">
                                    {spec.label}
                                </div>
                                <div className="text-gray-800 md:col-span-3">
                                    {spec.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
