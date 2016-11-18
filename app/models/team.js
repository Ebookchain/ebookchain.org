import DS from 'ember-data';
import Ember from 'ember';

var Team = DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  pic: DS.attr('string'),
  desc: DS.attr('string'),
  id_odd: Ember.computed.match('id', /^\d*[13579]\b$/),
});

Team.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "朱志文",
      title: "CEO&Founder",
      pic: "/images/team/team1.jpg",
      desc: "网名imfly，CSDN区块链知识库特邀编辑，Ubuntu代码核心贡献者，Ubuntu忠实粉丝。中国区块链俱乐部主创者和发起人，中国区块链技术社区的代表人物，区块链技术的布道者，《Nodejs开发加密货币》作者。"
    },
    {
      id: 2,
      name: "桑世龙",
      title: "CTO",
      pic: "/images/team/team2.jpg",
      desc: "网名i5ting，曾就职于国信灵通（网秦子公司）新浪和财新传媒，Manager、全栈工程师（Web, iOS），StuQ 明星讲师，开源项目 Moajs 作者，Node.js 技术布道者，其开发的第一套广电行业数据分析与科学决策系统，获广电总局2010科技创新奖1等奖。"
    },
    {
      id: 3,
      name: "张国强",
      title: "Developer",
      pic: "/images/team/team3.jpg",
      desc: "网名火鼎，硕士，多年软件开发经验，在iOS移动应用和ReactNaitve应用开发方面都有一定的建树，目前全职做亿书代码重构等方面的工作。"
    },
    {
      id: 4,
      name: "邓昌立",
      title: "OD",
      pic: "/images/team/team4.jpg",
      desc: "网名亿书-小邓，比特币、区块链忠实粉丝，比特币最早一批的使用者和传播者，币圈十分活跃的投资者，目前全职做亿书运营方面的工作。"
    },
    {
      id: 5,
      name: "赖双青",
      title: "Front End",
      pic: "/images/team/team5.jpg",
      desc: "网名，Evanlai，曾就职于世界500强从事机械结构研发，工作之时就开始花大量的时间研究网站、游戏设计，16年辞职在家系统学习网页设计，目前在前端编程方面已经灵活应用。半年前开始研究区块链技术方面的，也有了不错的进展，现全职为亿书做前端开发等方面的工作。"
    },
    {
      id: 6,
      name: "Zmf",
      title: "",
      pic: "/images/team/team.jpg",
      desc: "32岁，上海，密码学专业，目前依然从事密码算法信息安全类的工作，就职于一家国内集成电路龙头企业。虽接触区块链的时间不长，但对区块链算法等方面具有得天独厚的优势，在研究区块链算法的同时，也为亿书在算法方面的精进做贡献。"
    },
    {
      id: 7,
      name: "一",
      title: "",
      pic: "/images/team/team.jpg",
      desc: "29岁，深圳，就职于一家世界500强企业，从事非金属材料类的研发，并是该行业三项发明专利的拥有者。币视界创始人，2013年开始进入币圈，他所创办的币视界也是币圈少有的集咨询、ico、分析为一体的综合网站，在区块链的投资方面具有独到的见解。"
    },
    {
      id: 8,
      name: "周",
      title: "",
      pic: "/images/team/team.jpg",
      desc: "36岁，河北保定，一直从事C++及视频相关的工作，在C++方面具有多年丰富的开发经验，对区块链技术方面都有比较深入的研究。"
    },
    {
      id: 9,
      name: "Elikong",
      title: "",
      pic: "/images/team/team.jpg",
      desc: "42岁，北京，在职研究生，虽为研究生但在c和c++开发方面已有16年开发经验，在 Android开发方面也有6年经验，浏览器相关软件开发也是有10年之久的开发经验。"
    },
    {
      id: 10,
      name: "Tree",
      title: "",
      pic: "/images/team/team.jpg",
      desc: "招币宝创始人，比特币区块链天使投资人。"
    }
  ]
});

export default Team;
