import React from 'react';
import { Smartphone, Clock, MapPin, Smile } from 'lucide-react';
import { useRegion } from '@/lib/RegionContext';

export default function Roadmap() {
    const { displayName } = useRegion();

    const steps = [
        {
            icon: <Smartphone className="w-8 h-8 text-white" />,
            title: "最短1分の簡単予約",
            desc: "LINEまたはお電話でご相談ください。症状をお伺いし、すぐにお見積りをご提示。「どうしよう」という不安から素早く解放されます。"
        },
        {
            icon: <MapPin className="w-8 h-8 text-white" />,
            title: "出張対応で移動時間ゼロ",
            desc: `${displayName}のご指定の場所までプロが伺います。店舗へ持ち込む手間や、施工中の待ち時間を別の用事に使え、大幅な「時間の節約」になります。`
        },
        {
            icon: <Clock className="w-8 h-8 text-white" />,
            title: "プロの技術で即日解決",
            desc: "独自のノウハウと専用機材により、素人では何日もかかる作業を数時間で完了。すぐに車を使える状態に戻します。"
        },
        {
            icon: <Smile className="w-8 h-8 text-white" />,
            title: "理想の快適空間の完成",
            desc: "もう臭いに悩むことはありません。ご家族や大切な人を自信を持って乗せられる、清潔で快適な車内空間を取り戻します。"
        }
    ];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        もう悩まない。最短ルートで「理想の状態」へ
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mobile-text">
                        独学で100時間を浪費しますか？それともプロに任せて最短ルートで理想を手に入れますか？<br className="hidden md:block" />
                        ご依頼から完了まで、あなたの貴重な時間を奪うことなく、圧倒的な解放感と自信をご提供します。
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-[45%] left-[5%] right-[5%] h-1 bg-blue-100 -z-10"></div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center relative">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-white mb-6 z-10">
                                    {step.icon}
                                </div>
                                <div className="bg-gray-50 rounded-xl p-5 w-full h-full border border-gray-100 relative">
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-100 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                        STEP {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mt-2 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed text-left">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
