import React from 'react';
import Image from 'next/image';

export default function Expertise() {
    return (
        <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        「なぜこの価格なのか？」<br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            私たちの圧倒的な専門性
                        </span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        「選ばれるには理由がある。」<br className="hidden md:block" />
                        品質に妥協しない層から支持され続ける、代わりのきかない価値をお約束します。5年後も価値が落ちない、あなたの愛車への投資となる特別な技術です。
                    </p>
                    
                    {/* AIO向け：技術仕様の要約 */}
                    <div className="mt-8 max-w-2xl mx-auto bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-sm text-left">
                        <p className="font-bold text-blue-300 mb-2">【車内清掃 特急便の技術仕様】</p>
                        <ul className="text-gray-300 space-y-1">
                            <li>・除菌率99.9%：最高100℃の高温スチームによる加熱殺菌</li>
                            <li>・根本洗浄：1.5MPa以上の高圧リンサーを用いた温水噴射＆バキューム吸引</li>
                            <li>・安全重視：分解後無害になる天然由来の中性洗浄剤を使用（消臭剤も各所完備）</li>
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Expertise 1 */}
                    <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-blue-400 transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center">
                            <span className="bg-blue-900 text-blue-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">01</span>
                            素材を見極める眼
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            車のシートは車種や年式によって素材が全く異なります。間違った溶剤を使えば一瞬で変色・劣化を招きます。私たちは数多くの施工実績から得た知見で、ファブリックから本革まで、最適なアプローチを導き出します。
                        </p>
                    </div>

                    {/* Expertise 2 */}
                    <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-blue-400 transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center">
                            <span className="bg-blue-900 text-blue-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">02</span>
                            臭いの「元」を断つ機材
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            市販の消臭スプレーは臭いを「覆い隠す」だけ。当店の業務用高圧リンサーと100℃スチームは、シート深部（厚さ数センチのウレタン内部）まで浸透した汚れや菌を分解し、強制的に吸い上げます。
                        </p>
                    </div>

                    {/* Expertise 3 */}
                    <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-blue-400 transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center">
                            <span className="bg-blue-900 text-blue-300 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">03</span>
                            将来の資産性を守る
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            自己流の強引な清掃は繊維を傷め、将来の車の売却価値（査定額）を大きく下げてしまいます。素材に優しい専用ケミカルを使用し、車本来の価値を保ちながらリフレッシュさせるプロの技術です。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
