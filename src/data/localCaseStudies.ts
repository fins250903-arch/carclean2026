export interface CaseStudy {
  id: string;
  region: string;
  city: string;
  niche: 'car' | 'truck';
  title: string;
  problem: string;
  professionalInsight: string;
  result: string;
  image: string;
}

export const localCaseStudies: CaseStudy[] = [
  {
    id: "osaka-nbox-vomit",
    region: "大阪",
    city: "大阪市",
    niche: "car",
    title: "古墳群の歴史に寄り添う、N-BOXの「空気再生」",
    problem: "USJや万博公園へのドライブで発生した「お子様の急な嘔吐」や、中古車購入時の「加齢臭・タバコ臭」にお困りのケース。中古のN-BOXを手に入れたばかりのお客様から、「不快な臭いに満ちていては興ざめ」とのご相談でした。",
    professionalInsight: "車内の消臭で大切なのは、汚れを「浮かす」ことです。私たちは、40度前後の温水と特殊なアルカリ洗剤を使い、シートの繊維一本一本を洗うような感覚で作業を進めました。加齢臭の元となる皮脂は、体温に近い温度で洗うのが一番落ちるんです。",
    result: "分解後無害になる洗浄剤で、徹底洗浄。食い倒れの街・大阪のカーライフを清潔にサポートする、クリーンな空間が蘇りました。",
    image: "/images/cases/nbox_odor_3.webp"
  },
  {
    id: "osaka-sienta-vomit",
    region: "大阪",
    city: "箕面市",
    niche: "car",
    title: "シエンタの嘔吐汚れを徹底除菌！車酔いの苦い思い出を消し去る事例",
    problem: "箕面大滝のカーブが多い道で、お子様が突然の嘔吐。営業車としても使うため、急ぎの復旧が必要でした。",
    professionalInsight: "吐瀉物がシートの奥や隙間に入り込んでいる場合、表面を拭くだけでは後から腐敗臭が発生します。専用のリンサーと130℃のスチームを使用し、奥深くまで浸透した汚れを熱で殺菌・吸引しました。",
    result: "翌日の仕事に間に合うスピードで無臭状態に復元。プロの機材ならではの完全消臭を実現しました。",
    image: "/images/cases/sienta_vomit_5.webp"
  },
  {
    id: "osaka-truck-tobacco",
    region: "大阪",
    city: "堺市",
    niche: "truck",
    title: "長年のヤニ汚れとペット臭の複合臭を解消",
    problem: "ワンちゃんをよく乗せる営業車。長年のタバコのヤニ汚れと犬の獣臭が混ざり、人を乗せられない状態でした。",
    professionalInsight: "動物の脂分とタバコのタールは性質が異なるため、それぞれに特化した酵素系クリーナーを2段階で塗布。汚れを分解してから温水で一気に吸い上げる工法を採用しました。",
    result: "染み込んでいた茶色い汚水をすべて回収し、新車に近いクリアな空気に戻りました。",
    image: "/images/cases/truck_10t_cabin.png"
  }
];
