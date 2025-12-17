export const nodes = [
    { id: "Roger", name: "罗杰·艾克罗伊德", en: "Roger Ackroyd", group: 1, role: "受害者/庄园主", desc: "芬利庄园的主人，当地极其富有的绅士。他是大家关注的中心，因为很多人都在经济上依赖他。故事开始时非常焦虑。" },
    { id: "Poirot", name: "赫尔克里·波洛", en: "Hercule Poirot", group: 4, role: "侦探", desc: "大名鼎鼎的比利时侦探，已退休。搬到了谢泼德医生隔壁种西葫芦，试图隐姓埋名，但很快被卷入案件。" },
    { id: "Sheppard", name: "詹姆斯·谢泼德医生", en: "Dr. James Sheppard", group: 4, role: "叙述者/医生", desc: "本书的叙述者，本地受人尊敬的医生。他和波洛是邻居，也是罗杰的朋友。他记录了整个案件的经过。" },
    { id: "Caroline", name: "卡洛琳·谢泼德", en: "Caroline Sheppard", group: 4, role: "医生的姐姐", desc: "谢泼德医生的姐姐，和他住在一起。她是村里的八卦中心，消息极其灵通，拥有惊人的直觉。" },
    { id: "Ralph", name: "拉尔夫·帕顿", en: "Ralph Paton", group: 2, role: "罗杰的继子", desc: "罗杰已故妻子的儿子。英俊迷人但挥霍无度，总是深陷债务危机。他是遗产的主要继承人之一，和弗洛拉有婚约。" },
    { id: "MrsAckroyd", name: "塞西尔·艾克罗伊德太太", en: "Mrs. Cecil Ackroyd", group: 2, role: "罗杰的弟媳", desc: "罗杰已故弟弟的遗孀。带着女儿弗洛拉住在芬利庄园，在经济上完全依赖罗杰，对此经常感到不满。" },
    { id: "Flora", name: "弗洛拉·艾克罗伊德", en: "Flora Ackroyd", group: 2, role: "罗杰的侄女", desc: "艾克罗伊德太太的女儿。年轻美丽，与拉尔夫·帕顿订了婚。她似乎也有些经济上的困扰。" },
    { id: "Blunt", name: "赫克托·布兰特少校", en: "Major Hector Blunt", group: 2, role: "朋友/客人", desc: "著名的狩猎家和探险家，罗杰的老朋友，也是庄园的客人。性格沉默寡言，似乎对弗洛拉有好感。" },
    { id: "Raymond", name: "杰弗里·雷蒙德", en: "Geoffrey Raymond", group: 3, role: "私人秘书", desc: "罗杰的私人秘书。年轻、能干、性格开朗，处理罗杰的各种事务。" },
    { id: "Parker", name: "帕克", en: "Parker", group: 3, role: "管家", desc: "芬利庄园的男管家。虽然尽职，但有些行为举止在谢泼德医生看来有些可疑。" },
    { id: "Russell", name: "拉塞尔小姐", en: "Elizabeth Russell", group: 3, role: "女管家", desc: "庄园的女管家，在这里工作了五年。据传罗杰可能想娶她，这让其他人感到不安。" },
    { id: "Ursula", name: "厄休拉·伯恩", en: "Ursula Bourne", group: 3, role: "女侍", desc: "庄园的一名女侍，最近刚辞职（或被解雇），情绪显得很激动。" },
    { id: "Ferrars", name: "费拉尔斯太太", en: "Mrs. Ferrars", group: 1, role: "已故寡妇", desc: "故事开始前刚去世的人物。罗杰的情人。她的自杀（以及她是否谋杀了亡夫的传言）是引发整个事件的导火索。" }
];

export const links = [
    { source: "Sheppard", target: "Poirot", label: "邻居/助手" },
    { source: "Sheppard", target: "Roger", label: "医生/朋友" },
    { source: "Sheppard", target: "Caroline", label: "姐弟" },
    { source: "Sheppard", target: "Ferrars", label: "医生" },

    { source: "Roger", target: "Ferrars", label: "秘密情人" },
    { source: "Roger", target: "Ralph", label: "继父子" },
    { source: "Roger", target: "MrsAckroyd", label: "供养" },
    { source: "Roger", target: "Flora", label: "伯父/供养" },
    { source: "Roger", target: "Blunt", label: "老友" },
    { source: "Roger", target: "Raymond", label: "雇主" },
    { source: "Roger", target: "Parker", label: "雇主" },
    { source: "Roger", target: "Russell", label: "雇主/暧昧?" },
    { source: "Roger", target: "Ursula", label: "雇主" },

    { source: "Ralph", target: "Flora", label: "未婚夫妻" },
    { source: "MrsAckroyd", target: "Flora", label: "母女" },
    { source: "Blunt", target: "Flora", label: "暗恋?" },

    { source: "Russell", target: "Ursula", label: "上下级" },
    { source: "Parker", target: "Ursula", label: "同事" },

    { source: "Caroline", target: "Poirot", label: "好奇/观察" }
];
