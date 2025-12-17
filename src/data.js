export const nodes = [
    { id: "Roger", name: "罗杰·艾克罗伊德", en: "Roger Ackroyd", group: 1, role: "受害者/庄园主", desc: "芬利庄园的主人，当地极其富有的绅士。他是大家关注的中心，因为很多人都在经济上依赖他。故事开始时非常焦虑。" },
    { id: "Poirot", name: "赫尔克里·波洛", en: "Hercule Poirot", group: 4, role: "侦探", desc: "大名鼎鼎的比利时侦探，已退休。搬到了谢泼德医生隔壁种西葫芦，试图隐姓埋名，但很快被卷入案件。" },
    { id: "Sheppard", name: "詹姆斯·谢泼德医生", en: "Dr. James Sheppard", group: 4, role: "叙述者/医生", trueRole: "凶手/勒索者", desc: "本书的叙述者，本地受人尊敬的医生。他和波洛是邻居，也是罗杰的朋友。他记录了整个案件的经过。", trueDesc: "【凶手】他勒索了费拉尔斯太太，导致其自杀。因担心事情败露，他在罗杰收到信件时将其刺死，并伪造了不在场证明和录音机机关。" },
    { id: "Caroline", name: "卡洛琳·谢泼德", en: "Caroline Sheppard", group: 4, role: "医生的姐姐", desc: "谢泼德医生的姐姐，和他住在一起。她是村里的八卦中心，消息极其灵通，拥有惊人的直觉。" },
    { id: "Ralph", name: "拉尔夫·帕顿", en: "Ralph Paton", group: 2, role: "罗杰的继子", trueRole: "隐婚丈夫", desc: "罗杰已故妻子的儿子。英俊迷人但挥霍无度，总是深陷债务危机。他是遗产的主要继承人之一，和弗洛拉有婚约。", trueDesc: "他早在半年前就和厄休拉秘密结婚了。因为害怕失去继承权，一直不敢告诉继父。案发当晚他确实去过庄园，但只是和厄休拉争吵。" },
    { id: "MrsAckroyd", name: "塞西尔·艾克罗伊德太太", en: "Mrs. Cecil Ackroyd", group: 2, role: "罗杰的弟媳", desc: "罗杰已故弟弟的遗孀。带着女儿弗洛拉住在芬利庄园，在经济上完全依赖罗杰，对此经常感到不满。", trueDesc: "她不仅在这个家白吃白住，还试图偷看罗杰的遗嘱，甚至偷拿了一些银器去变卖。她极度自私，只关心钱。" },
    { id: "Flora", name: "弗洛拉·艾克罗伊德", en: "Flora Ackroyd", group: 2, role: "罗杰的侄女", trueRole: "小偷/说谎者", desc: "艾克罗伊德太太的女儿。年轻美丽，与拉尔夫·帕顿订了婚。她似乎也有些经济上的困扰。", trueDesc: "她并没有真的在案发时间见过舅舅。她是去卧室偷了钱（40英镑），被Parker撞见后撒谎说刚从书房出来，无意中扰乱了死亡时间的推断。" },
    { id: "Blunt", name: "赫克托·布兰特少校", en: "Major Hector Blunt", group: 2, role: "朋友/客人", trueRole: "暗恋弗洛拉", desc: "著名的狩猎家和探险家，罗杰的老朋友，也是庄园的客人。性格沉默寡言，似乎对弗洛拉有好感。", trueDesc: "他深爱着弗洛拉，但他觉得自己太老且无趣，配不上她。最后在波洛的鼓励下赢得了美人归。" },
    { id: "Raymond", name: "杰弗里·雷蒙德", en: "Geoffrey Raymond", group: 3, role: "私人秘书", desc: "罗杰的私人秘书。年轻、能干、性格开朗，处理罗杰的各种事务。", trueDesc: "虽然有债务缠身，但他并不是凶手。他对罗杰的死并不特别悲伤，更关心遗产分配。" },
    { id: "Parker", name: "帕克", en: "Parker", group: 3, role: "管家", trueRole: "职业勒索犯", desc: "芬利庄园的男管家。虽然尽职，但有些行为举止在谢泼德医生看来有些可疑。", trueDesc: "他曾勒索以前的一位雇主，并试图窃听罗杰和医生的谈话以寻找勒索机会（有关费拉尔斯太太的事）。" },
    { id: "Russell", name: "拉塞尔小姐", en: "Elizabeth Russell", group: 3, role: "女管家", trueRole: "未婚母亲", desc: "庄园的女管家，在这里工作了五年。据传罗杰可能想娶她，这让其他人感到不安。", trueDesc: "她有一个私生子查尔斯·肯特。案发当晚她在凉亭见的人正是她的儿子，这一行为引起了医生的怀疑。" },
    { id: "Ursula", name: "厄休拉·伯恩", en: "Ursula Bourne", group: 3, role: "女侍", trueRole: "隐婚妻子", desc: "庄园的一名女侍，最近刚辞职（或被解雇），情绪显得很激动。", trueDesc: "她其实是出身良好的没落贵族。她和拉尔夫秘密结婚，因为拉尔夫想维持单身汉形象以便继承遗产，她被迫在庄园做女仆，承受了巨大委屈。" },
    { id: "Ferrars", name: "费拉尔斯太太", en: "Mrs. Ferrars", group: 1, role: "已故寡妇", trueRole: "杀夫者/被勒索者", desc: "故事开始前刚去世的人物。罗杰的情人。她的自杀（以及她是否谋杀了亡夫的传言）是引发整个事件的导火索。", trueDesc: "她为了摆脱不仅酗酒而且虐待她的丈夫，毒死了他。这件事被谢泼德医生发现并长期勒索，最终不堪重负自杀。" },
    { id: "MrFerrars", name: "阿什利·费拉尔斯", en: "Ashley Ferrars", group: 5, role: "费拉尔斯先生", desc: "费拉尔斯太太的亡夫，一年前去世。生前是个酒鬼，性格恶劣。他的死因一直存疑，有传言说是被妻子毒死的。" },
    { id: "FirstWife", name: "罗杰的第一任妻子", en: "Roger's First Wife", group: 5, role: "拉尔夫生母", desc: "罗杰·艾克罗伊德的第一任妻子，拉尔夫·帕顿的生母。在故事开始前很久就已经去世了。" },
    { id: "CharlesKent", name: "查尔斯·肯特", en: "Charles Kent", group: 5, role: "陌生人", trueRole: "私生子", desc: "案发当晚在庄园附近出没的可疑陌生人。被怀疑是嫌疑人之一。", trueDesc: "拉塞尔小姐的私生子。也是个瘾君子。当晚他是来找母亲要钱的。", spoiler: true }
];

export const links = [
    { source: "Sheppard", target: "Poirot", label: "邻居/助手" },
    { source: "Sheppard", target: "Roger", label: "医生/朋友" },
    { source: "Sheppard", target: "Caroline", label: "姐弟" },
    { source: "Sheppard", target: "Ferrars", label: "医生" },
    { source: "Sheppard", target: "Ferrars", label: "长期勒索", spoiler: true },
    { source: "Sheppard", target: "Roger", label: "谋杀", spoiler: true },

    { source: "Roger", target: "Ferrars", label: "秘密情人" },
    { source: "Roger", target: "FirstWife", label: "前妻" },
    { source: "Roger", target: "Ralph", label: "继父子" },
    { source: "Roger", target: "MrsAckroyd", label: "供养" },
    { source: "Roger", target: "Flora", label: "伯父/供养" },
    { source: "Roger", target: "Blunt", label: "老友" },
    { source: "Roger", target: "Raymond", label: "雇主" },
    { source: "Roger", target: "Parker", label: "雇主" },
    { source: "Roger", target: "Russell", label: "雇主/暧昧?" },
    { source: "Roger", target: "Ursula", label: "雇主" },

    { source: "Ralph", target: "Flora", label: "未婚夫妻" },
    { source: "Ralph", target: "Ursula", label: "秘密夫妻", spoiler: true },
    { source: "MrsAckroyd", target: "Flora", label: "母女" },
    { source: "Blunt", target: "Flora", label: "暗恋?" },
    { source: "Blunt", target: "Flora", label: "真心相爱", spoiler: true },

    { source: "Russell", target: "Ursula", label: "上下级" },
    { source: "Parker", target: "Ursula", label: "同事" },

    { source: "Ferrars", target: "MrFerrars", label: "亡夫" },
    { source: "Ferrars", target: "MrFerrars", label: "毒杀", spoiler: true },
    { source: "Ralph", target: "FirstWife", label: "母子" },

    { source: "Caroline", target: "Poirot", label: "好奇/观察" },

    { source: "Parker", target: "Sheppard", label: "试图勒索?", spoiler: true },
    { source: "Russell", target: "CharlesKent", label: "母子", spoiler: true },
    { source: "CharlesKent", target: "Sheppard", label: "遇见", spoiler: true }
];
