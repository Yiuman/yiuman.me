---
layout: post
title: '微信公众号开发'
subtitle: '网页授权、JSSDK授权'
date: 2020-03-02
categories: 技术
cover: '/images/wechat_dev/1000.jpeg'
tags: 微信公众号 微信
---



## 写在开头

> 断断续续的做公众号开发，每次重新拾起都要疯狂尝试（属鱼记不住），而且微信相关的开发都有各种限制，神烦。So在此记录下开发过程，免得以后又重来一波



## 网页授权

- 本地开发只能用测试号才能跳转授权链接重定向获取授权码code
- 想要调试线上的相关授权必须在公众号绑定开发者
- 线上公众号无法配置本地服务作为授权服务，若一定要这样，一定具备域名映射或内网穿透，将本地变成公网服务
- 测试号开用127.0.0.1作为授权的域名，服务端口一定要是80

### 步骤：

1. 在微信公众号请求用户网页授权之前，开发者需要先到公众平台官网中的“开发 - 接口权限 - 网页服务 - 网页帐号 - 网页授权获取用户基本信息”的配置选项中，修改授权回调域名（**本地开发一般设置为127.0.0.1**）

2. 发起授权回调

   ```javascript
   const appId = "公众号APPID";//此APPID可以在前端写死，也可以通过后台接口获取
   const redirectUri = "回调的uri，如127.0.0.1/index.html";
   const scope = "snsapi_base";
   
   window.location.replace(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}#wechat_redirect`)
   ```

   发起授权回调后，重定向到rediretUri会带上**code**与state参数，参数**code**就是授权码，通过此授权码可以获取到网页授权的access_token，有了access_token就可以获取用户的相关信息了。参数state不需关注

   **网页授权的两种scope的区别**

   - 以**snsapi_base**为scope发起的网页授权，是用来获取进入页面的用户的openid的，并且是静默授权并自动跳转到回调页的。用户感知的就是直接进入了回调页
   - 以**snsapi_userinfo**为scope发起的网页授权，是用来获取用户的基本信息的。但这种授权需要用户手动同意，并且由于用户同意过，所以无须关注，就可在授权后获取该用户的基本信息

   若用户关注了公众号，就算是静默授权也可以获取到用户信息

3. 取到授权码后，可以带着授权码请求后台，后台使用此授权码获取微信网页授权access_token，进行调用微信相关接口获取信息。

!!!授权回调的APPID一定要与后台的APPID对应上



## JSSDK授权

- 本地开发绑定JS接口安全域名，**127.0.0.1**
- 普通的H5可以直接下载微信公众平台中提供的JS进行引入到页面使用，http://res.wx.qq.com/open/js/jweixin-1.6.0.js，若使用npm  使用weixin-jsapi  `npm install weixin-jsapi -S `

### 步骤：

1. 带上需要使用JSSDK的url请求公众号后台，如后台签名验证的地址为/api/jssdk/signature，则`/api/jssdk/signature?url=encodeURI(window.location.href.split('#')[0])`，此url为后台进行签名验证的成分

2. 后台请求微信服务`https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi`获取JSSDK的TICKET(使用票据，**有效期7200秒，开发者必须在自己的服务全局缓存jsapi_ticket**)

3. 根据获取到的ticket与noncestr（随机字符串）、timestamp（时间戳）、url（当前网页的URL，不包含#及其后面部分）进行拼接再而使用sha1加密，**签名规则**：对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）后，使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串string1，然后对string1进行签名。如`jsapi_ticket=sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VM0P37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg&noncestr=Wm3WZYTPz0wzccnW&timestamp=1414587457&url=http://mp.weixin.qq.com?params=value`

4. 后台将相关参数返回给前台，前台使用，wx.config进行配置

   ```js
   wx.config({
     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
     appId: '', // 必填，公众号的唯一标识
     timestamp: '', // 必填，生成签名的时间戳
     nonceStr: '', // 必填，生成签名的随机串
     signature: '',// 必填，签名
     jsApiList: [] // 必填，需要使用的JS接口列表
   });
   ```

   !!!**signature**一定要小写处理！**signature**一定要小写处理！**signature**一定要小写处理！!!!









