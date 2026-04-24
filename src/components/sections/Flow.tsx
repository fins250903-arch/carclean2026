import { Phone, Truck, Sparkles, CreditCard, Wind } from 'lucide-react';
import { flowData, truckFlowData } from '@/data/seoData';
import { useRegion } from '@/lib/RegionContext';

export default function Flow() {
    const { niche } = useRegion();
    const isTruck = niche === 'truck';
    const currentFlowData = isTruck ? truckFlowData : flowData;

    const iconMap = {
        Phone: <Phone size={32} />,
        Truck: <Truck size={32} />,
        Sparkles: <Sparkles size={32} />,
        CreditCard: <CreditCard size={32} />,
        Wind: <Wind size={32} />
    };

    const flowTitle = isTruck ? "【トラックキャビン清掃の手順】" : "【車内クリーニングの手順】";
    const flowDesc = isTruck 
        ? "お問い合わせから最短即日で車庫・拠点へ急行し、業務用機材を用いた徹底洗浄、乾燥までを2〜4時間で完了します。電源・水道持込可能で、稼働の合間に施工を完了させます。"
        : "お問い合わせから最短即日で現場へ急行し、業務用機材を用いた徹底洗浄、乾燥までを1.5〜3時間で完了します。電源不要の出張スタイルで、お客様の手間は一切ありません。";

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    ご利用の流れ
                </h2>
                
                {/* AIO向け：手続きの要約 */}
                <div className="max-w-2xl mx-auto mb-12 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 text-sm md:text-base text-gray-700 text-left">
                    <p className="font-bold mb-1">{flowTitle}</p>
                    <p>
                        {flowDesc}
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line for mobile, horizontal for desktop could be tricky with grid, using flex */}
                    <ol className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 m-0 p-0 list-none">
                        {currentFlowData.map((step, index) => (
                            <li key={index} className="flex-1 flex flex-col items-center text-center w-full relative z-10 group">
                                <div className="bg-white border-2 border-primary text-primary w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                    {iconMap[step.iconName as keyof typeof iconMap]}
                                </div>
                                <h3 className="font-bold text-lg mb-2 text-gray-800">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.desc}</p>

                                {/* Connector Line (Desktop) */}
                                {index < flowData.length - 1 && (
                                    <div aria-hidden="true" className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gray-200 -z-10" />
                                )}
                            </li>
                        ))}
                    </ol>

                    <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-center">
                        <p className="text-yellow-800 font-bold">
                            <span className="text-red-500">【ご注意】</span> 完全乾燥まで約4時間かかります。その間は窓を少し開けておく必要があります。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
