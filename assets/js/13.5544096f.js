(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{229:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("虽然 Nginx 已经提供 access 日志来查阅，但是不得不说很难看清，常规的正则过滤又显得较为麻烦。于是就找到了这么一款实时网络日志分析器 "),a("a",{attrs:{href:"https://github.com/allinurl/goaccess",target:"_blank",rel:"noopener noreferrer"}},[s._v("GoAccess"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("此处以 Ubuntu Server 18.04 为示例，官网说明了，如果直接安装可能安装到较为老的版本，需要"),a("a",{attrs:{href:"https://github.com/allinurl/goaccess#official-goaccess-debian--ubuntu-repository",target:"_blank",rel:"noopener noreferrer"}},[s._v("更新"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb https://deb.goaccess.io/ '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' main"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a /etc/apt/sources.list.d/goaccess.list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O - https://deb.goaccess.io/gnugpg.key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" goaccess\n\ngoaccess --version "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证 GoAccess - 1.3.")]),s._v("\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("h3",{attrs:{id:"_1-最简单的静态使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-最简单的静态使用"}},[s._v("#")]),s._v(" 1. 最简单的静态使用")]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("goaccess -f /var/log/nginx/access.log -o report.html --log-format=COMBINED")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("-f")]),s._v("：指定日志文件")]),s._v(" "),a("li",[a("code",[s._v("-o")]),s._v("：指定报表路径")]),s._v(" "),a("li",[a("code",[s._v("--log-format")]),s._v("：日志格式，不加则会报错")])]),s._v(" "),a("p",[s._v("这样就会生成一份 html 文件，可以利用 scp（推荐）、sz、rsync 下载该文件到本地后查看。")]),s._v(" "),a("h3",{attrs:{id:"_2-配合-nginx-实时更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配合-nginx-实时更新"}},[s._v("#")]),s._v(" 2. 配合 Nginx 实时更新")]),s._v(" "),a("p",[s._v("首先需要创建一个 Nginx 配置文件：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" default.conf access-log.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/www/html/report\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" access-log.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改以下内容，自定义 xxx")]),s._v("\nserver_name  xxx.shanyuhai.top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nlocation /report.html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" /var/www/html/report/report.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代理，限制访问")]),s._v("\n    allow xxx.xxx.xxx.xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    deny all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接着前往域名提供商添加 DNS 解析")]),s._v("\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("goaccess -f /var/log/nginx/access.log -o /var/www/html/report/report.html --log-format=COMBINED --real-time-html")])]),s._v(" "),a("p",[s._v("启动服务后会提示开启了一个 websocket，验证")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ll /var/www/html/report\n")])])]),a("p",[s._v("接着就可以在浏览器访问对应的地址了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);