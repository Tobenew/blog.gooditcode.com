(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{468:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端工程化"}},[t._v("前端工程化")]),t._v(" "),a("h2",{attrs:{id:"babel的原理是什么"}},[t._v("Babel的原理是什么?")]),t._v(" "),a("p",[t._v("babel 的转译过程也分为三个阶段，这三步具体是：")]),t._v(" "),a("ul",[a("li",[t._v("解析 Parse: 将代码解析生成抽象语法树( 即AST )，即词法分析与语法分析的过程")]),t._v(" "),a("li",[t._v("转换 Transform: 对于 AST 进行变换一系列的操作，babel 接受得到 AST 并通过 babel-traverse 对其进行遍历，在此过程中进行添加、更新及移除等操作")]),t._v(" "),a("li",[t._v("生成 Generate: 将变换后的 AST 再转换为 JS 代码, 使用到的模块是 babel-generator")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/566a1ac865cfc0b1bf5511f377ff6828.png",alt:"2019-08-03-23-32-34"}})]),t._v(" "),a("blockquote",[a("p",[t._v("更具体的原理可以移步"),a("RouterLink",{attrs:{to:"/offer/ast.html"}},[t._v("如何写一个babel")])],1)]),t._v(" "),a("h2",{attrs:{id:"如何写一个babel插件"}},[t._v("如何写一个babel插件?")]),t._v(" "),a("p",[a("strong",[t._v("Babel解析成AST，然后插件更改AST，最后由Babel输出代码")])]),t._v(" "),a("p",[t._v("那么Babel的插件模块需要你暴露一个function，function内返回visitor")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("babel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    visitor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("visitor是对各类型的AST节点做处理的地方，那么我们怎么知道Babel生成了的AST有哪些节点呢？"),a("br"),t._v("很简单，你可以把Babel转换的结果打印出来，或者这里有传送门: "),a("a",{attrs:{href:"https://astexplorer.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AST explorer"),a("OutboundLink")],1),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/128853/1564847220298-abb4a365-0d09-4e06-8903-2d267b8af354.jpeg#align=left&display=inline&height=956&originHeight=956&originWidth=947&size=0&status=done&width=947",alt:""}}),a("br"),t._v("这里我们看到 "),a("code",[t._v("const result = 1 + 2")]),t._v("中的"),a("code",[t._v("1 + 1")]),t._v("是一个"),a("code",[t._v("BinaryExpression")]),t._v("节点，那么在visitor中，我们就处理这个节点")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" babel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-types'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" visitor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BinaryExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断表达式两边，是否都是数字")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumericLiteral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumericLiteral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据不同的操作符作运算")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("operator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果上面的运算有结果的话")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把表达式节点替换成number字面量")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("numericLiteral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("babel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    visitor\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br")])]),a("p",[t._v("插件写好了，我们运行下插件试试")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('const babel = require("babel-core");\nconst result = babel.transform("const result = 1 + 2;",{\n  plugins:[\n    require("./index")\n  ]\n});\nconsole.log(result.code); // const result = 3;\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("与预期一致，那么转换 "),a("code",[t._v("const result = 1 + 2 + 3 + 4 + 5;")]),t._v("呢?"),a("br"),t._v("结果是: "),a("code",[t._v("const result = 3 + 3 + 4 + 5;")]),a("br"),t._v("这就奇怪了，为什么只计算了"),a("code",[t._v("1 + 2")]),t._v("之后，就没有继续往下运算了?"),a("br"),t._v("我们看一下这个表达式的AST树"),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/jpeg/128853/1564847220485-a7c07a30-c4d4-453e-8fd3-9c3092ed5d91.jpeg#align=left&display=inline&height=957&originHeight=957&originWidth=1020&size=0&status=done&width=1020",alt:""}}),a("br"),t._v("你会发现Babel解析成表达式里面再嵌套表达式。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("表达式( 表达式( 表达式( 表达式(1 + 2) + 3) + 4) + 5)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("而我们的判断条件并不符合所有的，只符合"),a("code",[t._v("1 + 2")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断表达式两边，是否都是数字")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumericLiteral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumericLiteral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("那么我们得改一改"),a("br"),t._v("第一次计算"),a("code",[t._v("1 + 2")]),t._v("之后，我们会得到这样的表达式")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("表达式( 表达式( 表达式(3 + 3) + 4) + 5)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("其中 "),a("code",[t._v("3 + 3")]),t._v("又符合了我们的条件， 我们通过向上递归的方式遍历父级节点"),a("br"),t._v("又转换成这样:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("表达式( 表达式(6 + 4) + 5)\n表达式(10 + 5)\n15\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果上面的运算有结果的话")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把表达式节点替换成number字面量")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("numericLiteral")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" parentPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向上遍历父级节点")]),t._v("\n      parentPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" visitor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BinaryExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parentPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("到这里，我们就得出了结果 "),a("code",[t._v("const result = 15;")]),a("br"),t._v("那么其他运算呢:"),a("br"),a("code",[t._v("const result = 100 + 10 - 50")]),t._v(" >>> "),a("code",[t._v("const result = 60;")]),a("br"),a("code",[t._v("const result = (100 / 2) + 50")]),t._v(" >>> "),a("code",[t._v("const result = 100;")]),a("br"),a("code",[t._v("const result = (((100 / 2) + 50 * 2) / 50) ** 2")]),t._v(" >>> "),a("code",[t._v("const result = 9;")])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/axetroy/babel-plugin-pre-calculate-number",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目地址"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("上述答案来源于cnode"),a("a",{attrs:{href:"https://cnodejs.org/topic/5a9317d38d6e16e56bb808d1",target:"_blank",rel:"noopener noreferrer"}},[t._v("帖子"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("更详实的教程移步"),a("a",{attrs:{href:"https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#builders",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方的插件教程"),a("OutboundLink")],1)])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"你的git工作流是怎样的"}},[t._v("你的git工作流是怎样的?")]),t._v(" "),a("p",[t._v("GitFlow 是由 Vincent Driessen 提出的一个 git操作流程标准。包含如下几个关键分支：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("master")]),t._v(" "),a("td",[t._v("主分支")])]),t._v(" "),a("tr",[a("td",[t._v("develop")]),t._v(" "),a("td",[t._v("主开发分支，包含确定即将发布的代码")])]),t._v(" "),a("tr",[a("td",[t._v("feature")]),t._v(" "),a("td",[t._v("新功能分支，一般一个新功能对应一个分支，对于功能的拆分需要比较合理，以避免一些后面不必要的代码冲突")])]),t._v(" "),a("tr",[a("td",[t._v("release")]),t._v(" "),a("td",[t._v("发布分支，发布时候用的分支，一般测试时候发现的 bug 在这个分支进行修复")])]),t._v(" "),a("tr",[a("td",[t._v("hotfix")]),t._v(" "),a("td",[t._v("hotfix 分支，紧急修 bug 的时候用")])])])]),t._v(" "),a("p",[t._v("GitFlow 的优势有如下几点：")]),t._v(" "),a("ul",[a("li",[t._v("并行开发：GitFlow 可以很方便的实现并行开发：每个新功能都会建立一个新的 "),a("code",[t._v("feature")]),t._v(" 分支，从而和已经完成的功能隔离开来，而且只有在新功能完成开发的情况下，其对应的 "),a("code",[t._v("feature")]),t._v(" 分支才会合并到主开发分支上（也就是我们经常说的 "),a("code",[t._v("develop")]),t._v(" 分支）。另外，如果你正在开发某个功能，同时又有一个新的功能需要开发，你只需要提交当前 "),a("code",[t._v("feature")]),t._v(" 的代码，然后创建另外一个 "),a("code",[t._v("feature")]),t._v(" 分支并完成新功能开发。然后再切回之前的 "),a("code",[t._v("feature")]),t._v(" 分支即可继续完成之前功能的开发。")]),t._v(" "),a("li",[t._v("协作开发：GitFlow 还支持多人协同开发，因为每个 "),a("code",[t._v("feature")]),t._v(" 分支上改动的代码都只是为了让某个新的 "),a("code",[t._v("feature")]),t._v(" 可以独立运行。同时我们也很容易知道每个人都在干啥。")]),t._v(" "),a("li",[t._v("发布阶段：当一个新 "),a("code",[t._v("feature")]),t._v(" 开发完成的时候，它会被合并到 "),a("code",[t._v("develop")]),t._v(" 分支，这个分支主要用来暂时保存那些还没有发布的内容，所以如果需要再开发新的 "),a("code",[t._v("feature")]),t._v("，我们只需要从 "),a("code",[t._v("develop")]),t._v(" 分支创建新分支，即可包含所有已经完成的 "),a("code",[t._v("feature")]),t._v(" 。")]),t._v(" "),a("li",[t._v("支持紧急修复：GitFlow 还包含了 "),a("code",[t._v("hotfix")]),t._v(" 分支。这种类型的分支是从某个已经发布的 tag 上创建出来并做一个紧急的修复，而且这个紧急修复只影响这个已经发布的 tag，而不会影响到你正在开发的新 "),a("code",[t._v("feature")]),t._v("。")])]),t._v(" "),a("p",[t._v("然后就是 GitFlow 最经典的几张流程图，一定要理解："),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/webp/128853/1564853230881-000559e1-bbcf-453e-b6a0-41b9a94e6937.webp#align=left&display=inline&height=715&originHeight=715&originWidth=483&size=0&status=done&width=483",alt:""}}),a("br"),a("code",[t._v("feature")]),t._v(" 分支都是从 "),a("code",[t._v("develop")]),t._v(" 分支创建，完成后再合并到 "),a("code",[t._v("develop")]),t._v(" 分支上，等待发布。"),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/webp/128853/1564853230910-0cefe6ee-ee05-4332-b02b-44c65428d81a.webp#align=left&display=inline&height=715&originHeight=715&originWidth=483&size=0&status=done&width=483",alt:""}}),a("br"),t._v("当需要发布时，我们从 "),a("code",[t._v("develop")]),t._v(" 分支创建一个 "),a("code",[t._v("release")]),t._v(" 分支"),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/webp/128853/1564853230917-d7ab323c-06f5-4365-ae2d-f65a78c5faa0.webp#align=left&display=inline&height=715&originHeight=715&originWidth=494&size=0&status=done&width=494",alt:""}}),a("br"),t._v("然后这个 "),a("code",[t._v("release")]),t._v(" 分支会发布到测试环境进行测试，如果发现问题就在这个分支直接进行修复。在所有问题修复之前，我们会不停的重复"),a("strong",[t._v("发布->测试->修复->重新发布->重新测试")]),t._v("这个流程。"),a("br"),t._v("发布结束后，这个 "),a("code",[t._v("release")]),t._v(" 分支会合并到 "),a("code",[t._v("develop")]),t._v(" 和 "),a("code",[t._v("master")]),t._v(" 分支，从而保证不会有代码丢失。"),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/webp/128853/1564853230859-855003ad-8d60-4c86-9803-a852c9d95b65.webp#align=left&display=inline&height=717&originHeight=717&originWidth=494&size=0&status=done&width=494",alt:""}}),a("br"),a("code",[t._v("master")]),t._v(" 分支只跟踪已经发布的代码，合并到 "),a("code",[t._v("master")]),t._v(" 上的 commit 只能来自 "),a("code",[t._v("release")]),t._v(" 分支和 "),a("code",[t._v("hotfix")]),t._v(" 分支。"),a("br"),a("code",[t._v("hotfix")]),t._v(" 分支的作用是紧急修复一些 Bug。"),a("br"),t._v("它们都是从 "),a("code",[t._v("master")]),t._v(" 分支上的某个 tag 建立，修复结束后再合并到 "),a("code",[t._v("develop")]),t._v(" 和 "),a("code",[t._v("master")]),t._v(" 分支上。"),a("br")]),t._v(" "),a("blockquote",[a("p",[t._v("更多工作流可以参考阮老师的"),a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/12/git-workflow.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 工作流程"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"rebase-与-merge的区别"}},[t._v("rebase 与 merge的区别?")]),t._v(" "),a("p",[t._v("git rebase 和 git merge 一样都是用于从一个分支获取并且合并到当前分支.")]),t._v(" "),a("p",[t._v("假设一个场景,就是我们开发的[feature/todo]分支要合并到master主分支,那么用rebase或者merge有什么不同呢?")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/4f2db1d2289e18c7b874a9015a20b38d.png",alt:"2019-08-04-01-20-09"}})]),t._v(" "),a("ul",[a("li",[t._v("marge 特点：自动创建一个新的commit\n如果合并的时候遇到冲突，仅需要修改后重新commit")]),t._v(" "),a("li",[t._v("优点：记录了真实的commit情况，包括每个分支的详情")]),t._v(" "),a("li",[t._v("缺点：因为每次merge会自动产生一个merge commit，所以在使用一些git 的GUI tools，特别是commit比较频繁时，看到分支很杂乱。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/ea8107df9a1650ed19b0b68ab3da4567.png",alt:"2019-08-04-01-22-04"}})]),t._v(" "),a("ul",[a("li",[t._v("rebase 特点：会合并之前的commit历史")]),t._v(" "),a("li",[t._v("优点：得到更简洁的项目历史，去掉了merge commit")]),t._v(" "),a("li",[t._v("缺点：如果合并出现代码问题不容易定位，因为re-write了history")])]),t._v(" "),a("p",[t._v("因此,当需要保留详细的合并信息的时候建议使用git merge，特别是需要将分支合并进入master分支时；当发现自己修改某个功能时，频繁进行了git commit提交时，发现其实过多的提交信息没有必要时，可以尝试git rebase.")]),t._v(" "),a("h2",{attrs:{id:"git-reset、git-revert-和-git-checkout-有什么区别"}},[t._v("git reset、git revert 和 git checkout 有什么区别")]),t._v(" "),a("p",[t._v("这个问题同样也需要先了解 git 仓库的三个组成部分：工作区（Working Directory）、暂存区（Stage）和历史记录区（History）。")]),t._v(" "),a("ul",[a("li",[t._v("工作区：在 git 管理下的正常目录都算是工作区，我们平时的编辑工作都是在工作区完成")]),t._v(" "),a("li",[t._v("暂存区：临时区域。里面存放将要提交文件的快照")]),t._v(" "),a("li",[t._v("历史记录区：git commit 后的记录区")])]),t._v(" "),a("p",[t._v("三个区的转换关系以及转换所使用的命令：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/403ff092b287ae192b376ac93fb69816.png",alt:"2019-08-04-01-51-29"}})]),t._v(" "),a("p",[t._v("git reset、git revert 和 git checkout的共同点：用来撤销代码仓库中的某些更改。")]),t._v(" "),a("p",[t._v("然后是不同点：")]),t._v(" "),a("p",[t._v("首先，从 commit 层面来说：")]),t._v(" "),a("ul",[a("li",[t._v("git reset 可以将一个分支的末端指向之前的一个 commit。然后再下次 git 执行垃圾回收的时候，会把这个 commit 之后的 commit 都扔掉。git reset 还支持三种标记，用来标记 reset 指令影响的范围：\n"),a("ul",[a("li",[t._v("--mixed：会影响到暂存区和历史记录区。也是默认选项")]),t._v(" "),a("li",[t._v("--soft：只影响历史记录区")]),t._v(" "),a("li",[t._v("--hard：影响工作区、暂存区和历史记录区")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("注意：因为 git reset 是直接删除 commit 记录，从而会影响到其他开发人员的分支，所以不要在公共分支（比如 develop）做这个操作。")])]),t._v(" "),a("ul",[a("li",[t._v("git checkout 可以将 HEAD 移到一个新的分支，并更新工作目录。因为可能会覆盖本地的修改，所以执行这个指令之前，你需要 stash 或者 commit 暂存区和工作区的更改。")]),t._v(" "),a("li",[t._v("git revert 和 git reset 的目的是一样的，但是做法不同，它会以创建新的 commit 的方式来撤销 commit，这样能保留之前的 commit 历史，比较安全。另外，同样因为可能会覆盖本地的修改，所以执行这个指令之前，你需要 stash 或者 commit 暂存区和工作区的更改。")])]),t._v(" "),a("p",[t._v("然后，从文件层面来说：")]),t._v(" "),a("ul",[a("li",[t._v("git reset 只是把文件从历史记录区拿到暂存区，不影响工作区的内容，而且不支持 --mixed、--soft 和 --hard。")]),t._v(" "),a("li",[t._v("git checkout 则是把文件从历史记录拿到工作区，不影响暂存区的内容。")]),t._v(" "),a("li",[t._v("git revert 不支持文件层面的操作。")])]),t._v(" "),a("hr")])}),[],!1,null,null,null);s.default=e.exports}}]);