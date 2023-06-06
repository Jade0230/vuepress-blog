(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{421:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"symbol-for"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-for"}},[s._v("#")]),s._v(" Symbol.for()")]),s._v(" "),t("p",[s._v("和 "),t("code",[s._v("Symbol()")]),s._v(" 不同的是，用 "),t("code",[s._v("Symbol.for()")]),s._v(" 方法创建的的 symbol 会被放入一个全局 symbol 注册表中。"),t("code",[s._v("Symbol.for() 并不是每次都会创建一个新的 symbol")]),s._v("，它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。")]),s._v(" "),t("p",[t("strong",[s._v("避免了重复创建相同 key 的 symbol")])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("See More")]),s._v(" "),t("p",[t("strong",[s._v("什么是全局 symbol 注册表？")])]),s._v(" "),t("p",[s._v("JavaScript 维护了一个全局的 "),t("code",[s._v("Symbol")]),s._v(" 注册表，通过向注册表中插入 "),t("code",[s._v("Symbol")]),s._v(" 对象，并为对象起一个字符串名称访问该对象")]),s._v(" "),t("p",[s._v("向注册表插入或者读取 "),t("code",[s._v("Symbol")]),s._v(" 对象需要使用 "),t("code",[s._v("Symbol.for(key)")]),s._v(" 方法，如果注册表中有名为 "),t("code",[s._v("key")]),s._v(" 的对象，就返回该对象，否则就插入新对象再返回")]),s._v(" "),t("p",[s._v("这里需要注意的是，使用 "),t("code",[s._v("Symbol()")]),s._v(" 方法创建的属性名"),t("strong",[s._v("不会插入到注册表中")])])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sf1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sf2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 从 symbol 注册表中读取键为"foo"的 symbol，而不是重新创建一个新的 symbol')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" s1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nsf1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" sf2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true，证明了上面说的")]),s._v("\ns1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false，Symbol() 函数每次都会返回新的一个 symbol")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" sym "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mario"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsym"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "Symbol(mario)"，mario 既是该 symbol 在 symbol 注册表中的键名，又是该 symbol 自身的描述字符串')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("为了防止冲突，最好给你要放入 symbol 注册表中的 symbol 带上键前缀。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my.foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"symbol-keyfor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol-keyfor"}},[s._v("#")]),s._v(" Symbol.keyFor()")]),s._v(" "),t("p",[t("strong",[t("code",[s._v("Symbol.keyFor(sym)")])]),s._v(" 方法用来获取全局 symbol 注册表中某个 symbol 对象的键。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建一个全局 Symbol")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" globalSym "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSymbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("keyFor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("globalSym"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "foo"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" localSym "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSymbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("keyFor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("localSym"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以下 Symbol 不是保存在全局 Symbol 注册表中")]),s._v("\nSymbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("keyFor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("iterator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);