export interface Testimonial {
  id: string;
  author: string;
  age?: string;
  gender?: string;
  content: string;
  consultation: string;
  construction: string;
  result: string;
  originalImage?: string;
}

export const questionnaireTestimonials: Testimonial[] = [
  {
    id: "testimonial-01",
    author: "依頼者",
    age: "20代",
    gender: "女性",
    content: "子どもが車で嘔吐してしまい、クリーニングを依頼。想像以上に丁寧に洗ってもらい、エアコンからの臭いも完全になくなって感動しました。",
    consultation: "お子様が車内で嘔吐。クリーニング後もエアコンから臭いが残っていた。",
    construction: "車内全体のクリーニングとエアコン内部の臭気原因箇所を重点洗浄。",
    result: "想像以上に丁寧に洗ってもらい、エアコン臭まで完全になくなって感動した。",
  },
  {
    id: "testimonial-02",
    author: "依頼者",
    age: "30代",
    gender: "男性",
    content: "新車に灯油をこぼし、自分でやっていたら悪循環に。プロに相談し、洗浄してもらった結果、ほとんど匂いが気にならない程度まで綺麗になりました。",
    consultation: "新車に灯油をこぼし、自己処理を繰り返したが逆に悪化してしまった。",
    construction: "灯油が浸透しやすい箇所を特定し、専門洗浄で臭気の広がりを抑制。",
    result: "ほとんど匂いが気にならない程度まで綺麗になった。",
  },
  {
    id: "testimonial-03",
    author: "依頼者",
    age: "40代",
    gender: "女性",
    content: "中古で購入した車のタバコのニオイが微かに残っているのが気になっていました。相談したところ、本当にニオイが消えていたので大満足です。",
    consultation: "中古購入車に前オーナー由来のタバコ臭が微かに残っていた。",
    construction: "臭いが残留しやすい内装・シート・エアコンを中心に消臭洗浄。",
    result: "本当にニオイが消えていた。大満足と高評価をいただいた。",
  },
  {
    id: "testimonial-04",
    author: "依頼者",
    age: "20代",
    gender: "女性",
    content: "中古車を購入し、車内の何とも言えない臭いに困っていました。丁寧な対応に大変満足しました。同じ悩みの方にオススメです。",
    consultation: "中古車特有の原因不明のこもった臭いに悩んでいた。",
    construction: "車内の臭いの発生源を確認しながら丁寧にクリーニング。",
    result: "丁寧な対応に大変満足。同じ悩みの方にオススメとのコメントをいただいた。",
  }
];

export const generateQuestionnaireJsonLd = (regionName: string, displayName: string, path: string) => {
  return questionnaireTestimonials.map(t => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": `車内清掃 特急便 ${displayName}`,
      "image": "https://carinteriorcleaning.jp/images/fv.png",
      "telephone": "070-8428-0866",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": regionName,
        "addressCountry": "JP"
      }
    },
    "author": {
      "@type": "Person",
      "name": t.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": t.content
  }));
};