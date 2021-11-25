"use strict";var form=document.getElementById("form"),input=document.getElementById("input"),taskLists=document.getElementById("task-lists"),template=document.getElementById("template").content,fragment=document.createDocumentFragment(),tasks={};document.addEventListener("DOMContentLoaded",(function(){localStorage.getItem("tasks")&&(tasks=JSON.parse(localStorage.getItem("tasks"))),drawTasks()})),taskLists.addEventListener("click",(function(t){btnAction(t)})),form.addEventListener("submit",(function(t){t.preventDefault(),setTask(t)}));var setTask=function(t){if(""!==input.value.trim()){var e={id:Date.now(),text:input.value,estado:!1};tasks[e.id]=e,form.reset(),input.focus(),drawTasks()}else console.log("esta vacio")},drawTasks=function(){localStorage.setItem("tasks",JSON.stringify(tasks)),0!==Object.values(tasks).length?(taskLists.innerHTML=null,Object.values(tasks).forEach((function(t){var e=template.cloneNode(!0);e.querySelector("p").textContent=t.text,t.estado&&(e.querySelector(".tasks").classList.replace("tasks","taskComplete"),e.querySelectorAll(".fas")[0].classList.replace("fa-check","fa-undo-alt"),e.querySelector("p").style.textDecoration="line-through"),e.querySelectorAll(".fas")[0].dataset.id=t.id,e.querySelectorAll(".fas")[1].dataset.id=t.id,fragment.appendChild(e)})),taskLists.appendChild(fragment)):taskLists.innerHTML='\n    <div class="noTasks"><h3>No hay tareas pendientes</h3></div>'},btnAction=function(t){t.target.classList.contains("fa-check")&&(tasks[t.target.dataset.id].estado=!0,drawTasks()),t.target.classList.contains("fa-times")&&(delete tasks[t.target.dataset.id],drawTasks()),t.target.classList.contains("fa-undo-alt")&&(tasks[t.target.dataset.id].estado=!1,drawTasks()),t.stopPropagation};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMtbWluLmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5wdXQiLCJ0YXNrTGlzdHMiLCJ0ZW1wbGF0ZSIsImNvbnRlbnQiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJ0YXNrcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZHJhd1Rhc2tzIiwiZSIsImJ0bkFjdGlvbiIsInByZXZlbnREZWZhdWx0Iiwic2V0VGFzayIsInZhbHVlIiwidHJpbSIsInRhc2siLCJpZCIsIkRhdGUiLCJub3ciLCJ0ZXh0IiwiZXN0YWRvIiwicmVzZXQiLCJmb2N1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsImNsb25lIiwiY2xvbmVOb2RlIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwicmVwbGFjZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwiZGF0YXNldCIsImFwcGVuZENoaWxkIiwidGFyZ2V0IiwiY29udGFpbnMiLCJzdG9wUHJvcGFnYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLGFDRUEsSUFBQUEsS0FBQUMsU0FBQUMsZUFBQSxRQUNBQyxNQUFBRixTQUFBQyxlQUFBLFNBQ0FFLFVBQUFILFNBQUFDLGVBQUEsY0FDQUcsU0FBQUosU0FBQUMsZUFBQSxZQUFBSSxRQUNBQyxTQUFBTixTQUFBTyx5QkFDQUMsTUFBQSxHQUVBUixTQUFBUyxpQkFBQSxvQkFBQSxXQUNBQyxhQUFBQyxRQUFBLFdBQ0FILE1BQUFJLEtBQUFDLE1BQUFILGFBQUFDLFFBQUEsV0FFQUcsZUFHQVgsVUFBQU0saUJBQUEsU0FBQSxTQUFBTSxHQUNBQyxVQUFBRCxNQUdBaEIsS0FBQVUsaUJBQUEsVUFBQSxTQUFBTSxHQUNBQSxFQUFBRSxpQkFRQUMsUUFBQUgsTUFHQSxJQUFBRyxRQUFBLFNBQUFILEdBQ0EsR0FBQSxLQUFBYixNQUFBaUIsTUFBQUMsT0FBQSxDQUtBLElBQUFDLEVBQUEsQ0FDQUMsR0FBQUMsS0FBQUMsTUFDQUMsS0FBQXZCLE1BQUFpQixNQUNBTyxRQUFBLEdBR0FsQixNQUFBYSxFQUFBQyxJQUFBRCxFQUVBdEIsS0FBQTRCLFFBQ0F6QixNQUFBMEIsUUFFQWQsaUJBZkFlLFFBQUFDLElBQUEsZUFrQkFoQixVQUFBLFdBQ0FKLGFBQUFxQixRQUFBLFFBQUFuQixLQUFBb0IsVUFBQXhCLFFBRUEsSUFBQXlCLE9BQUFDLE9BQUExQixPQUFBMkIsUUFPQWhDLFVBQUFpQyxVQUFBLEtBQ0FILE9BQUFDLE9BQUExQixPQUFBNkIsU0FBQSxTQUFBaEIsR0FDQSxJQUFBaUIsRUFBQWxDLFNBQUFtQyxXQUFBLEdBQ0FELEVBQUFFLGNBQUEsS0FBQUMsWUFBQXBCLEVBQUFJLEtBRUFKLEVBQUFLLFNBQ0FZLEVBQ0FFLGNBREEsVUFFQUUsVUFBQUMsUUFGQSxRQUFBLGdCQUdBTCxFQUNBTSxpQkFEQSxRQUNBLEdBQ0FGLFVBQUFDLFFBRkEsV0FBQSxlQUdBTCxFQUFBRSxjQUFBLEtBQUFLLE1BQUFDLGVBQUEsZ0JBR0FSLEVBQUFNLGlCQUFBLFFBQUEsR0FBQUcsUUFBQXpCLEdBQUFELEVBQUFDLEdBQ0FnQixFQUFBTSxpQkFBQSxRQUFBLEdBQUFHLFFBQUF6QixHQUFBRCxFQUFBQyxHQUNBaEIsU0FBQTBDLFlBQUFWLE1BRUFuQyxVQUFBNkMsWUFBQTFDLFdBekJBSCxVQUFBaUMsVUFBQSxzRUE0QkFwQixVQUFBLFNBQUFELEdBQ0FBLEVBQUFrQyxPQUFBUCxVQUFBUSxTQUFBLGNBQ0ExQyxNQUFBTyxFQUFBa0MsT0FBQUYsUUFBQXpCLElBQUFJLFFBQUEsRUFDQVosYUFFQUMsRUFBQWtDLE9BQUFQLFVBQUFRLFNBQUEscUJBQ0ExQyxNQUFBTyxFQUFBa0MsT0FBQUYsUUFBQXpCLElBQ0FSLGFBRUFDLEVBQUFrQyxPQUFBUCxVQUFBUSxTQUFBLGlCQUNBMUMsTUFBQU8sRUFBQWtDLE9BQUFGLFFBQUF6QixJQUFBSSxRQUFBLEVBQ0FaLGFBRUFDLEVBQUFvQyIsImZpbGUiOiJzY3JpcHRzLW1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiXHJcbi8vVkFSSUFCTEVTXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9ybWApO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbnB1dGApO1xyXG5jb25zdCB0YXNrTGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGFzay1saXN0c2ApO1xyXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0ZW1wbGF0ZWApLmNvbnRlbnQ7XHJcbmNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5sZXQgdGFza3MgPSB7fTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYERPTUNvbnRlbnRMb2FkZWRgLCAoKSA9PiB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0YXNrc2ApKSB7XHJcbiAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHRhc2tzYCkpO1xyXG4gIH1cclxuICBkcmF3VGFza3MoKTtcclxufSk7XHJcblxyXG50YXNrTGlzdHMuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoZSkgPT4ge1xyXG4gIGJ0bkFjdGlvbihlKTtcclxufSk7XHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoYHN1Ym1pdGAsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAvKlxyXG4gIGNvbnNvbGUubG9nKGUudGFyZ2V0WzBdLnZhbHVlKTtcclxuICBjb25zb2xlLmxvZyhlLnRhcmdldC5xdWVyeVNlbGVjdG9yKGBpbnB1dGApLnZhbHVlKTtcclxuICBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSk7XHJcbiovXHJcblxyXG4gIHNldFRhc2soZSk7XHJcbn0pO1xyXG5cclxuY29uc3Qgc2V0VGFzayA9IChlKSA9PiB7XHJcbiAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gYGApIHtcclxuICAgIGNvbnNvbGUubG9nKGBlc3RhIHZhY2lvYCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjb25zdCB0YXNrID0ge1xyXG4gICAgaWQ6IERhdGUubm93KCksXHJcbiAgICB0ZXh0OiBpbnB1dC52YWx1ZSxcclxuICAgIGVzdGFkbzogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgdGFza3NbdGFzay5pZF0gPSB0YXNrO1xyXG5cclxuICBmb3JtLnJlc2V0KCk7XHJcbiAgaW5wdXQuZm9jdXMoKTtcclxuXHJcbiAgZHJhd1Rhc2tzKCk7XHJcbn07XHJcblxyXG5jb25zdCBkcmF3VGFza3MgPSAoKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRhc2tzYCwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuXHJcbiAgaWYgKE9iamVjdC52YWx1ZXModGFza3MpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgdGFza0xpc3RzLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJub1Rhc2tzXCI+PGgzPk5vIGhheSB0YXJlYXMgcGVuZGllbnRlczwvaDM+PC9kaXY+YDtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0YXNrTGlzdHMuaW5uZXJIVE1MID0gbnVsbDtcclxuICBPYmplY3QudmFsdWVzKHRhc2tzKS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoYHBgKS50ZXh0Q29udGVudCA9IHRhc2sudGV4dDtcclxuXHJcbiAgICBpZiAodGFzay5lc3RhZG8pIHtcclxuICAgICAgY2xvbmVcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgLnRhc2tzYClcclxuICAgICAgICAuY2xhc3NMaXN0LnJlcGxhY2UoYHRhc2tzYCwgYHRhc2tDb21wbGV0ZWApO1xyXG4gICAgICBjbG9uZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuZmFzYClbMF1cclxuICAgICAgICAuY2xhc3NMaXN0LnJlcGxhY2UoYGZhLWNoZWNrYCwgYGZhLXVuZG8tYWx0YCk7XHJcbiAgICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoYHBgKS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGBsaW5lLXRocm91Z2hgO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoYC5mYXNgKVswXS5kYXRhc2V0LmlkID0gdGFzay5pZDtcclxuICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoYC5mYXNgKVsxXS5kYXRhc2V0LmlkID0gdGFzay5pZDtcclxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcclxuICB9KTtcclxuICB0YXNrTGlzdHMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG59O1xyXG5cclxuY29uc3QgYnRuQWN0aW9uID0gKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGBmYS1jaGVja2ApKSB7XHJcbiAgICB0YXNrc1tlLnRhcmdldC5kYXRhc2V0LmlkXS5lc3RhZG8gPSB0cnVlO1xyXG4gICAgZHJhd1Rhc2tzKCk7XHJcbiAgfVxyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoYGZhLXRpbWVzYCkpIHtcclxuICAgIGRlbGV0ZSB0YXNrc1tlLnRhcmdldC5kYXRhc2V0LmlkXTtcclxuICAgIGRyYXdUYXNrcygpO1xyXG4gIH1cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGBmYS11bmRvLWFsdGApKSB7XHJcbiAgICB0YXNrc1tlLnRhcmdldC5kYXRhc2V0LmlkXS5lc3RhZG8gPSBmYWxzZTtcclxuICAgIGRyYXdUYXNrcygpO1xyXG4gIH1cclxuICBlLnN0b3BQcm9wYWdhdGlvbjtcclxufTtcclxuIl19