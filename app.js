// app.js
App({
    /**
     * 生命周期函数--监听页面加载
     */
    onLaunch() {
        wx.cloud.init({
            env: 'cloud1-2geokqms81caf489' // 云开发id
        })
    },

    globalData: {
        userInfo: null,
    }
})