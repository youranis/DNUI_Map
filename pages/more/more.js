// pages/mypage/mypage.js
var media = require('../../utils/media');
var utils = require('../../utils/utils');
Page({
    data: {
        miniprogram_name: utils.miniprogram_name,

        avatarUrl: media.avatarUrl,

        green_arrow: media.green_arrow,

        statement: media.statement,
        note: media.note,

        users: media.users,
        contact: media.contact,

        support: media.support,
        sponsor: media.sponsor,

        chat: media.chat,
        feedback: media.feedback,

        share: media.share,
        miniprogramming_ma: utils.miniprogramming_ma,

        admin: media.admin
    },

    onLoad: function () {},

    // 用户点击右上角分享
    onShareAppMessage() {},

    // 用户点击右上角分享到朋友圈
    onShareTimeline: function (res) {},

    // 软件声明
    tostatement() {
        wx.navigateTo({
            url: '../../pages/more/statement/statement',
        })
    },
    // 特别说明
    aboutus() {
        wx.showModal({
            title: '特别说明',
            content: '本项目同时应用于2023年中国大学生计算机设计大赛，未经允许，不得随意用于各类比赛项目\n\n作品名：云上高校导航\n作品编号：2023042719\n奖项：广西赛区 软件应用与开发 - 移动应用开发（非游戏类） 三等奖',
        })
    },
    // 联系作者
    contact() {
        wx.showModal({
            title: '联系作者',
            content: '如果遇到什么问题\n请点击确认与我联系',
            success: (res => {
                if (res.confirm == true) {
                    wx.previewImage({
                        current: this.data.contact, // 当前显示图片的http链接
                        urls: [this.data.contact] // 需要预览的图片http链接列表
                    })
                }
            }),
            fail(res) {
                console.log('fail')
            }
        })
    },
    // 给点赞助
    sponsor() {
        wx.showModal({
            title: '给点赞助',
            content: '如果你觉得小程序不错\n可以支持一下开发者',
            success: (res => {
                if (res.confirm == true) {
                    wx.previewImage({
                        current: this.data.sponsor,
                        urls: [this.data.sponsor]
                    })
                }
            }),
            fail(res) {
                console.log('fail')
            }
        })
    },

    // 分享
    share() {
        wx.showModal({
            title: '推荐给好友',
            content: '点击确认即可查看小程序码\n长按小程序码即可转发给好友',
            success: (res => {
                if (res.confirm == true) {
                    wx.previewImage({
                        current: this.data.miniprogramming_ma, // 当前显示图片的http链接
                        urls: [this.data.miniprogramming_ma] // 需要预览的图片http链接列表
                    })
                }
            }),
            fail(res) {
                console.log('fail')
            }
        })
    },

    // 管理界面
    toadmin() {
        wx.cloud.callFunction({
            name: 'login',
            complete: res => {
                // console.log(res.result.data[0].name)
                // console.log(res.result.data.length)
                var name = res.result.data[0].name
                
                if (res.result.data.length != 0) {
                    wx.showToast({
                        title: '欢迎回来\n管理员：' + name,
                        icon: 'none',
                        duration: 1500
                    })
                    setTimeout(() => {
                        wx.navigateTo({
                            url: '../../pages/admin/admin',
                        })
                    }, 1500)
                } else {
                    wx.showToast({
                        title: '抱歉，同志\n您还不是管理员哦',
                        icon: 'none',
                        duration: 1500
                    })
                }
            }
        })
    },

    // 获取openid
    getopenid() {
        wx.cloud.callFunction({
            name: 'get_openid',
            complete: res => {
                console.log("微信用户openid", res.result.openid)
                let openid = res.result.openid
                wx.showModal({
                    title: '您的openid',
                    content: openid,
                    confirmText: '点击复制',
                    complete: (res) => {
                        if (res.confirm) {
                            wx.setClipboardData({
                                data: openid,
                                success(res) {
                                    wx.getClipboardData({
                                        success(res) {
                                            console.log(res.data) // data
                                        }
                                    })
                                }
                            })
                        }
                    }
                })
            }
        })
    }
})