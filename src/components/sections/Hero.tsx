import Image from 'next/image';
import { useRegion } from '@/lib/RegionContext';
import { STORE_NAME } from '@/lib/site';

export default function Hero() {
    const { regionName, displayName, niche } = useRegion();
    const isTruck = niche === 'truck';

    const title = isTruck 
        ? `${displayName}トラックキャビン清掃専門店/キャビン洗浄`
        : `${displayName}車内クリーニング専門店/シート洗浄`;

    const descriptionTitle = isTruck
        ? `【トラック清掃 特急便】とは、最短即日で稼働拠点へ伺う「大型トラック・バス専用の出張キャビン洗浄店」です。`
        : `【車内清掃 特急便】とは、最短即日でご自宅へ伺う「車内クリーニング・消臭の出張専門店」です。`;

    const descriptionBody = isTruck
        ? `業務用100℃スチームと高圧リンサーを用い、長距離走行で蓄積した「タバコ・皮脂・カビ臭・飲食物の汚れ」を徹底除去。ドライバーが快適に過ごせる「第2の自宅」を清潔に蘇らせます。`
        : `業務用100℃スチームと高圧リンサーを用い、自分では落とせない「嘔吐・灯油・ペット臭・カビ」などの頑固な汚れと臭いを根こそぎ除去。施工後すぐに使える状態まで仕上げるプロの洗浄サービスを提供します。`;

    const subText = isTruck
        ? (
            <>
                長距離ドライバーの快適な空間を<br />
                <span className="text-accent text-3xl">即日洗浄</span>徹底除菌します<br />
                <span className="text-sm font-normal text-gray-700 mt-2 block">プロの技術で「キャビン内装クリーニング」を完遂</span>
            </>
        )
        : (
            <>
                嘔吐・灯油こぼしの緊急トラブル<br />
                <span className="text-accent text-3xl">すぐ対応</span>駆けつけます<br />
                <span className="text-sm font-normal text-gray-700 mt-2 block">プロの技術で「車内装クリーニング」を完遂</span>
            </>
        );

    const calloutText = isTruck
        ? (
            <>
                車内が臭くて眠れませんか？<br />
                <span className="text-2xl">今すぐリフレッシュ！</span>
            </>
        )
        : (
            <>
                ディーラーで5日待てますか？<br />
                <span className="text-2xl">絶対ムリ！</span>
            </>
        );

    const fvImage = isTruck ? "/images/truck-fv.png" : "/images/fv_change_v2.png";

    return (
        <section className="relative w-full min-h-screen md:h-[80vh] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-primary/10">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src={fvImage}
                    alt={`${displayName}対応 ${STORE_NAME}`}
                    fill
                    className="object-cover object-[center_bottom] md:object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent z-10" />
            </div>

            <div className="container mx-auto px-4 z-20 relative">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                        {title}
                        <span className="block text-primary mt-2">早急に解決！</span>
                    </h1>
                    
                    {/* AIO（AI Overviews）向け：サービスの簡潔な定義 */}
                    <div className="bg-white/95 p-5 rounded-xl shadow-md border-l-8 border-primary mb-8 max-w-xl">
                        <p className="text-gray-800 text-sm md:text-base font-bold leading-relaxed">
                            {descriptionTitle}
                        </p>
                        <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                            {descriptionBody}
                        </p>
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                        {subText}
                        <span className="text-xs font-normal text-gray-500 block mt-1">（注釈：訪問場所や作業の込み具合により日時は変わります。）</span>
                    </p>

                    <div className="bg-white/90 p-4 rounded-lg shadow-lg border border-red-500 mb-8 inline-block text-left">
                        <p className="text-red-600 font-bold text-lg">
                            {calloutText}
                        </p>
                        <p className="text-gray-800 font-bold mt-1">
                            {isTruck ? "その場に急行し、キャビンの臭い消し・汚れを完全除去。" : "その場に急行し、車内の臭い消し・汚れを完全除去。"}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <span className="bg-accent text-white font-bold py-2 px-6 rounded-full shadow-lg text-lg animate-pulse">
                            期間限定：抗菌コート無料施工中！
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 items-center sm:items-start w-full sm:w-auto">
                        <a
                            href="https://lin.ee/Xs8Orp2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-xl text-xl w-full sm:w-auto transition-transform hover:scale-105 text-center"
                        >
                            LINEで今すぐ見積もり
                        </a>
                        <a
                            href="https://www.instagram.com/carinterierclean/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#C13584] hover:bg-[#833AB4] text-white font-bold py-4 px-8 rounded-full shadow-xl text-xl w-full sm:w-auto transition-transform hover:scale-105 text-center flex items-center justify-center gap-2"
                        >
                            <span>📸</span> インスタDMで相談
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
