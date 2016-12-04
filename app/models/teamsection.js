import DS from 'ember-data';

var Teamsection = DS.Model.extend({
    name: DS.attr('string'),
    title: DS.attr('string'),
    pic: DS.attr('string'),
    desc: DS.attr('string'),
});

Teamsection.reopenClass({
    FIXTURES: [{
            id: 1,
            name: "朱志文",
            title: "CEO&Founder",
            pic: "/images/team/team1.jpg",
            desc: "网名imfly，37岁，亿书创始人，曾是世界500强企业的高级管理者，中国区块链俱乐部主创之一，10年+开发管理经验。中国区块链技术社区的代表人物，《Nodejs开发加密货币》作者，CSDN博客专家，CSDN区块链知识库创建者和特邀编辑。比特币、Ubuntu等开源产品的忠实粉丝，区块链技术的布道者，多家区块链创业公司的天使投资人。"
        },
        {
            id: 2,
            name: "桑世龙",
            title: "CTO",
            pic: "/images/team/team2.jpg",
            desc: "网名i5ting，30岁，在Nodejs领域有极深造诣，全面负责亿书技术攻关。曾就职于国信灵通（网秦子公司）新浪和财新传媒，Manager、全栈工程师（Web, iOS），StuQ 明星讲师，开源项目 Moajs 作者，Node.js 技术布道者，其开发的第一套广电行业数据分析与科学决策系统，获广电总局2010科技创新奖1等奖。"
        },
        {
            id: 3,
            name: "邓昌立",
            title: "OD",
            pic: "/images/team/team3.jpg",
            desc: "网名亿书-小邓，26岁，个性谦逊稳重，责任心和执行力强，全面负责亿书运营工作。比特币、区块链忠实粉丝，比特币最早一批的使用者和传播者，币圈十分活跃的投资者，对区块链产品有自己独特的视角，看重有实力、爱干事的研发团队，是最早加入亿书核心团队的成员之一，目前全职处理亿书运营管理工作。"
        },
        {
            id: 4,
            name: "赖双青",
            title: "Front End",
            pic: "/images/team/team4.jpg",
            desc: "网名 Evanlai，26岁，曾就职于世界500强企业，对前端设计极度钟爱，辞职自学网络研发技术，全面负责亿书前端研发和设计。机械工程设计专业，多年工作经验，爱好区块链技术，精通Ember.js，熟悉Anguler.js、react等前端框架技术，对前端设计有自己独到的理解，现全职做亿书官网、客户端、移动端等前端开发方面的工作。"
        },
        {
            id: 5,
            name: "Zmf",
            title: "Developer",
            pic: "/images/team/team.jpg",
            desc: "32岁，硕士研究生，密码学专家，负责亿书底层协议研发，专注于加密算法优化设计和国产化工作。曾就职于一家知名集成电路龙头企业，多年密码算法信息安全方面的工作经验，对区块链加密算法等方面具有得天独厚的优势，在研究区块链算法的同时，也为亿书在算法方面的精进做出了突出贡献。"
        },
        {
            id: 6,
            name: "刘毅明",
            title: "Developer",
            pic: "/images/team/team6.jpg",
            desc: "网名cob，男，40岁，硕士研究生，自控专业，15+年的软件开发和管理经验，长期从事交通信息化、智能交通系统方面的工作及研究，长期带领团队从事相关行业信息化系统的软件研发与运营管理。思维活跃、喜欢做一些富有挑战性的工作。关注区块链及相关分布式系统的技术发展，倡导将区块链技术与传统行业相结合的发展方向，使之相互协同、相互融合、相互促进。精通VC++语言，擅长DELPHI、C#、nodejs，擅长软硬件控制编程。"
        },
        {
            id: 7,
            name: "张国强",
            title: "Developer",
            pic: "/images/team/team7.jpg",
            desc: "网名火鼎，30岁，MBA硕士，多专多能，全面负责亿书底层协议的重构和研发。多次自主创业经历，集研发和管理于一身，是亿书重点关注和培养的后起之秀。在iOS移动应用和ReactNaitve应用开发方面经验丰富，带领团队研发完成过多款备受用户喜爱的移动App产品，目前全职做亿书代码重构等方面的工作。"
        },
        {
            id: 8,
            name: "朱树举",
            title: "OD",
            pic: "/images/team/team8.jpg",
            desc: "网名Tree，35岁，兼职做亿书运营和推广工作。比特币早期投资爱好者，13年中旬进入币圈，曾创立和参与过多个区块链项目，多年的股票股权投资经验，现作为比特币区块链天使投资人，已深耕布局区块链产业链。"
        },
        {
            id: 9,
            name: "李超",
            title: "Developer",
            pic: "/images/team/team9.jpg",
            desc: "李超，26岁，北京。Nodejs玩家，区块链的爱好者，翻转式学习信徒，一只对产品设计与新媒体运营都兴趣十足的程序猿，现从事NodeJs开发。期望在亿书中将区块链的知识分享给所有感兴趣的伙伴们，一起打造信用社会。"
        },
        {
            id: 10,
            name: "一",
            title: "OD",
            pic: "/images/team/team.jpg",
            desc: "29岁，在兼职做亿书运营和推广工作。就职于一家世界500强企业，从事非金属材料类的研发，并是该行业三项发明专利的拥有者。2013年进入区块链行业，他所创办的币视界也是币圈少有的集咨询、ico、分析为一体的综合网站，在区块链的投资方面具有独到的见解。"
        }
    ]
});

export default Teamsection;