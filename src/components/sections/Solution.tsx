import { Zap, Clock, ThumbsUp } from 'lucide-react';
import { useRegion } from '@/lib/RegionContext';
import { STORE_NAME } from '@/lib/site';

export default function Solution() {
    const { regionName, displayName, niche } = useRegion();
    const isTruck = niche === 'truck';

    const solutionTitle = isTruck
        ? "現場に急行し、早急にキャビンの環境を整えます。"
        : "現場に急行し、早急に臭いの問題を解決します。";

    const solutionDesc = isTruck
        ? (
            <>
                お店に持ち込む必要も、業務を止める必要もありません。<br />
                当店のプロスタッフが、{displayName}の貴社の車庫・拠点の駐車場まで出張し、<br />
                その場で専門的な機材を使ったキャビンクリーニング・シート洗浄を行います。<br />
                <span className="font-bold text-accent">長距離走行での蓄積汚れやタバコの臭いもスピード解決。</span>
            </>
        )
        : (
            <>
                お店に持ち込む必要も、何日も待つ必要もありません。<br />
                当店のプロスタッフが、{displayName}のお客様の駐車場まで出張し、<br />
                その場で専門的な機材を使った車内クリーニング・シート洗浄を行います。<br />
                <span className="font-bold text-accent">嘔吐などの緊急クリーニングもスピード対応いたします。</span>
            </>
        );

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    {STORE_NAME}にお任せください！<br />
                    <span className="text-gray-800 text-2xl mt-4 block">{solutionTitle}</span>
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12 text-center md:text-left lg:text-center">
                    {solutionDesc}
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
                        <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">すぐ対応で到着</h3>
                        <p className="text-gray-600">お電話一本で現場へ急行します</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
                        <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">当日仕上げ</h3>
                        <p className="text-gray-600">洗浄から簡易乾燥までその場で完了</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
                        <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                            <ThumbsUp size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">完全消臭</h3>
                        <p className="text-gray-600">原因を根本から除去します</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
