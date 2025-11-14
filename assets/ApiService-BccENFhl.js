import{c as o}from"./index-CZnZ3_Xc.js";import{G as t}from"./GetAPI-C0R9K2iB.js";/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],i=o("ListTodo",a);/**
 * @license lucide-react v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],l=o("RefreshCw",c),p=async e=>{try{return await t(`candidate/usid/${e}/dashboard_count`)}catch(r){throw console.error("Error fetching dashboard count:",r),r}},u=async e=>{try{return await t(`candidate/usid/${e}/enrolled_courses`)}catch(r){throw console.error("Error fetching enrolled courses:",r),r}},y=async e=>{try{return await t(`candidate/course/${e}/course_details`)}catch(r){throw console.error("Error fetching course details:",r),r}},g=async e=>{try{const r=JSON.parse(localStorage.getItem("udt")),s=r==null?void 0:r.userID;return await t(`candidate/course/user/${s}/${e}/task_details`)}catch(r){throw console.error("Error fetching task details:",r),r}},w=async e=>{try{return await t(`get_mcq_intern/${e}`)}catch(r){throw console.error("Error fetching MCQ data:",r),r}};export{i as L,l as R,y as a,g as b,w as c,p as d,u as g};
