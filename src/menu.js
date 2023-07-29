import {Task} from './tasks.js';
function project(Name, Storage, Button)//factory function project
{
    return {
        Name,
        Storage,
        Button,
    }
}
// Array that stores project objects
let p_Array = [];

// three default objects
const inbox = project('Inbox', [], document.createElement('button')); inbox.Button.textContent = inbox.Name;
const today = project('Today', [], document.createElement('button')); today.Button.textContent = today.Name;
const week = project('Week', [], document.createElement('button')); week.Button.textContent = week.Name;


if(localStorage.getItem("p_Array")===null){
    p_Array.push(inbox);
    p_Array.push(today);
    p_Array.push(week);
    localStorage.setItem("p_Array",JSON.stringify(p_Array));
}else{
    const v_Array = JSON.parse(localStorage.getItem("p_Array"));
    v_Array.forEach((item)=>{
       const curr =  project(item.Name,[],document.createElement('button'));
       curr.Button.textContent = curr.Name;
       p_Array.push(curr);
    })
}

    console.log(p_Array);
//Button that adds new projects in p_Array here i have used dummy projects for simplicity later i will add the form to add project title
const Add_project = document.createElement('button'); Add_project.id = "Add_project";

const form = document.createElement('form');



// i divided menu into three sections mainly first the default_projects that is inbox week and today
// second section is heading Project simple
// third section is the projects_added section which stores the newly added projects

function Menu() {
    function prefill_projects()
    {
        for(let i=0;i<p_Array.length;i++)
        {
            if(i>2)projects_added.appendChild(p_Array[i].Button);
            const old_projects = JSON.parse(localStorage.getItem(p_Array[i].Name));
            if(old_projects!=null)
            {
               old_projects.forEach(item =>{
                  const curr_task = Task(item.title,document.createElement('button'),item.date);
                  p_Array[i].Storage.push(curr_task);
               })
            }
        }
    }
    function Project_form() {
     
        form.action = '/submit';
        const input = document.createElement('input');
        input.id="project_title";
        input.type = 'text';
        input.name = 'project_title';
        input.maxLength = 17;
        input.required = true;
        input.placeholder = "Project Title";
        const submit_btn = document.createElement('button');
        const cancel = document.createElement('button');
        submit_btn.id="submit_btn";
        cancel.id="cancel";
        cancel.type = "button";
        submit_btn.type = 'submit';
        submit_btn.textContent = 'Create Project';
 
        cancel.textContent = 'Cancel';
        cancel.addEventListener('click',()=>{
            
            form.reset();
            form.style.display = "none";
            Add_project.style.display = "flex";
        })
        form.appendChild(input);
        form.appendChild(submit_btn);
        form.appendChild(cancel);
        form.addEventListener('submit', function(event) {
            event.preventDefault();
          
            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData.entries());
          
            // Now you can access the form values and store them in a variable or perform any desired actions
            const name = formValues.project_title;
            const dummy_project = project(name, [], document.createElement('button'));
            dummy_project.Button.textContent = dummy_project.Name;
            projects_added.appendChild(dummy_project.Button);

            //here projects are added when Add_project button is clicked
            p_Array.push(dummy_project);
            
            localStorage.setItem("p_Array",JSON.stringify(p_Array));
            const proj_list  =  JSON.parse(localStorage.getItem("p_Array"));
            console.log(typeof(proj_list));
            console.log(proj_list);
            form.reset();
            form.style.display = "none";
            Add_project.style.display = "flex";
           
          });
        return form;
    }

    const menu = document.createElement('div');
    menu.id = "menu-content";
    const default_projects = document.createElement('div'); default_projects.id = "default_projects";
    const project_Title = document.createElement('div'); project_Title.id = "project_Title";
    const menu_bottom = document.createElement('div'); menu_bottom.id = "menu_bottom";
    const projects_added = document.createElement('div'); projects_added.id = "projects_added";
    prefill_projects();
    // const Add_project = document.createElement('button'); Add_project.id="Add_project";
    const project_form = Project_form();
    
    Add_project.textContent = " + Add_project ";
    Add_project.addEventListener('click', () => {
        Add_project.style.display = "none";
        project_form.style.display = "flex";

    })
    menu_bottom.appendChild(Add_project);
    menu_bottom.appendChild(project_form);
    for(let i=0;i<3;i++)
    {
        default_projects.appendChild(p_Array[i].Button);
    }



    project_Title.textContent = "Projects";
    menu_bottom.appendChild(projects_added);
    menu.appendChild(default_projects);
    menu.appendChild(project_Title);
    menu.appendChild(menu_bottom);

    return menu;
}
export default Menu;
export { p_Array,form };