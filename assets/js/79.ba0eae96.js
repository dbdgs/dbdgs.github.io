(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{642:function(t,e,n){"use strict";n.r(e);var a=n(21),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_68-文本左右对齐"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_68-文本左右对齐"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://leetcode-cn.com/problems/text-justification",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("68. 文本左右对齐"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0068.Text%20Justification/README_EN.md",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("English Version"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),n("p",[t._v("给定一个单词数组和一个长度 "),n("em",[t._v("maxWidth")]),t._v("，重新排版单词，使其成为每行恰好有 "),n("em",[t._v("maxWidth")]),t._v(" 个字符，且左右两端对齐的文本。")]),t._v(" "),n("p",[t._v("你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 "),n("code",[t._v("' '")]),t._v(" 填充，使得每行恰好有 "),n("em",[t._v("maxWidth")]),t._v(" 个字符。")]),t._v(" "),n("p",[t._v("要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。")]),t._v(" "),n("p",[t._v("文本的最后一行应为左对齐，且单词之间不插入"),n("strong",[t._v("额外的")]),t._v("空格。")]),t._v(" "),n("p",[n("strong",[t._v("说明:")])]),t._v(" "),n("ul",[n("li",[t._v("单词是指由非空格字符组成的字符序列。")]),t._v(" "),n("li",[t._v("每个单词的长度大于 0，小于等于 "),n("em",[t._v("maxWidth")]),t._v("。")]),t._v(" "),n("li",[t._v("输入单词数组 "),n("code",[t._v("words")]),t._v(" 至少包含一个单词。")])]),t._v(" "),n("p",[n("strong",[t._v("示例:")])]),t._v(" "),n("pre",[n("strong",[t._v("输入:")]),t._v('\nwords = ["This", "is", "an", "example", "of", "text", "justification."]\nmaxWidth = 16\n'),n("strong",[t._v("输出:")]),t._v('\n[\n   "This    is    an",\n   "example  of text",\n   "justification.  "\n]\n')]),t._v(" "),n("p",[n("strong",[t._v("示例 2:")])]),t._v(" "),n("pre",[n("strong",[t._v("输入:")]),t._v('\nwords = ["What","must","be","acknowledgment","shall","be"]\nmaxWidth = 16\n'),n("strong",[t._v("输出:")]),t._v('\n[\n  "What   must   be",\n  "acknowledgment  ",\n  "shall be        "\n]\n'),n("strong",[t._v("解释: ")]),t._v('注意最后一行的格式应为 "shall be    " 而不是 "shall     be",\n     因为最后一行应为左对齐，而不是左右两端对齐。       \n     第二行同样为左对齐，这是因为这行只包含一个单词。\n')]),t._v(" "),n("p",[n("strong",[t._v("示例 3:")])]),t._v(" "),n("pre",[n("strong",[t._v("输入:")]),t._v('\nwords = ["Science","is","what","we","understand","well","enough","to","explain",\n         "to","a","computer.","Art","is","everything","else","we","do"]\nmaxWidth = 20\n'),n("strong",[t._v("输出:")]),t._v('\n[\n  "Science  is  what we",\n  "understand      well",\n  "enough to explain to",\n  "a  computer.  Art is",\n  "everything  else  we",\n  "do                  "\n]\n')]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("h3",{attrs:{id:"python3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python3"}},[t._v("#")]),t._v(" "),n("strong",[t._v("Python3")])]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"java"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" "),n("strong",[t._v("Java")])]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),n("strong",[t._v("...")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])])}),[],!1,null,null,null);e.default=s.exports}}]);