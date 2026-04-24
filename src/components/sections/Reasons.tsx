import Image from 'next/image';
import { Truck, PiggyBank, Award, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { useRegion } from '@/lib/RegionContext';

export default function Reasons() {
    const { regionName, displayName } = useRegion();
    const reasons = [
        {
            icon: <Truck className="w-8 h-8 text-white" />,
            title: "圧倒的スピード対応",
            desc: "すぐ対応で到着。部分クリーニングなら作業も1時間で完了。",
            color: "bg-blue-500"
        },
        {
            icon: <Award className="w-8 h-8 text-white" />,
            title: "100℃スチームで根本除去",
            desc: "ただの消臭ではなく、高温スチームと業務用のリンサーで、シート内部の汚れごと吸い出します。",
            color: "bg-orange-500"
        },
        {
            icon: <PiggyBank className="w-8 h-8 text-white" />,
            title: "ディーラーの1/3の価格",
            desc: "無店舗型の出張専門店だからできる低価格。軽自動車2.2万円〜。",
            color: "bg-green-500"
        },
        {
            icon: <Clock className="w-8 h-8 text-white" />,
            title: "場所を選ばず電源不要",
            desc: "発電機を持参しますので、ドアが開けられるスペースがあればどこでも作業可能です。（注釈：電源はご連絡の際に確認いたします。）",
            color: "bg-purple-500"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-white" />,
            title: "安心の洗剤を使用",
            desc: "お子様やペットにも安心な洗剤を使用しています。",
            color: "bg-teal-500"
        },
        {
            icon: <MapPin className="w-8 h-8 text-white" />,
            title: `${displayName}地域密着`,
            desc: `${displayName}の地理を知り尽くしているからこそ、素早く駆けつけられます。`,
            color: "bg-red-500"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    {displayName}で選ばれる理由<br />
                    <span className="text-primary text-2xl mt-2 block">他社とはここが違います</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center">
                            <div className={`${reason.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md`}>
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mobile-text text-left">
                                {index === 0 ? "すぐ対応で到着。車内クリーニング専門店だから、スピードと質の高さを両立。" :
                                    index === 1 ? "ただの消臭ではなく、高温スチームでの「シート洗浄」で、内部の汚れごと吸い出します。" :
                                        reason.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-2xl font-bold text-accent mb-4">
                                これが「根本除去」の証です
                            </h3>
                            <p className="text-gray-700 mb-4 mobile-text">
                                こちらの写真をご覧ください。左側の黒ずんだ部分が洗浄前、右側がスチーム洗浄後です。<br />
                                表面を拭くだけでは、シートの奥に染み込んだ嘔吐物や加齢臭の元（皮脂汚れ）は除去できません。当社の業務用リンサーは温水で汚れを浮かし、根こそぎ吸引します。<br />
                                また、使用する洗浄剤は施工後、数時間で分解され無害化。小さなお子様やペットが触れるシートでも安心です。
                            </p>
                            <p className="font-bold text-primary">
                                これが「車座席クリーニング」のプロの技術。車内嘔吐の消臭に絶対的な自信を持つ理由です。
                            </p>
                        </div>
                        <div className="relative h-64 w-full rounded-xl overflow-hidden order-1 md:order-2">
                            <Image
                                src="/images/steam.webp"
                                alt="スチーム洗浄による汚れ除去の様子"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                スチーム洗浄の様子
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
