import React from 'react';
import { useState } from 'react';
import { regionalPosts } from '@/data/regionalPosts';
import { useRegion } from '@/lib/RegionContext';

export default function Blog({ regionName: propRegionName, displayName: propDisplayName }: { regionName?: string, displayName?: string }) {
    const context = useRegion();
    const regionName = propRegionName || context.regionName;
    const displayName = propDisplayName || context.displayName;

    type BlogPost = {
        id: number;
        title: string;
        excerpt: string;
        date: string;
        image: string;
        category: string;
        url?: string;
        regionName?: string;
    };

    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    // Merge base posts with regional posts
    const basePosts: BlogPost[] = [
        {
            id: 1,
            title: "車内嘔吐の正しい対処法と、プロの除菌技術",
            excerpt: "もし車内で嘔吐してしまったら…被害を最小限に抑えるための応急処置と、プロが行う徹底洗浄の内容を解説します。",
            date: "2024.03.15",
            image: "/images/cases/sienta_vomit_5.webp",
            category: "ノウハウ",
            url: "https://carinteriorcleaning.jp/blog/outo-syori/"
        },
        {
            id: 2,
            title: "トラックキャビンの悪臭、原因はタバコだけじゃない？",
            excerpt: "長距離トラックのキャビンに染み付いた臭い。皮脂汚れやカビなど、見えない原因を根こそぎ除去する方法。",
            date: "2024.03.10",
            image: "/images/truck-fv.png",
            category: "トラック清掃",
            url: "https://carinteriorcleaning.jp/blog/truck-cabin-clean/"
        }
    ];

    const displayPosts = [
        ...Object.values(regionalPosts).filter(post => post.displayName === displayName || post.title.includes(regionName.replace('府', '').replace('県', ''))),
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
        <section className="py-10 bg-gray-50 border-t border-gray-200" id="blog">
            <div className="container mx-auto px-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        お役立ちコラム
                    </h2>
                    <p className="text-gray-600">
                        車内クリーニングのプロが教える、愛車をきれいに保つための情報
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayPosts.slice(0, 3).map((post, index) => (
                        <article 
                            key={index} 
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
                            onClick={() => handlePostClick(post as BlogPost)}
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transition-transform hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/images/rinser.webp';
                                    }}
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-bold text-primary px-2 py-1 bg-blue-50 rounded">
                                        {post.category || "コラム"}
                                    </span>
                                    <span className="text-gray-400 text-xs">{post.date}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                                    {post.excerpt}
                                </p>
                                <span className="text-primary font-bold text-sm flex items-center gap-1">
                                    詳しく見る <span className="text-lg">→</span>
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://carinteriorcleaning.jp/blog/" 
                        className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-full transition-all"
                    >
                        最新ブログ一覧はこちら →
                    </a>
                </div>
            </div>

            {/* Modal for posts without URL (optional) */}
            {selectedPost && (
                <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative">
                        <button 
                            onClick={() => setSelectedPost(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                        </button>
                        <div className="mb-6">
                            <span className="text-primary font-bold text-sm bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                                {selectedPost.category}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                                {selectedPost.title}
                            </h2>
                            <p className="text-gray-400 text-sm mt-2">{selectedPost.date}</p>
                        </div>
                        <img 
                            src={selectedPost.image} 
                            alt={selectedPost.title} 
                            className="w-full h-64 object-cover rounded-xl mb-6 shadow-md"
                        />
                        <div className="prose prose-blue max-w-none">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {selectedPost.excerpt}
                                <br /><br />
                                ※詳細な内容は現在準備中です。公式ブログにて同様のテーマの記事を公開しておりますので、そちらもあわせてご覧ください。
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-100 flex justify-center">
                            <button 
                                onClick={() => setSelectedPost(null)}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-10 rounded-full transition-colors"
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
