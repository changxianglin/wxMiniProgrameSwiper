Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    showSwiper: false,
    current: 1,
    swiperData: [
      {
        id: 1,
        src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586630383035&di=21c3ebdee2034abf27e7d948cb908f19&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181003%2F0f8307fe3de6468d8b51c53b276e9e1b.jpeg"
      },
      {
        id: 2,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586630354988&di=c1feb6777867eb923dcb4795d224410a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F27%2F20160827172726_GJfX2.jpeg'
      },
      {
        id: 3,
        src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3810198534,2516601975&fm=26&gp=0.jpg'
      },
      {
        id: 4,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586631471797&di=6b9f4fec39ee2d301edbc1ee1c0d6e69&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170430%2F30a065cf0c5e4cd380db947ccb59142b_th.jpg'
      },
      {
        id: 5,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586631490367&di=2717b2c0f3641ddbf581afed2208e5c8&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F59ba2f1f9e0fa.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  handleClick: function() {
    console.log('click')
    this.setData({
      showSwiper: true
    })
  },
  clickBig: function() {
    console.log('close')
    this.setData({
      showSwiper: false
    })
  },
  changItem: function(e) {
    // console.log(e)
    const current = e.detail.current
    this.setData({
      current: current + 1,
    })
  }
})