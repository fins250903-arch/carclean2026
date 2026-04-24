import React from 'react';
import { useRegion } from '@/lib/RegionContext';
import { XCircle, CheckCircle } from 'lucide-react';
import { STORE_NAME } from '@/lib/site';

export default function Comparison() {
    const { displayName } = useRegion();

    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">
                        「安さだけで選んで後悔する前に。<br className="md:hidden" />やり直し不要の『一生モノ』の品質を」
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mobile-text">
                        ご自身での清掃や、安価なサービスを選んだ方から「結局、高くついた」というご相談が後を絶ちません。プロに任せる場合とそうでない場合の「本当のコスト」を比較します。
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 relative">
                    {/* VS Badge */}
                    <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center font-bold text-gray-500 z-10 border-4 border-gray-50">
                        VS
                    </div>

                    {/* DIY / Cheap Service */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 opacity-90 relative">
                        <div className="absolute top-0 right-0 p-4">
                            <XCircle className="w-8 h-8 text-red-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-700 mb-6 border-b pb-4">
                            自作・低単価サービスの場合
                            <span className="block text-sm font-normal text-red-500 mt-2">
                                失われるのは「時間」と「お金」
                            </span>
                        </h3>

                        <ul className="space-y-5">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-1 font-bold">×</span>
                                <div>
                                    <strong className="block text-gray-800">100時間の試行錯誤と浪費</strong>
                                    <p className="text-sm text-gray-600 mt-1">
                                        専用洗剤や機材を自分で調べ、購入し、週末を削って何度も作業する「時間の損失」。
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-1 font-bold">×</span>
                                <div>
                                    <strong className="block text-gray-800">失敗による二度手間のリスク</strong>
                                    <p className="text-sm text-gray-600 mt-1">
                                        素人作業でシートを変色させてしまったり、生乾きで余計に悪臭が発生したりするリスク。
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-3 mt-1 font-bold">×</span>
                                <div>
                                    <strong className="block text-gray-800">「安かろう悪かろう」の限界</strong>
                                    <p className="text-sm text-gray-600 mt-1">
                                        表面を拭くだけの安価な清掃では、数日後にまた臭いがぶり返し、結局プロを呼ぶ羽目に。
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Pro Service */}
                    <div className="bg-blue-50 rounded-2xl p-6 md:p-8 shadow-lg border-2 border-primary relative transform md:-translate-y-2">
                        <div className="absolute top-0 right-0 p-4">
                            <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-blue-200 pb-4">
                            当店の{STORE_NAME}
                            <span className="block text-sm font-normal text-primary mt-2">
                                確実に「安心」を手に入れる
                            </span>
                        </h3>

                        <ul className="space-y-5">
                            <li className="flex items-start">
                                <span className="text-primary mr-3 mt-1 font-bold">◯</span>
                                <div>
                                    <strong className="block text-gray-900">あなたの週末を買い戻す</strong>
                                    <p className="text-sm text-gray-700 mt-1">
                                        試行錯誤の時間はゼロへ。ご指定の場所に伺い、最短1時間で完璧な成果と自由な時間を同時に提供します。
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-3 mt-1 font-bold">◯</span>
                                <div>
                                    <strong className="block text-gray-900">絶対に失敗できない方のための専門設計</strong>
                                    <p className="text-sm text-gray-700 mt-1">
                                        プロ専用の100℃高温スチームと強力バキュームで、汚れや臭いの原因を「根こそぎ」除去します。
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-3 mt-1 font-bold">◯</span>
                                <div>
                                    <strong className="block text-gray-900">やり直し不要のクオリティ</strong>
                                    <p className="text-sm text-gray-700 mt-1">
                                        その場限りで終わらせない、持続的な成果を生む圧倒的な専門性。「高い」には明確な理由があります。
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
