(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{729:function(e,a,r){"use strict";r.r(a);var v=r(21),_=Object(v.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_157-用-read4-读取-n-个字符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_157-用-read4-读取-n-个字符"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://leetcode-cn.com/problems/read-n-characters-given-read4",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("157. 用 Read4 读取 N 个字符"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0157.Read%20N%20Characters%20Given%20Read4/README_EN.md",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("English Version"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"题目描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[e._v("#")]),e._v(" 题目描述")]),e._v(" "),r("p",[e._v("给你一个文件，并且该文件只能通过给定的 "),r("code",[e._v("read4")]),e._v(" 方法来读取，请实现一个方法使其能够读取 n 个字符。")]),e._v(" "),r("p",[r("strong",[e._v("read4 方法：")])]),e._v(" "),r("p",[e._v("API "),r("code",[e._v("read4")]),e._v(" 可以从文件中读取 4 个连续的字符，并且将它们写入缓存数组 "),r("code",[e._v("buf")]),e._v(" 中。")]),e._v(" "),r("p",[e._v("返回值为实际读取的字符个数。")]),e._v(" "),r("p",[e._v("注意 "),r("code",[e._v("read4()")]),e._v(" 自身拥有文件指针，很类似于 C 语言中的 "),r("code",[e._v("FILE *fp")]),e._v(" 。")]),e._v(" "),r("p",[r("strong",[e._v("read4 的定义：")])]),e._v(" "),r("pre",[e._v("参数类型: char[] buf4\n返回类型: int\n\n注意: buf4[] 是目标缓存区不是源缓存区，read4 的返回结果将会复制到 buf4[] 当中。\n")]),e._v(" "),r("p",[e._v("下列是一些使用 "),r("code",[e._v("read4")]),e._v(" 的例子：")]),e._v(" "),r("p",[r("img",{staticStyle:{width:"600px"}})]),e._v(" "),r("pre",[r("code",[e._v('File file("abcde"); // 文件名为 "abcde"， 初始文件指针 (fp) 指向 \'a\' \nchar[] buf4 = new char[4]; // 创建一个缓存区使其能容纳足够的字符\nread4(buf4); // read4 返回 4。现在 buf4 = "abcd"，fp 指向 \'e\'\nread4(buf4); // read4 返回 1。现在 buf4 = "e"，fp 指向文件末尾\nread4(buf4); // read4 返回 0。现在 buf = ""，fp 指向文件末尾')])]),e._v(" "),r("p",[r("strong",[e._v("read 方法：")])]),e._v(" "),r("p",[e._v("通过使用 "),r("code",[e._v("read4")]),e._v(" 方法，实现 "),r("code",[e._v("read")]),e._v(" 方法。该方法可以从文件中读取 n 个字符并将其存储到缓存数组 "),r("code",[e._v("buf")]),e._v(" 中。您 "),r("strong",[e._v("不能 ")]),e._v("直接操作文件。")]),e._v(" "),r("p",[e._v("返回值为实际读取的字符。")]),e._v(" "),r("p",[r("strong",[e._v("read 的定义：")])]),e._v(" "),r("pre",[e._v("参数类型:   char[] buf, int n\n返回类型:   int\n\n注意: buf[] 是目标缓存区不是源缓存区，你需要将结果写入 buf[] 中。\n")]),e._v(" "),r("p",[e._v(" ")]),e._v(" "),r("p",[r("strong",[e._v("示例 1：")])]),e._v(" "),r("pre",[r("strong",[e._v("输入： ")]),e._v('file = "abc", n = 4\n'),r("strong",[e._v("输出： ")]),e._v("3\n"),r("strong",[e._v("解释：")]),e._v(' 当执行你的 read 方法后，buf 需要包含 "abc"。 文件一共 3 个字符，因此返回 3。 注意 "abc" 是文件的内容，不是 buf 的内容，buf 是你需要写入结果的目标缓存区。 ')]),e._v(" "),r("p",[r("strong",[e._v("示例 2：")])]),e._v(" "),r("pre",[r("strong",[e._v("输入： ")]),e._v('file = "abcde", n = 5\n'),r("strong",[e._v("输出： ")]),e._v("5\n"),r("strong",[e._v("解释： ")]),e._v('当执行你的 read 方法后，buf 需要包含 "abcde"。文件共 5 个字符，因此返回 5。\n')]),e._v(" "),r("p",[r("strong",[e._v("示例 3:")])]),e._v(" "),r("pre",[r("strong",[e._v("输入： ")]),e._v('file = "abcdABCD1234", n = 12\n'),r("strong",[e._v("输出： ")]),e._v("12\n"),r("strong",[e._v("解释： ")]),e._v('当执行你的 read 方法后，buf 需要包含 "abcdABCD1234"。文件一共 12 个字符，因此返回 12。\n')]),e._v(" "),r("p",[r("strong",[e._v("示例 4:")])]),e._v(" "),r("pre",[r("strong",[e._v("输入： ")]),e._v('file = "leetcode", n = 5\n'),r("strong",[e._v("输出： ")]),e._v("5\n"),r("strong",[e._v("解释：")]),e._v(' 当执行你的 read 方法后，buf 需要包含 "leetc"。文件中一共 5 个字符，因此返回 5。\n')]),e._v(" "),r("p",[e._v(" ")]),e._v(" "),r("p",[r("strong",[e._v("提示：")])]),e._v(" "),r("ul",[r("li",[e._v("你 "),r("strong",[e._v("不能")]),e._v(" 直接操作该文件，文件只能通过 "),r("code",[e._v("read4")]),e._v(" 获取而 "),r("strong",[e._v("不能")]),e._v(" 通过 "),r("code",[e._v("read")]),e._v("。")]),e._v(" "),r("li",[r("code",[e._v("read")]),e._v("  函数只在每个测试用例调用一次。")]),e._v(" "),r("li",[e._v("你可以假定目标缓存数组 "),r("code",[e._v("buf")]),e._v(" 保证有足够的空间存下 n 个字符。 ")])]),e._v(" "),r("h2",{attrs:{id:"解法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[e._v("#")]),e._v(" 解法")]),e._v(" "),r("h3",{attrs:{id:"python3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#python3"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Python3")])]),e._v(" "),r("div",{staticClass:"language-python line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:"java"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Java")])]),e._v(" "),r("div",{staticClass:"language-java line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:""}},[r("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" "),r("strong",[e._v("...")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])])}),[],!1,null,null,null);a.default=_.exports}}]);