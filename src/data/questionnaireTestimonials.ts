import { SITE_URL, STORE_NAME } from '@/lib/site';

type QuestionnaireDetail = {
    label: string;
    value: string;
};

export type QuestionnaireTestimonial = {
    id: string;
    category: string;
    title: string;
    image: string;
    transcript: string;
    requester: string;
    tags: string[];
    details: QuestionnaireDetail[];
};

export const questionnaireTestimonials: QuestionnaireTestimonial[] = [
    {
        id: 'survey-kodomo',
        category: '嘔吐（お子様や同乗者）',
        title: 'お子様の嘔吐・エアコン臭が完全消臭',
        image: '/images/questionnaires/kodomo.jpg',
        transcript: '子どもが車で嘔吐してしまい、クリーニングを依頼。想像以上に丁寧に洗ってもらい、エアコンからの臭いも完全になくなって感動しました。',
        requester: '依頼者　20代　女性',
        tags: ['嘔吐対応', 'エアコン臭除去', '即効性'],
        details: [
            { label: 'ご相談内容', value: 'お子様が車内で嘔吐。クリーニング後もエアコンから臭いが残っていた。' },
            { label: '施工内容', value: '車内全体のクリーニングとエアコン内部の臭気原因箇所を重点洗浄。' },
            { label: 'お客様の感想', value: '想像以上に丁寧に洗ってもらい、エアコン臭まで完全になくなって感動した。' },
        ],
    },
    {
        id: 'survey-touyu',
        category: '灯油がこぼれた',
        title: '新車に灯油をこぼした臭いをほぼ解消',
        image: '/images/questionnaires/touyu.jpg',
        transcript: '新車に灯油をこぼし、自分でやっていたら悪循環に。プロに相談し、洗浄してもらった結果、ほとんど匂いが気にならない程度まで綺麗になりました。',
        requester: '依頼者　30代　男性',
        tags: ['灯油こぼし', '新車対応', '臭い改善'],
        details: [
            { label: 'ご相談内容', value: '新車に灯油をこぼし、自己処理を繰り返したが逆に悪化してしまった。' },
            { label: '施工内容', value: '灯油が浸透しやすい箇所を特定し、専門洗浄で臭気の広がりを抑制。' },
            { label: 'お客様の感想', value: 'ほとんど匂いが気にならない程度まで綺麗になった。' },
        ],
    },
    {
        id: 'survey-used2',
        category: 'タバコの匂い除去',
        title: '中古車のタバコ臭が消えて大満足',
        image: '/images/questionnaires/used2.jpg',
        transcript: '中古で購入した車のタバコのニオイが微かに残っているのが気になっていました。相談したところ、本当にニオイが消えていたので大満足です。',
        requester: '依頼者　40代　女性',
        tags: ['中古車', 'タバコ臭除去', '満足度高評価'],
        details: [
            { label: 'ご相談内容', value: '中古購入車に前オーナー由来のタバコ臭が微かに残っていた。' },
            { label: '施工内容', value: '臭いが残留しやすい内装・シート・エアコンを中心に消臭洗浄。' },
            { label: 'お客様の感想', value: '本当にニオイが消えていた。大満足と高評価をいただいた。' },
        ],
    },
    {
        id: 'survey-usedcar1',
        category: '中古車特有の臭い',
        title: '中古車の何とも言えない臭いを改善',
        image: '/images/questionnaires/usedcar1.jpg',
        transcript: '中古車を購入し、車内の何とも言えない臭いに困っていました。丁寧な対応に大変満足しました。同じ悩みの方にオススメです。',
        requester: '依頼者　20代　女性',
        tags: ['中古車臭', '丁寧な対応', 'おすすめ'],
        details: [
            { label: 'ご相談内容', value: '中古車特有の原因不明のこもった臭いに悩んでいた。' },
            { label: '施工内容', value: '車内の臭いの発生源を確認しながら丁寧にクリーニング。' },
            { label: 'お客様の感想', value: '丁寧な対応に大変満足。同じ悩みの方にオススメとのコメントをいただいた。' },
        ],
    },
    {
        id: 'survey-dogsit',
        category: 'ペットのお漏らし・うんち',
        title: 'ペットの粗相による臭いがなくなった',
        image: '/images/questionnaires/dogsit.jpg',
        transcript: 'ワンちゃんにウンチ、オシッコをされ、自分でも処理しましたがいつまでも臭うので依頼。シートを外して高圧洗浄・消毒してもらい、臭いがなくなりました。',
        requester: '依頼者　60代　女性',
        tags: ['ペット臭', '高圧洗浄', '消毒処理'],
        details: [
            { label: 'ご相談内容', value: 'ペットのウンチ・オシッコ後、自分で処理しても臭いが残り続けていた。' },
            { label: '施工内容', value: 'シートを外したうえで高圧洗浄と消毒を徹底実施。' },
            { label: 'お客様の感想', value: 'シートを外して高圧洗浄・消毒してもらい、臭いがなくなった。' },
        ],
    },
    {
        id: 'survey-kaigo',
        category: '加齢臭・高齢者特有の臭い',
        title: '介護車両の尿臭・加齢臭を一掃し新車同様に',
        image: '/images/questionnaires/kaigo.jpg',
        transcript: '介護が必要な母を乗せていた車で、尿漏れもあり尿臭と高齢者特有の臭いが充満。目に見えない場所まで綺麗にして頂き、臭いも無くなり新車のようです。',
        requester: '依頼者　50代　男性',
        tags: ['介護車両', '尿臭除去', '徹底洗浄'],
        details: [
            { label: 'ご相談内容', value: '介護で使用する車に尿臭と高齢者特有の臭いが蓄積していた。' },
            { label: '施工内容', value: '目に見えない箇所まで含めて、臭いの原因箇所を丁寧に徹底洗浄。' },
            { label: 'お客様の感想', value: '臭いがなくなり、新車のよう。目に見えない場所まで綺麗にしてもらえた。' },
        ],
    },
];

export const generateQuestionnaireJsonLd = (regionName: string, displayName: string, path: string = '') => {
    const isOsaka = path === '/regions/osaka' || path === '/regions/osaka/';
    const normalizedPath = isOsaka ? '' : path;
    const url = `${SITE_URL}${normalizedPath}${normalizedPath.endsWith('/') ? '' : '/'}`;

    // Review スニペット解釈による警告回避のため、アンケートは ItemList/CreativeWork で出力する
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            '@id': `${url}#questionnaire-list`,
            name: `${displayName}のお客様アンケート`,
            numberOfItems: questionnaireTestimonials.length,
            itemListElement: questionnaireTestimonials.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'CreativeWork',
                    '@id': `${url}#questionnaire-${index + 1}`,
                    name: item.title,
                    text: item.transcript,
                    inLanguage: 'ja-JP',
                    datePublished: '2025-01-01',
                    author: {
                        '@type': 'Person',
                        name: item.requester,
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: STORE_NAME,
                    },
                    about: {
                        '@id': `${url}#localbusiness`,
                    },
                },
            })),
        },
    ];
};