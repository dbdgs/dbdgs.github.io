(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{757:function(e,n,a){"use strict";a.r(n);var t=a(21),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_185-部门工资前三高的所有员工"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_185-部门工资前三高的所有员工"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/department-top-three-salaries",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("185. 部门工资前三高的所有员工"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/doocs/leetcode@main/solution/0100-0199/0185.Department%20Top%20Three%20Salaries/README_EN.md",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("English Version"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[e._v("#")]),e._v(" 题目描述")]),e._v(" "),a("p",[a("code",[e._v("Employee")]),e._v(" 表包含所有员工信息，每个员工有其对应的工号 "),a("code",[e._v("Id")]),e._v("，姓名 "),a("code",[e._v("Name")]),e._v("，工资 "),a("code",[e._v("Salary")]),e._v(" 和部门编号 "),a("code",[e._v("DepartmentId")]),e._v(" 。")]),e._v(" "),a("pre",[e._v("+----+-------+--------+--------------+\n| Id | Name  | Salary | DepartmentId |\n+----+-------+--------+--------------+\n| 1  | Joe   | 85000  | 1            |\n| 2  | Henry | 80000  | 2            |\n| 3  | Sam   | 60000  | 2            |\n| 4  | Max   | 90000  | 1            |\n| 5  | Janet | 69000  | 1            |\n| 6  | Randy | 85000  | 1            |\n| 7  | Will  | 70000  | 1            |\n+----+-------+--------+--------------+")]),e._v(" "),a("p",[a("code",[e._v("Department")]),e._v(" 表包含公司所有部门的信息。")]),e._v(" "),a("pre",[e._v("+----+----------+\n| Id | Name     |\n+----+----------+\n| 1  | IT       |\n| 2  | Sales    |\n+----+----------+")]),e._v(" "),a("p",[e._v("编写一个 SQL 查询，找出每个部门获得前三高工资的所有员工。例如，根据上述给定的表，查询结果应返回：")]),e._v(" "),a("pre",[e._v("+------------+----------+--------+\n| Department | Employee | Salary |\n+------------+----------+--------+\n| IT         | Max      | 90000  |\n| IT         | Randy    | 85000  |\n| IT         | Joe      | 85000  |\n| IT         | Will     | 70000  |\n| Sales      | Henry    | 80000  |\n| Sales      | Sam      | 60000  |\n+------------+----------+--------+")]),e._v(" "),a("p",[a("strong",[e._v("解释：")])]),e._v(" "),a("p",[e._v("IT 部门中，Max 获得了最高的工资，Randy 和 Joe 都拿到了第二高的工资，Will 的工资排第三。销售部门（Sales）只有两名员工，Henry 的工资最高，Sam 的工资排第二。")]),e._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[e._v("#")]),e._v(" 解法")]),e._v(" "),a("h3",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[e._v("#")]),e._v(" "),a("strong",[e._v("SQL")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT\n\tDepartment.NAME AS Department,\n\tEmployee.NAME AS Employee,\n\tSalary\nFROM\n\tEmployee,\n\tDepartment\nWHERE\n\tEmployee.DepartmentId = Department.Id\n\tAND  (SELECT\n            COUNT(DISTINCT e2.Salary)\n        FROM\n            Employee e2\n        WHERE\n            e2.Salary > Employee.Salary\n                AND Employee.DepartmentId = e2.DepartmentId\n    ) < 3\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br")])])])}),[],!1,null,null,null);n.default=s.exports}}]);