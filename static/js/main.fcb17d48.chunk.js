(window["webpackJsonpreact-todo-app"]=window["webpackJsonpreact-todo-app"]||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(19)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(7),c=a.n(o),r=(a(14),a(8)),i=a(1),l=a(2),d=a(4),u=a(3),k=a(5),m=(a(15),a(16),function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={taksText:""},a.hendlChangeTask=function(t){a.setState({taksText:t.target.value})},a.addHendl=function(t){if("Enter"===t.key){if(a.state.taksText.length<4)return;a.props.addNewTask(a.state.taksText),a.setState({taksText:""})}},a.textToNull=function(){a.setState({taksText:""})},a}return Object(k.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.state.taksText,a=this.props.addNewTask;return s.a.createElement("div",{className:"input-container"},s.a.createElement("input",{value:e,disabled:this.props.taskCount>14,onChange:this.hendlChangeTask,onKeyPress:this.addHendl,className:"input-task"}),s.a.createElement("button",{className:"addBtn",disabled:this.state.taksText.length<4,onClick:function(){a(e),t.textToNull()}}," + "))}}]),e}(n.Component));a(17);var h=function(t){return s.a.createElement("li",{className:"todo-item"},t.task.done?s.a.createElement("span",{className:"task-text-done"},t.task.task):s.a.createElement("span",{className:"task-text"},t.task.task),s.a.createElement("label",{className:"taks-is-done"},s.a.createElement("input",{type:"checkbox",checked:t.task.done,onChange:function(){return t.TaskDone(t.task)}}),t.task.done?s.a.createElement("span",{className:"taks-is-done-icon"}," \u2611 "):s.a.createElement("span",{className:"taks-is-done-icon"}," \u2610 ")),s.a.createElement("button",{className:"taks-delete",onClick:function(){return t.DeleteTask(t.task.id)}}," \u2612 ",s.a.createElement("span",{className:"dellBtn"},"\u2612")))};a(18);var f=function(t){return s.a.createElement("ul",{className:"todo-list"},t.todos.map((function(e){return s.a.createElement(h,{key:e.id,task:e,TaskDone:t.TaskDone,DeleteTask:t.DeleteTask})})))},p=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={todos:[]},a.id=0,a.addNewTask=function(t){var e={task:t,done:!1,import:!1,id:a.id};a.setState({todos:[].concat(Object(r.a)(a.state.todos),[e])}),a.id++},a.TaskDone=function(t){a.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t.id&&(e.done=!e.done),e}))}}))},a.DeleteTask=function(t){a.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},a}return Object(k.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(m,{addNewTask:this.addNewTask,taskCount:this.state.todos.length}),s.a.createElement(f,{todos:this.state.todos,TaskDone:this.TaskDone,DeleteTask:this.DeleteTask}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.fcb17d48.chunk.js.map