import { Instagram } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                    一人で悩まないでください！<br />
                    今日のその臭い、今日解決しましょう。
                </h2>
                <p className="text-xl mb-12 text-yellow-200 font-bold">
                    今すぐ無料の抗菌コートも手に入れてください！
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
                    <a href="https://lin.ee/Xs8Orp2" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105 flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold mb-2">LINEで見積もり</div>
                        <div className="text-sm">写真を送るだけでスムーズ対応</div>
                    </a>
                    <a href="tel:07084280866" className="flex-1 bg-red-600 hover:bg-red-700 text-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105 flex flex-col items-center justify-center animate-shine ring-2 ring-white/30">
                        <div className="text-2xl font-bold mb-1">今すぐ電話相談</div>
                        <div className="text-3xl font-black mb-1">070-8428-0866</div>
                        <div className="text-sm">現在地から最短到着時間をご案内</div>
                    </a>
                    <a href="https://www.instagram.com/carinterierclean/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105 flex flex-col items-center justify-center">
                        <Instagram className="w-10 h-10 mb-2" />
                        <div className="text-xl md:text-2xl font-bold mb-1">インスタDMで相談する</div>
                        <div className="text-sm">インスタDMがわかりやすい</div>
                    </a>
                </div>
            </div>
        </section>
    );
}
