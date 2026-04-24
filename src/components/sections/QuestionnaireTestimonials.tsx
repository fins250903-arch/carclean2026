"use client";

import Image from 'next/image';

import { questionnaireTestimonials } from '@/data/questionnaireTestimonials';
import { useRegion } from '@/lib/RegionContext';

export default function QuestionnaireTestimonials() {
    const { displayName } = useRegion();

    return (
        <section className="bg-amber-50 py-16">
            <div className="container mx-auto px-4">
                {/* セクションヘッダー */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex rounded-full border border-amber-300 bg-amber-100 px-4 py-1 text-sm font-semibold tracking-wide text-amber-700">
                        お客様の声
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
                        ご利用頂いたお客様のアンケート
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                        実際にお客様にご記入いただいたアンケートをそのまま掲載しています。<br className="hidden sm:inline" />
                        手書きの声と一緒に内容をご確認ください。
                    </p>
                </div>

                {/* カードグリッド */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {questionnaireTestimonials.map((item) => (
                        <article
                            key={item.id}
                            className="flex flex-col overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm"
                        >
                            {/* カテゴリバッジ */}
                            <div className="flex items-center gap-2 bg-amber-100 px-4 py-2">
                                <span className="text-base">📋</span>
                                <span className="text-xs font-bold tracking-wide text-amber-800">
                                    {item.category}
                                </span>
                            </div>

                            {/* アンケート画像（手書き） */}
                            <div className="relative w-full overflow-hidden bg-white">
                                <div className="relative aspect-[4/3] w-full">
                                    <Image
                                        src={item.image}
                                        alt={`お客様アンケート手書き原本 - ${item.category}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        className="object-contain p-2"
                                        quality={85}
                                    />
                                </div>
                            </div>

                            {/* アンケート本文（画像のすぐ下） */}
                            <div className="border-t border-amber-100 bg-amber-50 px-4 py-4">
                                <p className="mb-1 text-xs font-semibold text-amber-700">▼ アンケート内容</p>
                                <p className="text-sm leading-7 text-slate-800">
                                    「{item.transcript}」
                                </p>
                                <p className="mt-2 text-right text-xs text-slate-500">
                                    — {item.requester}
                                </p>
                            </div>

                            {/* タグ */}
                            <div className="flex flex-wrap gap-1.5 border-t border-slate-100 bg-white px-4 py-3">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* 詳細情報（アコーディオン的にコンパクト表示） */}
                            <div className="divide-y divide-slate-100 border-t border-slate-100 bg-white">
                                {item.details.map((detail) => (
                                    <div key={detail.label} className="px-4 py-3">
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                            {detail.label}
                                        </p>
                                        <p className="mt-1 text-sm leading-6 text-slate-700">
                                            {detail.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                {/* フッター注記 */}
                <p className="mt-8 text-center text-xs text-slate-400">
                    ※ 掲載画像は実際にお客様よりご提出いただいたアンケート原本を縮小表示しています。
                </p>
            </div>
        </section>
    );
}