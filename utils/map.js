/* utils/map.js */
// 地图相关
module.exports = {
  // 地图部分参数

  // 腾讯位置服务API
  mapKey: "NYNBZ-DPKWQ-ICZ5G-4NIIB-KNX67-CYFVJ",

  // 学校精确坐标（用于地图定位和获取天气数据）
  longitude: '121.445000',
  latitude: '38.85100',

  // 是否展示 POI 点
  enablepoi: true,
  // 是否显示带有方向的当前定位点
  showLocation: true,
  // 缩放级别
  scale: 15.7,
  // 最小缩放级别，比缩放级别小0.1-0.2为宜
  minscale: 14,

  // 自定义图层
  groundoverlay: {
    // 图层透明度 0-1
    opacity: 0.8,
    // 西南角38.843673,121.441661
    southwest_latitude: 38.843673,
    southwest_longitude: 121.441661,
    // 东北角38.853593,121.44911
    northeast_latitude: 38.853593,
    northeast_longitude: 121.44911,
  },

  // 地图边界
  boundary: {
    // 西南角38.644544,120.982284
    southwest_latitude: 38.644544,
    southwest_longitude: 120.982284,
    // 东北角39.290357,122.267619
    northeast_latitude: 39.290357,
    northeast_longitude: 122.267619,
  },

  // 学校边界
  school_boundary: {
    // 东（学校最东端的 经度）38.850545,121.448609
    east: 121.448609,
    // east: 121.98181,
    // 西（学校最东端的 经度）38.845649,121.442124
    west: 38.845649,
    // 南（学校最东端的 纬度）38.843707,121.444096
    south: 38.843707,
    // 北（学校最东端的 纬度）38.853567,121.446703
    north: 38.853567,
    // north: 32.38475,
  },

  // 默认地点38.85104,121.444316
  default_point: {
    name: "西北门",
    aliases: "学校正大门",
    img: "https://cdnjson.com/images/2023/02/26/schoolgate_dongmen.jpg",
    desc: "学校正大门\n可以通行行人和车辆",
    latitude: '38.85104',
    longitude: '121.444316',
  },

}