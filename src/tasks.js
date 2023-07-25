import {p_Array} from './menu.js';
import task_ICON from './Icons/task.svg';


function Task(title,priority)
{
   return { title , priority };
}
function Fill_tasks(project_tasks,dummy_task)
{
  
   const dummy_task_div = document.createElement('div');
   dummy_task_div.id="dummy_task_div";
   const dummy_div_left  = document.createElement('div');
   const task_icon = document.createElement('img');
   task_icon.src = task_ICON; 
   task_icon.id="task_icon";
   const task_title = document.createElement('div');
   task_title.textContent= dummy_task.title;
   dummy_div_left.appendChild(task_icon);
   dummy_div_left.appendChild(task_title);
   dummy_div_left.id="dummy_div_left";
   const task_priority = document.createElement('div');
   task_priority.textContent= dummy_task.priority;
   
   dummy_task_div.appendChild(dummy_div_left);
   dummy_task_div.appendChild(task_priority);
   project_tasks.appendChild(dummy_task_div);
}  
function prefill_tasks(project_tasks,task_arr)
{
   task_arr.forEach(element => {
       Fill_tasks(project_tasks,element);
   });
}

function project_list(project)
{
   const project_panel = document.createElement('div'); project_panel.id="project_panel";
   const project_heading = document.createElement('div');
   project_heading.textContent = project.Name; project_heading.id="project_heading";
   const project_tasks = document.createElement('div');
   project_tasks.id="project_tasks";
   

   const Add_task = document.createElement('button');
   Add_task.id="Add_task";
   Add_task.textContent = "+ Add task";
   Add_task.addEventListener('click',()=>{
     const dummy_task = Task("dummy_title" , "High_priority");
     project.Storage.push(dummy_task);
     Fill_tasks(project_tasks,dummy_task);
   })
   project_tasks.appendChild(Add_task); 
   prefill_tasks(project_tasks , project.Storage);
   project_panel.appendChild(project_heading);
   project_panel.appendChild(project_tasks);
   return project_panel;
}

function Tasks()
{
    const task_list = document.createElement('div');
    task_list.id="task_list";
    p_Array.forEach(project =>{
        console.log(project.Button);
        project.Button.addEventListener('click',()=>{
            console.log(p_Array);
            task_list.innerHTML="";
            task_list.appendChild(project_list(project));
        })
    })
    // inbox.Button.addEventListener('click',()=>{
    //     console.log(inbox.Storage);
    //     task_list.innerHTML="";
       
    //     task_list.appendChild(project_list(inbox));
    // })
    // today.Button.addEventListener('click',()=>{
    //     console.log(inbox.Storage);
    //     task_list.innerHTML="";
       
    //     task_list.appendChild(project_list(today));
    // })
    // week.Button.addEventListener('click',()=>{
    //     console.log(inbox.Storage);
    //     task_list.innerHTML="";
       
    //     task_list.appendChild(project_list(week));
    // })

    return task_list;
}
export default Tasks;