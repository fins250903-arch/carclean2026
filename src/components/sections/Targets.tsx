import { CheckCircle2 } from 'lucide-react';

export default function Targets() {
    const targets = [
        "友人の車や会社の車を汚してしまい、顔面蒼白の方",
        "ディーラーに持ち込む時間がなく、今すぐ嘔吐クリーニングをしてほしい方",
        "自分で掃除しても取れないペット臭やタバコ臭、食べこぼし臭にお悩みの方",
        "大切なお客様を乗せるため、社用車を清潔に保ちたい経営者の方"
    ];

    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border-l-8 border-accent">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                        こんな方は、<br className="md:hidden" />今すぐご相談ください
                    </h2>

                    <div className="space-y-4">
                        {targets.map((text, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                                <p className="text-lg md:text-xl text-gray-800 font-medium">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <a href="https://lin.ee/Xs8Orp2" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full shadow-lg text-xl transition-transform hover:scale-105">
                            まずは無料で見積もり相談する
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
