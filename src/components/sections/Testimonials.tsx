"use client";



import { useRegion } from '@/lib/RegionContext';
import { localCaseStudies } from '@/data/localCaseStudies';

export default function Testimonials({ regionName: propRegionName, displayName: propDisplayName }: { regionName?: string, displayName?: string }) {
    const context = useRegion();
    const regionName = propRegionName || context.regionName;
    const displayName = propDisplayName || context.displayName;
    
    // Fetch regional cases
    const regionCases = localCaseStudies.filter(c => c.region === regionName || c.region === displayName);
    const regionalVoices = regionCases.map(item => ({
        title: item.title,
        location: `${displayName}${item.city}`,
        desc: `${item.problem}\n\n【プロの視点】\n${item.professionalInsight}\n\n【結果】\n${item.result}`,
        image: item.image,
        tag: "地域施工事例"
    }));

    const baseVoices = [
        {
            title: "最初は高いと感じましたが、特急便で大正解！",
            location: `${displayName}在住（30代ご家族）`,
            desc: "子供の嘔吐でパニックになり安い業者を探しましたが「数日待ち」で絶望。こちらの特急便にお願いすると数時間で駆けつけて無臭に！放置していたら週末の家族旅行はキャンセルでした。私たちの週末を救ってくれました。",
            image: "/images/cases/user_upload_case.jpg",
            tag: "特急便（嘔吐）"
        },
        {
            title: "子供の嘔吐が…翌日には完全に無臭に！",
            location: `${displayName}在住（30代男性）`,
            desc: "ミニバンのシートに子供が戻してしまいパニックに。すぐに来てくれて、翌日には全く臭いがなくなっていました。",
            image: "/images/voice_family.webp",
            tag: "嘔吐クリーニング"
        },
        {
            title: "カフェラテのシミと乳臭さが消えた",
            location: `${displayName}在住（20代男性）`,
            desc: "助手席にこぼしたカフェラテ。シミと独特の腐敗臭に悩んでいましたが、洗浄で完璧に消えました。",
            image: "/images/voice_young_man.webp",
            tag: "シート洗浄"
        },
        {
            title: "中古車のタバコ臭がリフレッシュ",
            location: `${displayName}在住（50代男性）`,
            desc: "購入した中古車のヘビースモーカー臭が気になって依頼。長年のヤニ汚れもスッキリ落ちて満足です。",
            image: "/images/voice_businessman.webp",
            tag: "タバコ消臭"
        },
        {
            title: "5万円の損!? 自分でやって大後悔...",
            location: `${displayName}在住（40代男性）`,
            desc: "自作で消臭しようと機材や洗剤に5万円かけましたが、シートが変色し数日後には悪臭が復活。プロにお願いしたらあっという間に無臭になり、最初から頼めばよかったです。",
            image: "/images/voice_diy_fail.png",
            tag: "嘔吐クリーニング"
        },
        {
            title: "安い清掃で失敗。やり直しの依頼へ",
            location: `${displayName}在住（30代女性）`,
            desc: "安価な清掃サービスを頼みましたが、表面を拭かれただけで根本的な悪臭は消えず...。こちらのスチーム洗浄でようやく安心できました。二度手間でした。",
            image: "/images/voice_cheap_fail.png",
            tag: "シート洗浄"
        },
        {
            title: "時間と手間を買い戻せました",
            location: `${displayName}在住（40代女性）`,
            desc: "子供のおもらしでパニックに。自分で洗う時間も知識もなく依頼。結果的に、土日の休みを潰すことなく、新品同様のシートで家族旅行に行けました！",
            image: "/images/voice_time_saved.png",
            tag: "おもらし消臭"
        }
    ];

    const voices = [...regionalVoices, ...baseVoices];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    {displayName}のお客様からの喜びの声・施工事例
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {voices.map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
                            <div className="relative h-56 w-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                                    {item.tag}
                                </span>
                            </div>
                            <div className="p-6 flex-grow">
                                <div className="text-sm text-gray-500 mb-2 font-bold">{item.location}</div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
