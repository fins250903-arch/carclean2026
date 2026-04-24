import Image from 'next/image';
import { useRegion } from '@/lib/RegionContext';
import { STORE_NAME } from '@/lib/site';

export default function Problem() {
    const { regionName, displayName, niche } = useRegion();
    const isTruck = niche === 'truck';

    const header = isTruck
        ? "「キャビンが臭くて、休憩中も休まらない…」"
        : "「友人の車を汚してしまった…どうしよう」";

    const subHeader = isTruck
        ? "連日の長距離走行で、キャビン内の汚れと臭いが限界になっていませんか？"
        : "突然の嘔吐・お漏らしのトラブルでパニックになっていませんか？";

    const problemDescription = isTruck
        ? (
            <>
                トラックの「<strong>キャビン内清掃</strong>」や、<strong>タバコのヤニ・飲食物の放置による悪臭</strong>のトラブル。<br />
                <strong>ハンドル周りのベタつき</strong>や、<strong>ベッドスペースのダニ・カビ</strong>でお悩みではありませんか？<br />
                ガソリンスタンドの洗車機や簡易清掃では落とせない「プロのトラック内装クリーニング」にお任せください。
            </>
        )
        : (
            <>
                お子様の「<strong>嘔吐車内清掃</strong>」や、<strong>ペットのおしっこ・うんち・ペットの毛</strong>のトラブル。<br />
                <strong>車に灯油をこぼした</strong>強烈な臭いや、<strong>車の中掃除</strong>（タバコの匂い消し）でお悩みではありませんか？<br />
                洗車場やガソリンスタンドの簡易清掃では落とさない「車シートクリーニング」もお任せください。
            </>
        );

    const dealerQuote = isTruck
        ? "「会社に頼んでも、『自分で掃除しろ』と言われるだけで、臭いが全然取れない…」"
        : "「ディーラーに相談したら、『予約で一杯で5日後になります。費用は7万円です』と言われた…」";

    const empathyImage = isTruck ? "/images/truck-cabin-dirty.png" : "/images/empathy.webp";
    const empathyAlt = isTruck ? "トラックキャビンの汚れと解決後の対比" : "車内の汚れと解決後の対比";

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        {header}
                    </h2>
                    <p className="text-xl text-red-600 font-bold">
                        {subHeader}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={empathyImage}
                            alt={empathyAlt}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md text-left">
                            <p className="text-gray-700 leading-relaxed mb-4 mobile-text">
                                {problemDescription}
                            </p>
                            <div className="border-l-4 border-gray-300 pl-4 py-2 bg-gray-100 italic text-gray-600 mobile-text">
                                {dealerQuote}
                            </div>
                            <p className="text-gray-700 leading-relaxed mt-4 mobile-text">
                                {isTruck 
                                    ? "仕事のパートナーであるトラック。清潔な環境は安全運転にも繋がります。"
                                    : "そんな緊急事態に、何日も待てないし、高額な出費は痛い。"}
                                <br />
                                私たちは、その苦労とストレスを痛いほど理解しています。
                            </p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-left">
                            <h3 className="text-xl font-bold text-primary mb-2">
                                {displayName}対応の{STORE_NAME}にお任せください！
                            </h3>
                            <p className="text-gray-800 mobile-text">
                                車を持ち込む必要も、業務を何日も止める必要もありません。<br />
                                私たちのプロスタッフが、{displayName}のご指定の車庫まで急行し、<br />
                                <span className="font-bold underline decoration-accent decoration-4 underline-offset-4">
                                    その場で早急に{isTruck ? "キャビン" : "車内"}の環境を整えます。
                                </span>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
