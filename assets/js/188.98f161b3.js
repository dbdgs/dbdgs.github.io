(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{749:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_178-分数排名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_178-分数排名"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/rank-scores",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("178. 分数排名"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0178.Rank%20Scores/README_EN.md",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("English Version"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[s._v("编写一个 SQL 查询来实现分数排名。")]),s._v(" "),a("p",[s._v("如果两个分数相同，则两个分数排名（Rank）相同。请注意，平分后的下一个名次应该是下一个连续的整数值。换句话说，名次之间不应该有“间隔”。")]),s._v(" "),a("pre",[s._v("+----+-------+\n| Id | Score |\n+----+-------+\n| 1  | 3.50  |\n| 2  | 3.65  |\n| 3  | 4.00  |\n| 4  | 3.85  |\n| 5  | 4.00  |\n| 6  | 3.65  |\n+----+-------+\n")]),s._v(" "),a("p",[s._v("例如，根据上述给定的 "),a("code",[s._v("Scores")]),s._v(" 表，你的查询应该返回（按分数从高到低排列）：")]),s._v(" "),a("pre",[s._v("+-------+------+\n| Score | Rank |\n+-------+------+\n| 4.00  | 1    |\n| 4.00  | 1    |\n| 3.85  | 2    |\n| 3.65  | 3    |\n| 3.65  | 3    |\n| 3.50  | 4    |\n+-------+------+\n")]),s._v(" "),a("p",[a("strong",[s._v("重要提示：")]),s._v("对于 MySQL 解决方案，如果要转义用作列名的保留字，可以在关键字之前和之后使用撇号。例如 "),a("strong",[s._v("`Rank`")])]),s._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("h3",{attrs:{id:"mysql8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql8"}},[s._v("#")]),s._v(" "),a("strong",[s._v("MySQL8")])]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("DENSE_RANK()")]),s._v(" 函数，语法如下：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("DENSE_RANK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OVER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("expression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("在这个语法中：")]),s._v(" "),a("ul",[a("li",[s._v("首先，"),a("code",[s._v("PARTITION BY")]),s._v(" 子句将 "),a("code",[s._v("FROM")]),s._v(" 子句生成的结果集划分为分区。"),a("code",[s._v("DENSE_RANK()")]),s._v("函数应用于每个分区。")]),s._v(" "),a("li",[s._v("其次，"),a("code",[s._v("ORDER BY")]),s._v(" 子句指定 "),a("code",[s._v("DENSE_RANK()")]),s._v(" 函数操作的每个分区中的行顺序。")])]),s._v(" "),a("p",[s._v("与 "),a("code",[s._v("RANK()")]),s._v(" 函数不同，"),a("code",[s._v("DENSE_RANK()")]),s._v(" 函数始终返回连续的排名值。")]),s._v(" "),a("p",[s._v("题解如下：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Write your MySQL query statement below")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" DENSE_RANK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OVER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" Score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Rank'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Scores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"mysql5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql5"}},[s._v("#")]),s._v(" "),a("strong",[s._v("MySQL5")])]),s._v(" "),a("p",[s._v("MySQL 8 开始才提供了 "),a("code",[s._v("ROW_NUMBER()")]),s._v("，"),a("code",[s._v("RANK()")]),s._v("，"),a("code",[s._v("DENSE_RANK()")]),s._v(" 等"),a("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("窗口函数"),a("OutboundLink")],1),s._v("，在之前的版本，可以使用变量实现类似的功能：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONVERT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SIGNED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Rank"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" Score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@latest")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rank")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rank")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rank")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" rk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n             "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@latest")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Score\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Scores"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rank")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@latest")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" tmp\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" Score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);