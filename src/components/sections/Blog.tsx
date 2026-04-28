

import { useRegion } from '@/lib/RegionContext';
import { useState } from 'react';
import { regionalPosts } from '@/data/regionalPosts';

export default function Blog({ regionName: propRegionName, displayName: propDisplayName }: { regionName?: string, displayName?: string }) {
    const context = useRegion();
    const regionName = propRegionName || context.regionName;
    const displayName = propDisplayName || context.displayName;

    type BlogPost = {
        id: number;
        title: string;
        excerpt: string;
        content: string; // Keep for internal posts, empty for external
        date: string;
        image: string;
        category: string;
        regionName?: string;
        url?: string; // New field for external links
    };

    // External Posts (WordPress)
    const externalPosts: BlogPost[] = [
        {
            id: 1001,
            title: "【子供の嘔吐】車内クリーニングのプロが教える対処法",
            excerpt: "子供が車内で吐いてしまった時の緊急対応と、プロに頼むべき理由を解説します。",
            content: "",
            date: "2026.02.14",
            image: "/images/cases/user_upload_case.jpg", // Placeholder or specific image
            category: "お役立ち情報",
            url: "https://carinteriorcleaning.jp/blog/2026/02/14/childouto/"
        }
    ];

    // Base posts (Internal)
    const basePosts: BlogPost[] = [
        {
            id: 1,
            title: "【プロ直伝】自分でもできる！車内の嫌なニオイを消す方法と注意点",
            excerpt: "「市販の消臭剤を使ってもニオイが取れない…」そんな経験はありませんか？実は、間違った対処法は逆効果になることも。プロが教える正しい応急処置と、やってはいけないNG行動を解説します。",
            content: `
                <h3 class="font-bold text-xl mb-4">市販の消臭剤が効かない理由</h3>
                <p class="mb-4">市販の消臭剤の多くは、ニオイの元を包み込む「マスキング」という手法を使っています。しかし、ニオイの元（汚れや菌）が残っている状態では、時間が経つと再びニオイが発生してしまいます。</p>
                
                <h3 class="font-bold text-xl mb-4">やってはいけないNG行動</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>ファブリーズのかけすぎ：</strong> シートの中まで水分が浸透し、カビの原因になることがあります。</li>
                    <li><strong>香水での上書き：</strong> 悪臭と香水の匂いが混ざり、さらに不快なニオイになる危険性があります。</li>
                </ul>

                <h3 class="font-bold text-xl mb-4">プロが教える応急処置</h3>
                <p class="mb-4">まずは「換気」と「天日干し」が基本です。それでも取れない場合は、重曹水（水100mlに小さじ1の重曹）を使った拭き掃除が効果的です。「車のヤニの匂い消し」や「タバコ臭除去」についても、まずは表面の汚れを落とすことが第一歩です。ただし、革シートには使わないよう注意してください。</p>
                
                <div class="bg-blue-50 p-4 rounded-lg mt-6">
                    <p class="font-bold text-blue-800">それでも解決しない場合は？</p>
                    <p class="text-sm mt-2">シート内部のウレタンまで汚れが染み込んでいる可能性が高いです。その場合は、プロによる「丸洗い」をご検討ください。</p>
                </div>
            `,
            date: "2024.01.17",
            image: "/images/steam.webp",
            category: "お役立ち情報"
        },
        {
            id: 2,
            title: `なぜ「丸洗い」が必要なのか？シート内部の汚れの真実`,
            excerpt: "表面を拭くだけでは取れない、シートの奥に潜む「見えない汚れ」。ダニやカビの温床になる前に、なぜ100℃のスチーム洗浄が有効なのか、その科学的な理由をご説明します。",
            content: `
                <h3 class="font-bold text-xl mb-4">見えない汚れ「ダニ・カビ」の温床</h3>
                <p class="mb-4">車のシートは、家のソファ以上に過酷な環境にあります。汗、皮脂、食べこぼし、そして湿気。これらはダニやカビにとって最高の繁殖場所です。</p>

                <h3 class="font-bold text-xl mb-4">表面掃除だけでは意味がない？</h3>
                <p class="mb-4">ガソリンスタンドや一般的な洗車場で行う車内清掃は、主に「掃除機がけ」と「表面の拭き掃除」です。しかし、汚れの8割はシートの「内部（ウレタン部分）」に溜まっています。</p>

                <h3 class="font-bold text-xl mb-4">100℃スチームの威力</h3>
                <p class="mb-4">当店では、業務用リンサーと100℃近い高温スチームを使用します。これにより、内部の汚れを浮き上がらせ、ダニや菌を死滅させながら、強力なバキュームで汚水ごと吸い上げます。</p>
                <p>アレルギー対策としても、特にお子様やペット同乗者のいるお車には「丸洗い」を強く推奨します。</p>
            `,
            date: "2024.01.15",
            image: "/images/rinser.png",
            category: "プロの技術"
        },
        {
            id: 3,
            title: `${displayName}で急増中！嘔吐トラブルの緊急対処マニュアル`,
            excerpt: "突然の嘔吐トラブル。パニックにならず、まずはこの手順で対処してください。被害を最小限に抑えるための初動対応をまとめました。",
            content: `
                <h3 class="font-bold text-xl mb-4">パニックにならず、まずは一次処理を</h3>
                <p class="mb-4">お子様や同乗者が車内で戻してしまった場合、スピードが命です。放置すると、胃酸がシートを傷めたり、ニオイが完全に取れなくなる原因になります。</p>

                <h3 class="font-bold text-xl mb-4">緊急対処 3ステップ</h3>
                <ol class="list-decimal pl-5 mb-4 space-y-2">
                    <li><strong>固形物を取り除く：</strong> ティッシュやタオルで、擦らずにつまむように取り除きます。擦ると汚れを広げてしまいます。</li>
                    <li><strong>水分を吸い取る：</strong> 乾いたタオルやペットシーツを押し当て、水分を吸い取ります。</li>
                    <li><strong>薄めた中性洗剤で拭く：</strong> 水で薄めた中性洗剤（食器用など）を含ませたタオルで、トントンと叩くように拭きます。</li>
                </ol>

                <div class="bg-red-50 p-4 rounded-lg mt-6 border border-red-200">
                    <p class="font-bold text-red-800">※注意：消臭スプレーはNG！</p>
                    <p class="text-sm mt-2">ニオイを誤魔化そうとして消臭スプレーを大量にかけると、成分が混ざってさらに悪臭化することがあります。まずは物理的な除去を優先してください。</p>
                </div>
                
                <p class="mt-6 font-bold">そのまま放置すると、最悪の場合「車 腐敗 臭」のような強烈な異臭となります。胃酸が深部まで浸透してしまう前に、プロの専用機材で除去する必要があります。できるだけ早くご連絡ください。</p>
            `,
            date: "2024.01.10",
            image: "/images/coffee_stain.png",
            category: "緊急対応"
        }
    ];

    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const regionalPostData = regionalPosts[regionName];

    // Combine posts: External -> Regional -> Base
    const combinedPosts = [
        ...externalPosts,
        ...(regionalPostData ? [{
            id: 0,
            title: regionalPostData.title,
            excerpt: regionalPostData.excerpt,
            content: regionalPostData.content,
            date: "2026.02.12",
            image: regionalPostData.image,
            category: "施工事例",
            regionName: displayName
        }] : []),
        ...basePosts.map(post => ({ ...post, regionName: displayName }))
    ];

    const handlePostClick = (post: BlogPost) => {
        if (post.url) {
            window.location.href = post.url;
        } else {
            setSelectedPost(post);
        }
    };

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-200" id="blog">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        お役立ちコラム
                    </h2>
                    <p className="text-gray-600">
                        車内クリーニングのプロが教える、愛車をきれいに保つための情報
                    </p>
                    <a href="https://carinteriorcleaning.jp/blog/" className="text-primary hover:underline mt-2 inline-block font-bold">
                        最新ブログ一覧はこちら &rarr;
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {combinedPosts.map((post) => (
                        <article
                            key={post.id}
                            onClick={() => handlePostClick(post)}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer border border-gray-100 flex flex-col group h-full relative"
                        >
                            {/* External Link Indicator */}
                            {post.url && (
                                <div className="absolute top-2 right-2 z-10 bg-white/90 backdrop-blur text-gray-600 text-xs px-2 py-1 rounded shadow-sm flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    ブログへ
                                </div>
                            )}

                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-2 left-2 flex gap-2">
                                    <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                                        {post.category}
                                    </div>
                                    {post.regionName && (
                                        <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {post.regionName}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <time className="text-sm text-gray-500 mb-2 block">{post.date}</time>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-100 text-right">
                                    <span className="text-primary text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                        {post.url ? 'ブログを読む' : '記事を読む'} &rarr;
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedPost(null)}>
                    <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={e => e.stopPropagation()}>
                        <button
                            className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
                            onClick={() => setSelectedPost(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="relative h-64 w-full md:h-80">
                            <Image
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-24 text-white">
                                <div className="flex gap-2 mb-2">
                                    <div className="text-sm font-bold bg-primary inline-block px-2 py-1 rounded">{selectedPost.category}</div>
                                    {selectedPost.regionName && (
                                        <div className="text-sm font-bold bg-blue-600 inline-flex items-center gap-1 px-2 py-1 rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {selectedPost.regionName}
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold leading-tight">{selectedPost.title}</h3>
                                <time className="text-sm opacity-80 mt-2 block">{selectedPost.date}</time>
                            </div>
                        </div>

                        <div className="p-8 md:p-10 text-gray-800 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                        />

                        <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
                            <a href="#contact"
                                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
                                onClick={() => setSelectedPost(null)}
                            >
                                プロに相談する（無料）
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
