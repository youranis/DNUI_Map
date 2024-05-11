/* utils/school.js */
// 学校相关
module.exports = {
  // 学校官方小程序AppID
  AppID: "wx0a954435bd49aca4",

  // 学校信息
  school_information: {
    // 学校全称
    school_name_full: "大连东软信息学院学院",
    // 学校英文名
    school_name_English_full: "Dalian Neusoft University of Information",
    // 校规校训
    motto: "精勤博学 学以致用",
    // 学校荣誉
    honor: "辽宁省教育系统雷锋式学校",
    // 建校时间
    build_time: 2000,
    // 办校类型
    school_type: "民办",
    // 院校类型
    institution_type: "综合类",
    // 学校所在地
    location: "辽宁.大连",
    // 学校简介
    text: "大连东软信息学院（Dalian Neusoft University of Information）是经国家教育部批准设立，由东软出资举办的一所以工学为主，工学、管理学、艺术学、文学、医学等学科的民办普通高等院校，是CDIO工程教育联盟成员单位。2000年经辽宁省教育厅批准，成立大连东方信息技术研修学院并成为东北大学网络教育学院大连分院，2001年转制为大连东软信息技术职业学院，2004年成为东北大学东软信息学院，2008年转设为独立设置的民办本科院校大连东软信息学院，2023年5月学校举办者变更为“大连东软软件园产业发展有限公司、大连东软控股有限公司”。",
  },

  // 校园指南
  shool_guide: [{
      title: '东软校园导航',
      content: '因现有资料较少等原因，本小程序可能会存在许多问题，请以实际情况为准。',
      imageList: ['https://scfile.neusoft.edu.cn/uploadfile/image/20230904144212596.jpg'],
      keywords: ['介绍'],
    }, {
      title: '作息时间表',
      content: '仅供参考，以实时文件为准',
      imageList: ['https://scfile.neusoft.edu.cn/2021/0420/1618886831138.png'],
      keywords: ['上课时间表'],
    }, {
      title: '图书馆阅览室',
      content: '学校图书馆由软件园校区图书馆及博川分馆组成。采用“藏、借、阅”一体化的管理模式，实行全开架服务，室内宽敞明亮，桌椅舒适美观。阅览室内所有座位均配有网络接口和电源,图书馆内设多功能学术报告厅，配备高档次音响等设备，可举办各种学术会议、报告等。',
      imageList: ['https://scfile.neusoft.edu.cn/2021/1025/1635142104994.jpg'],
      keywords: [],
    },
    {
      title: '快递',
      content: '营业时间：8:00 - 20.00 \n软件园校区三期生活园区邮寄地址：辽宁省大连市高新技术产业园区（甘井子区）凌水街道大连东软信息学院三期生活园区派物流代收。\n\n软件园校区二期生活园区邮寄地址：辽宁省大连市高新技术产业园区（沙河口区）黑石礁街道大连东软信息学院二期公寓快递房代收。\n\n软件园校区教学区邮寄地址：辽宁省大连市高新技术产业园区（甘井子区）软件园路8号大连东软信息学院 B2菜鸟驿站代收。\n\n博川校区邮寄地址：辽宁省大连市高新技术产业园区（旅顺口区）龙王塘街道博川路8号大连东软信息学院博川校区 中邮快递菜鸟驿站代收。',
      imageList: ['https://cdnjson.com/images/2024/02/19/express7984a70fc3d279c5.png'],
      keywords: ['菜鸟驿站'],
    },
    {
      title: '教务处',
      content: '地址：博川校区 E9楼\n服务时间：周一至周五（法定节假日除外）\n上午8:30 - 11:30\n下午14:30 - 16:30\n\n食堂3楼有打印店，可以复印文件，价格优惠。',
      imageList: [],
      keywords: ['行政'],
    },
    {
      title: '美食',
      content: '分校内和校外\n校内博川校区主要是食堂，软件园校区食堂多但是味道不如博川\n\n美食后街\n美事街位于软件园，小吃众多。',
      imageList: ['https://cdnjson.com/images/2024/02/19/food5841dcc2fdf0b01e.jpg'],
      keywords: [],
    },
    {
      title: '交通出行',
      content: '①黄泥川地铁站\n可前往市区），非常便利，不过比较拥挤。\n\n②2002号班车\n可前往各站，然后可以转乘地铁.支持现金、nfc票价4元左右。\n\n③打车\n价格高，优点是方便，快捷，建议非必要不打车',
      imageList: ['https://cdnjson.com/images/2024/02/19/busstation767a09d4b027eca8.png'],
      keywords: [],
    },
    {
      title: '警务与保卫',
      content: '\n校门口保安亭（可寻求帮助）',
      imageList: ['https://img3.redocn.com/20120627/Redocn_2012062708071244.jpg.285.jpg'],
      keywords: ['保卫处', '保安'],
    },
    {
      title: '就医',
      content: '\n地点：位于体育馆二楼 卫生所\n门诊时间：上午8点到12点，下午2点到5点\n需要转诊和报销请询问医生。',
      imageList: ['https://img.51miz.com/Element/00/36/25/45/518ba35f_E362545_f569a5c1.png'],
      keywords: ['医院医生看病', '医务室'],
    },
    {
      title: '门禁',
      content: '早六点，晚十点半',
      imageList: [],
      keywords: ['关门时间'],
    },
    {
      title: '宿舍供暖',
      content: '有供暖，但无空调。\n不可自行安装空调。',
      imageList: [],
      keywords: ['暖气'],
    },
    {
      title: '用电规则',
      content: '电费一个月50度免费，使用超标后会自动停电，需要去平台缴费。',
      imageList: ['https://img.ixintu.com/download/jpg/202001/3012d2df741a45e256bb2300f909a468.jpg'],
      keywords: ['用电'],
    },
    {
      title: '洗澡用水',
      content: '仅支持澡堂洗澡一次收费7元。',
      imageList: ['https://cdnjson.com/images/2024/02/26/showerad28421408a41f04.png'],
      keywords: ['淋浴'],
    },
    {
      title: '饮用水',
      content: '宿舍楼各层均配备有饮水机。\n需要购买水卡并充值。',
      imageList: ['https://cdnjson.com/images/2024/02/26/Water_dispensereffee25621ed10b9.png'],
      keywords: [],
    },
    {
      title: '自动售货机',
      content: '宿舍楼和教学楼均配备有自动售货机，扫码支付即可购买商品。',
      imageList: ['https://cdnjson.com/images/2024/02/26/Vending_Machine60fd713c293f5e70.png'],
      keywords: [],
    },
    {
      title: '报修',
      content: '①教室报修：\n电话：拨打教室讲台上的指定报修电话。\n\n②宿舍报修：\n登记：前往各宿舍楼值班室登记报修。',
      imageList: ['https://cdnjson.com/images/2024/02/26/repairc22c2a9ad8eea3f5.png'],
      keywords: ['修理'],
    },
  ]
}