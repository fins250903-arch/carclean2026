import { useRegion } from '@/lib/RegionContext';
import Link from 'next/link';
import { STORE_NAME } from '@/lib/site';
import ServiceMutualLink from '@/components/sections/ServiceMutualLink';

export default function Closing() {
    const { regionName, displayName } = useRegion();

    const regionLinks = [
        { href: "/regions/miyagi", label: "宮城県" },
        { href: "/regions/ibaraki", label: "茨城県" },
        { href: "/regions/tochigi", label: "栃木県" },
        { href: "/regions/saitama", label: "埼玉県" },
        { href: "/regions/chiba", label: "千葉県" },
        { href: "/regions/tokyo", label: "東京都" },
        { href: "/regions/kanagawa", label: "神奈川県" },
        { href: "/regions/aichi", label: "愛知県" },
        { href: "/regions/shiga", label: "滋賀県" },
        { href: "/regions/kyoto", label: "京都府" },
        { href: "/", label: "大阪府" },
        { href: "/regions/hyogo", label: "兵庫県" },
        { href: "/regions/fukuoka", label: "福岡県" },
        { href: "/regions/kumamoto", label: "熊本県" },
        { href: "/regions/okinawa", label: "沖縄県（本島のみ）" }
    ];

    return (
        <>
            {/* Message */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl font-bold text-primary mb-6">
                        {displayName}の車内空間を、もっときれいに。
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        私たちは、{displayName}のお客様が車内の不快な臭いを我慢することなく、<br />
                        快適なドライブを楽しめるよう、誠心誠意・スピード対応をお約束します。<br />
                        単なる車内清掃を超えた、プロの洗浄をご提供します。
                    </p>

                    <hr className="my-12 border-gray-200" />

                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        私たちの約束：「二度と臭わない車内へ」
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        目に見える汚れを落とすだけではありません。<br />
                        温水リンサーとシート洗浄で、ウレタン奥に染み込んだ「見えない臭いの元」を完全に除去し、<br />
                        深呼吸できる快適な空間へ戻します。この圧倒的な違いを、ぜひご体感ください。
                    </p>
                </div>
            </section>
            
            <ServiceMutualLink />

            {/* Admin Info */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4">
                        サービス概要
                    </h2>
                    <dl className="grid md:grid-cols-[200px_1fr] gap-6 text-sm md:text-base">
                        <dt className="font-bold text-gray-700">サービスエリア</dt>
                        <dd>{displayName}全域（一部離島などを除く）</dd>

                        <dt className="font-bold text-gray-700">お支払い方法</dt>
                        <dd>現金、各種クレジットカード、PayPay等（注釈：カードやキャッシュレス決済は地区により使用できない場合があります。）</dd>

                        <dt className="font-bold text-gray-700">屋号</dt>
                        <dd>{STORE_NAME}</dd>

                        {regionName === 'fukuoka' && (
                            <>
                                <dt className="font-bold text-gray-700 text-amber-600 font-black">限定プラン</dt>
                                <dd>
                                    <Link href="/coating/fukuoka/" className="text-amber-600 font-bold hover:underline flex items-center gap-1">
                                        ✨ 福岡限定：ガラスコーティング＋車内清掃セット
                                    </Link>
                                </dd>
                            </>
                        )}

                        <dt className="font-bold text-gray-700">ブログ</dt>
                        <dd><a href="https://carinteriorcleaning.jp/blog/" className="text-primary hover:underline">公式ブログ（最新施工事例など）</a></dd>
                    </dl>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <h3 className="font-bold text-gray-700 mb-4">対応エリア一覧</h3>
                        <div className="flex flex-wrap gap-2 text-sm">
                            {regionLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-primary hover:text-white hover:bg-primary bg-white px-3 py-1.5 rounded shadow-sm border border-gray-200 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        {regionName === '大阪' && (
                            <div className="mt-4 inline-block bg-red-50 border border-red-200 rounded p-3">
                                <p className="text-red-600 font-bold text-sm">
                                    ※沖縄県につきましては「沖縄本島のみ」の対応となります。誠に恐れ入りますが、離島への訪問は承っておりません。
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <footer className="bg-gray-900 text-white py-6 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} {STORE_NAME} All Rights Reserved.</p>
            </footer>
        </>
    );
}
