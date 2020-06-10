(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(s,a,n){s.exports=n.p+"assets/img/server_hi.f603b11e.png"},366:function(s,a,n){s.exports=n.p+"assets/img/anquanzu.627d8e7a.png"},437:function(s,a,n){"use strict";n.r(a);var e=n(42),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"搭建node-js生产环境"}},[s._v("搭建Node.js生产环境")]),s._v(" "),e("p",[s._v("前面的章节中，我们聊到过"),e("a",{attrs:{href:"https://github.com/liuxing/node-blog/blob/master/docs/1.1Node.js%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE.md#%E4%BD%BF%E7%94%A8-nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nvm的使用"),e("OutboundLink")],1),s._v(" ，在服务器上将使用它来管理不同版本的node以适应不同项目的需要*(如果你没这个需要直接安装特定版本的Node也是没问题的)*。")]),s._v(" "),e("p",[s._v("使用curl 或者 wget 安装")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("执行完这个脚本后，输入 "),e("code",[s._v("nvm")]),s._v(" 并不能使用。需要在新的终端打开才能开始使用*(重新连接服务器)*，现在输入"),e("code",[s._v("nvm")]),s._v("就可以看到nvm的提示信息。我们使用最新的长期支持版现在为Carbon 8.11.3")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ nvm "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lts/carbon\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装完毕后，输入"),e("code",[s._v("node -v")]),s._v(" 就可以查看node版本。当然你还可以下载其他版本的node，比如下载最新稳定版的 node")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ nvm "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" node\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后使用"),e("code",[s._v("nvm use xx")]),s._v("  来指定版本，使用"),e("code",[s._v("nvm alias default xx")]),s._v("来指定默认版本。")]),s._v(" "),e("p",[s._v("在安装搭建本地环境的时候就说过由于GFW的原因，国内访问npm会很慢，"),e("a",{attrs:{href:"https://github.com/liuxing/node-blog/blob/master/docs/1.1Node.js%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE.md#%E4%B8%80%E4%BA%9B%E6%9C%89%E7%94%A8%E7%9A%84%E5%B7%A5%E5%85%B7",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何解决前面聊过"),e("OutboundLink")],1),s._v("，这儿就不再讲了，如果你用的国外的主机就不用管npm的网络问题了。")]),s._v(" "),e("h2",{attrs:{id:"使用pm2"}},[s._v("使用pm2")]),s._v(" "),e("p",[s._v("当项目要跑在服务器上时，不能单单依靠"),e("code",[s._v("node index.js")]),s._v(" 来启动，我们需要强大一点的进程管理工具来部署应用，"),e("a",{attrs:{href:"https://www.npmjs.com/package/pm2",target:"_blank",rel:"noopener noreferrer"}},[s._v("pm2"),e("OutboundLink")],1),s._v("无疑是最主流的选择")]),s._v(" "),e("p",[s._v("安装pm2")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g pm2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("现在再在服务器上来个hello，在用户根目录下新建一个app.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const http = require('http')\n\nconst port = 8080\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200\n  res.setHeader('Content-Type', 'text/plain')\n  res.end('你好，JavaScript之禅的朋友\\n')\n})\n\nserver.listen(port, () => {\n  console.log(`服务器运行在 http://127.0.0.1:${port}/`)\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[e("code",[s._v("node app.js")]),s._v("将它跑起来，这下在浏览器输入ip:端口 就可以访问到这个应用了。")]),s._v(" "),e("p",[e("img",{attrs:{src:n(365),alt:"server_hi"}})]),s._v(" "),e("p",[s._v("如果你用的阿里云，它有安全组设置，需要配置一下，将端口开放。")]),s._v(" "),e("p",[e("img",{attrs:{src:n(366),alt:"img"}})]),s._v(" "),e("p",[s._v("现在出现一个问题，退出或是关闭连接时，这个应用也会停掉。机智的你应该已经想到了使用"),e("code",[s._v("nohup")]),s._v("命令了吧")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" node app.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如何关闭")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先通过端口查看对应的pid")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:8080\nCOMMAND  PID    "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("   FD   TYPE DEVICE SIZE/OFF NODE NAME\nnode    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1839")]),s._v(" manager   10u  IPv4  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("19519")]),s._v("      0t0  TCP *:http-alt "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill对应的pid")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1839")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("如果直接用这个能满足我们，那还上面的pm2不就白介绍了。")]),s._v(" "),e("p",[s._v("使用pm2 来做这些工作很方便，同时很强大，方便查看node进程的状态，也支持性能监控，进程守护，负载均衡等功能")]),s._v(" "),e("p",[e("strong",[s._v("启动应用")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ pm2 start app.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("重启")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("pm2 restart app.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("结束应用")])]),s._v(" "),e("p",[s._v("可以先通过"),e("code",[s._v("pm2 list")]),s._v("获取应用的名字（--name指定的）或者进程id。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ pm2 stop app_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app_id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("列出所有pm2启动的进程")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ pm2 list\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);