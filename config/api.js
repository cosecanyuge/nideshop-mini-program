const njmudostore2 = 'http://127.0.0.1:8360/api/';

module.exports = {
  IndexUrl: njmudostore2 + 'index/index', //首页数据接口
  CatalogList: njmudostore2 + 'catalog/index',  //分类目录全部分类数据接口
  CatalogCurrent: njmudostore2 + 'catalog/current',  //分类目录当前分类数据接口

  AuthLoginByWeixin: njmudostore2 + 'auth/loginByWeixin', //微信登录

  GoodsCount: njmudostore2 + 'goods/count',  //统计商品总数
  GoodsList: njmudostore2 + 'goods/list',  //获得商品列表
  GoodsCategory: njmudostore2 + 'goods/category',  //获得分类数据
  GoodsDetail: njmudostore2 + 'goods/detail',  //获得商品的详情
  GoodsNew: njmudostore2 + 'goods/new',  //新品
  GoodsHot: njmudostore2 + 'goods/hot',  //热门
  GoodsRelated: njmudostore2 + 'goods/related',  //商品详情页的关联商品（大家都在看）

  BrandList: njmudostore2 + 'brand/list',  //品牌列表
  BrandDetail: njmudostore2 + 'brand/detail',  //品牌详情

  CartList: njmudostore2 + 'cart/index', //获取购物车的数据
  CartAdd: njmudostore2 + 'cart/add', // 添加商品到购物车
  CartUpdate: njmudostore2 + 'cart/update', // 更新购物车的商品
  CartDelete: njmudostore2 + 'cart/delete', // 删除购物车的商品
  CartChecked: njmudostore2 + 'cart/checked', // 选择或取消选择商品
  CartGoodsCount: njmudostore2 + 'cart/goodscount', // 获取购物车商品件数
  CartCheckout: njmudostore2 + 'cart/checkout', // 下单前信息确认

  OrderSubmit: njmudostore2 + 'order/submit', // 提交订单
  PayPrepayId: njmudostore2 + 'pay/prepay', //获取微信统一下单prepay_id

  CollectList: njmudostore2 + 'collect/list',  //收藏列表
  CollectAddOrDelete: njmudostore2 + 'collect/addordelete',  //添加或取消收藏

  CommentList: njmudostore2 + 'comment/list',  //评论列表
  CommentCount: njmudostore2 + 'comment/count',  //评论总数
  CommentPost: njmudostore2 + 'comment/post',   //发表评论

  TopicList: njmudostore2 + 'topic/list',  //专题列表
  TopicDetail: njmudostore2 + 'topic/detail',  //专题详情
  TopicRelated: njmudostore2 + 'topic/related',  //相关专题

  SearchIndex: njmudostore2 + 'search/index',  //搜索页面数据
  SearchResult: njmudostore2 + 'search/result',  //搜索数据
  SearchHelper: njmudostore2 + 'search/helper',  //搜索帮助
  SearchClearHistory: njmudostore2 + 'search/clearhistory',  //搜索帮助

  AddressList: njmudostore2 + 'address/list',  //收货地址列表
  AddressDetail: njmudostore2 + 'address/detail',  //收货地址详情
  AddressSave: njmudostore2 + 'address/save',  //保存收货地址
  AddressDelete: njmudostore2 + 'address/delete',  //保存收货地址

  RegionList: njmudostore2 + 'region/list',  //获取区域列表

  OrderList: njmudostore2 + 'order/list',  //订单列表
  OrderDetail: njmudostore2 + 'order/detail',  //订单详情
  OrderCancel: njmudostore2 + 'order/cancel',  //取消订单
  OrderExpress: njmudostore2 + 'order/express', //物流详情

  FootprintList: njmudostore2 + 'footprint/list',  //足迹列表
  FootprintDelete: njmudostore2 + 'footprint/delete',  //删除足迹
};
