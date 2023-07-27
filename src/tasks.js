import {p_Array,form} from './menu.js';
import task_ICON from './Icons/task.svg';


function Task(title,Del,date)
{
   return { title ,Del,date};
}
//This function fills tasks in the project_tasks of the  respective  project
function Fill_tasks(project_tasks,dummy_task)
{
   
   const dummy_task_div = document.createElement('div');
   dummy_task_div.id="dummy_task_div";
   const dummy_div_left  = document.createElement('div');
   dummy_div_left.id="dummy_div_left";
   const dummy_div_right  = document.createElement('div');
   const task_date = document.createElement('span');
   task_date.textContent = "Due date:- "+ dummy_task.date;
   task_date.id="task_date";
   const task_icon = document.createElement('img');
   const Del = dummy_task.Del;
   Del.textContent = "Delete";

   Del.id="cancel";
   task_icon.src = task_ICON; 
   task_icon.id="task_icon";
   const task_title = document.createElement('div');
   task_title.textContent= dummy_task.title;
   dummy_div_left.appendChild(task_icon);
   dummy_div_left.appendChild(task_title);
   dummy_div_left.appendChild(task_date);
   dummy_div_right.appendChild(Del);
   dummy_div_left.id="dummy_div_left";
   dummy_div_right.id="dummy_div_right";
//    const task_priority = document.createElement('div');
//    task_priority.textContent= dummy_task.priority;
   
   dummy_task_div.appendChild(dummy_div_left);
   dummy_task_div.appendChild(dummy_div_right);
//    dummy_task_div.appendChild(task_priority);
   project_tasks.appendChild(dummy_task_div);
   Del.addEventListener('click',()=>{
    project_tasks.removeChild(dummy_task_div);

   })
}  
function prefill_tasks(project_tasks,task_arr)
{
   task_arr.forEach(element => {
       Fill_tasks(project_tasks,element);
   });
}

//This function renders the selected project in the tasks section of the website
// it includes project title  , a Add_task button which is used to add task in the respective project
// and project_tasks is the section which actually stores the list of all the tasks in the project and it is filled with the help of Fill_tssk() function above
function project_list(project)
{
    function Task_form()
    {
       const task_form = document.createElement('form');
       task_form.action="/submit";
       task_form.id="task_form";
       const input = document.createElement('input');
       input.id="task_title";
       input.type = 'text';
       input.name = 'task_title';
       input.maxLength = 30;
       input.required = true;
       input.placeholder = "Task Title";
       const date_input = document.createElement('input');
       date_input.id="date_input";
       date_input.type="date";
       date_input.name = "task_date";
       date_input.placeholder = "dd-mm-yyyy";
       date_input.required = true;
       const submit_btn = document.createElement('button');
       const cancel = document.createElement('button');
       submit_btn.id="submit_btn";
       cancel.id="cancel";
       cancel.type = "button";
       cancel.textContent = "Cancel";
       cancel.addEventListener('click',()=>{
        task_form.reset();
        task_form.style.display = "none";
       })
       submit_btn.type = 'submit';
       submit_btn.textContent = 'Add task';
       task_form.appendChild(input);
       task_form.appendChild(date_input);
       task_form.appendChild(submit_btn);
       task_form.appendChild(cancel);
       task_form.addEventListener('submit',function(event){
        event.preventDefault();
        
        const formData = new FormData(task_form);
        const formValues = Object.fromEntries(formData.entries());

        const task_title = formValues.task_title;
        console.log(task_title);
        const task_date  = formValues.task_date;
        console.log(task_date);
        const dummy_task = Task(task_title,document.createElement('button'),task_date);
        project.Storage.push(dummy_task);
        dummy_task.Del.addEventListener('click',()=>{
            const i = project.Storage.indexOf(dummy_task);
            project.Storage.splice(i,1);
        })
        Fill_tasks(project_tasks,dummy_task);
        task_form.reset();
        task_form.style.display = "none";
       })
       return task_form;
    }
   const project_panel = document.createElement('div'); project_panel.id="project_panel";
   const project_heading = document.createElement('div');
   project_heading.textContent = project.Name; project_heading.id="project_heading";
   const project_tasks = document.createElement('div');
   project_tasks.id="project_tasks";
   const task_form = Task_form();

   const Add_task = document.createElement('button');
   Add_task.id="Add_task";
   Add_task.textContent = "+ Add task";
   Add_task.addEventListener('click',()=>{
      task_form.style.display = "flex";
   })
   project_tasks.appendChild(Add_task); 
   project_tasks.appendChild(task_form);
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
            
            task_list.innerHTML="";
            task_list.appendChild(project_list(project));
        })
    })
    // The problem lies here this thing runs now when i have not added any input form that takes project title and creates and oblect and pushes it into the p_Array array
    form.addEventListener('submit',function(event){
            event.preventDefault();
            const project = p_Array[p_Array.length-1];
            project.Button.addEventListener('click',()=>{
                
                task_list.innerHTML="";
                task_list.appendChild(project_list(project));
            })
    })
    


    return task_list;
}
export default Tasks;