import {inbox,today,week} from './menu.js';

let tasks_store = {
    inbox:[],
    today:[],
    week:[],
}
function Task(title,priority)
{
   return { title , priority };
}
function Fill_tasks(project_tasks,dummy_task)
{
 
   const dummy_task_div = document.createElement('div');
   dummy_task_div.id="dummy_task_div";
   const task_title = document.createElement('div');
   task_title.textContent= dummy_task.title;
   const task_priority = document.createElement('div');
   task_title.textContent= dummy_task.priority;
   dummy_task_div.appendChild(task_title);
   dummy_task_div.appendChild(task_priority);
   project_tasks.appendChild(dummy_task_div);
}  
function prefill_tasks(project_tasks,task_arr)
{
   task_arr.forEach(element => {
       Fill_tasks(project_tasks,element);
   });
}
function inbox_list()
{
   const inbox_panel = document.createElement('div'); inbox_panel.id="inbox_panel";
   const inbox_heading = document.createElement('div');
   inbox_heading.textContent = "Inbox"; inbox_heading.id="inbox_heading";
   const inbox_tasks = document.createElement('div');
   inbox_tasks.id="inbox_tasks";
   

   const Add_task = document.createElement('button');
   Add_task.textContent = "+ Add task";
   Add_task.addEventListener('click',()=>{
     const dummy_task = Task("dummy_title" , "High_priority");
     tasks_store.inbox.push(dummy_task);
     Fill_tasks(inbox_tasks,dummy_task);
   })
   inbox_tasks.appendChild(Add_task); 
   prefill_tasks(inbox_tasks , tasks_store.inbox);
   inbox_panel.appendChild(inbox_heading);
   inbox_panel.appendChild(inbox_tasks);
   return inbox_panel;
}
function today_list()
{
  
}
function week_list()
{
   
}
function Tasks()
{
    const task_list = document.createElement('div');
    inbox.addEventListener('click',()=>{
        console.log(tasks_store.inbox);
        task_list.innerHTML="";
       
        task_list.appendChild(inbox_list());
    })
    today.addEventListener('click',()=>{
        task_list.appendChild(today_list());
    })
    week.addEventListener('click',()=>{
        week.appendChild(week_list());
    })
    return task_list;
}
export default Tasks;