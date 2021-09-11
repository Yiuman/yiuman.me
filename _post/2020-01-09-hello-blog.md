---
layout: post
title: '噔噔蹬蹬,终于搭了自己的博客'
subtitle: '起点'
date: 2020-01-09
categories: 技术
cover: '/images/hello/index.gif'
tags: jekyll blog
---

一直都想整一个自己的BLOG，记录下自己的一些在开发路上的一些点滴，可每次想弄的时候就会来一波新项目（主要是懒~~）,希望自己往后能坚持下去。下面分享下建博客的过程



此站是通过jekyll+GithubPages搭建的.

### [Jekyll](https://www.jekyll.com.cn/)

> Jekyll 是一个静态网站生成器。用你喜欢的 标记语言（如：markdown）书写内容并交给 Jekyll 处理，它将利用模板为你创建一个静态网站。你可以 调整你想要的网址样式、在网站上显示哪些数据 等等

- **环境搭建**

  支持macOs,Linux,Windows,各系统的环境安装方式请戳< [传送门](https://www.jekyll.com.cn/docs/installation/)>

- **目录结构**

  ```tex
  .
  ├── _config.yml #配置文件
  ├── _data
  |   └── members.yml  
  ├── _drafts  #草稿、是未发布的文章
  |   ├── begin-with-the-crazy-ideas.md
  |   └── on-simplicity-in-technology.md
  ├── _includes #局部可重用html模板，可在别的页面引用 
  |   ├── footer.html
  |   └── header.html
  ├── _layouts #布局模板
  |   ├── default.html
  |   └── post.html
  ├── _posts #文章
  |   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
  |   └── 2009-04-26-barcamp-boston-4-roundup.md
  ├── _sass #样式
  |   ├── _base.scss
  |   └── _layout.scss
  ├── _site #Jekyll将源码处理后生成的站点文件，里面的内容可直接发布
  ├── .jekyll-metadata
  └── index.html # 也可以是带 front matter 的 'index.md' 文件
  ```

根据官网指南编写项目后，建一个github仓库存放这个项目，配置一下githubPages就可以使用了。然后之后需要发布文章的时候，直接在post里面写好自己push到仓库就会自动生成对应页面了。



### [GithubPages](https://pages.github.com/)

> Hosted directly from your Github repository. Just edit,push,and your changes are live.
>
> 你的站点直接由github仓库进行托管，只需修改、推送，你的变更内容便会生效

1. 选择你的仓库，点击setting.

   ![rep_setting](../images/hello/rep_setting.png)

2. 拉到网页最下面，选择分支

   ![publishing-source-drop-down](../images/hello/publishing-source-drop-down.png)

3. 重命名项目

   ![repo_rename](../images/hello/repo_rename.png)

4. 至此你的GithuaPages边成功发布了，点击仓库的Settings，找到GitHub Pages一项遍可以看到以下内容

![repo_ghp](../images/hello/repo_ghp.png)

5. 可以通过域名访问你对自己的站点了,如我的https://yiuman.github.io/



### TIPS

​     若果你自己不会写前端，又或者说你懒得写，你可以上jekyll的主题网去挑选别人已经分享出来的一些主题来使用<[传送门](http://jekyllthemes.org/)>，也可以直接在github里面进行搜索找到你想要的主题，然后clone下来或者fork到自己的仓库中进行修改。

