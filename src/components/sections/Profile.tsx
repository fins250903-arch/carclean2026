import Image from 'next/image';
import { useRegion } from '@/lib/RegionContext';
import { STORE_NAME } from '@/lib/site';

export default function Profile() {
    const { regionName, displayName } = useRegion();
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/images/representative_new.jpg"
                                alt="代表 今村 優作"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold mb-6">
                            「5日も待てない」<br />
                            そう言われた悔しさが原点です。
                        </h2>
                        <div className="space-y-4 text-white leading-relaxed text-lg">
                            <p className="text-white">
                                「子供が車で吐いてしまって、ディーラーに電話したら『予約は来週、預かりで5日かかります』と言われたんです。この悪臭の中でそんなに待てるわけがない！」
                            </p>
                            <p className="text-white leading-relaxed mb-4">
                                かつて私が経験したこの絶望感が、「{STORE_NAME}」の原点です。
                            </p>
                            <p className="text-white">
                                車は単なる移動手段ではなく、家族や友人と過ごす大切な部屋です。 その空間が汚れているストレスは計り知れません。
                            </p>
                            <p className="text-white">
                                だからこそ、私たちは「今日解決する」ことにこだわります。
                            </p>
                            <p className="text-white font-bold text-lg mt-6">
                                {displayName}の皆様が、一日も早く快適なカーライフを取り戻せるよう、全力でサポートさせていただきます。
                            </p>
                            <p className="font-bold text-white mt-4 text-xl text-right">
                                代表 今村 優作
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
