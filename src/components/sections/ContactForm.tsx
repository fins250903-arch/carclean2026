"use client";

import { useRegion } from '@/lib/RegionContext';
import { Mail } from 'lucide-react';

export default function ContactForm() {
    const { regionName } = useRegion();

    return (
        <section id="contact" className="py-16 bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        ご相談・お問い合わせ
                    </h2>
                    <p className="text-gray-600">
                        お急ぎの方は、お電話またはLINEでも受け付けております。
                    </p>
                </div>

                {/* Contact Options */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <a href="tel:07084280866" className="block group">
                        <div className="bg-red-50 border-2 border-red-100 rounded-xl p-6 text-center hover:border-red-500 transition-colors shadow-sm cursor-pointer h-full">
                            <p className="text-gray-600 font-bold mb-2">お電話でのお問合せ</p>
                            <p className="text-3xl font-black text-red-600 group-hover:scale-105 transition-transform">
                                070-8428-0866
                            </p>
                            <p className="text-xs text-gray-500 mt-2">受付時間：9:00〜20:00（年中無休）</p>
                        </div>
                    </a>
                    <a href="https://lin.ee/Xs8Orp2" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="bg-green-50 border-2 border-green-100 rounded-xl p-6 text-center hover:border-green-500 transition-colors shadow-sm cursor-pointer h-full">
                            <p className="text-gray-600 font-bold mb-2">LINEでのお問合せ</p>
                            <p className="text-3xl font-black text-green-600 group-hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                LINE公式
                            </p>
                            <p className="text-xs text-gray-500 mt-2">友だち追加で簡単見積もり</p>
                        </div>
                    </a>
                </div>

                {/* External Form Link */}
                <div className="bg-blue-50 p-8 rounded-2xl shadow-inner text-center border-2 border-blue-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">
                        メールでのお問い合わせ・お見積り
                    </h3>
                    <p className="text-gray-600 mb-8">
                        専用のメールフォームよりお問い合わせいただけます。<br />
                        以下のボタンをクリックして、必要事項をご入力ください。
                    </p>

                    <a
                        href="https://insbs.net/ok2/tokubinntoi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 w-full md:w-2/3 py-4 px-8 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all"
                    >
                        <Mail size={24} />
                        問い合わせフォームを開く
                    </a>
                </div>
            </div>
        </section>
    );
}
