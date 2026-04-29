export interface Testimonial {
  id: string;
  name: string;
  region: string;
  service: string;
  title: string;
  comment: string;
  image: string;
}

export const questionnaireTestimonials: Testimonial[] = [
  {
    id: "testimonial-01",
    name: "依頼者様 (20代女性)",
    region: "大阪市",
    service: "嘔吐クリーニング",
    title: "エアコンの臭いまで消えて感動",
    comment: "子どもが車で嘔吐してしまい、クリーニングを依頼。想像以上に丁寧に洗ってもらい、エアコンからの臭いも完全になくなって感動しました。",
    image: "/images/voice_family.webp"
  },
  {
    id: "testimonial-02",
    name: "依頼者様 (30代男性)",
    region: "箕面市",
    service: "灯油消臭",
    title: "灯油の臭いが気にならない程度に",
    comment: "新車に灯油をこぼし、自分でやっていたら悪循環に。プロに相談し、洗浄してもらった結果、ほとんど匂いが気にならない程度まで綺麗になりました。",
    image: "/images/voice_young_man.webp"
  },
  {
    id: "testimonial-03",
    name: "依頼者様 (40代女性)",
    region: "堺市",
    service: "タバコ消臭",
    title: "中古車のタバコ臭が消えました",
    comment: "中古で購入した車のタバコのニオイが微かに残っているのが気になっていました。相談したところ、本当にニオイが消えていたので大満足です。",
    image: "/images/voice_businessman.webp"
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
      "name": t.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": t.comment
  }));
};