function project(Name , Storage , Button)//factory function project
{
    return{
        Name,
        Storage,
        Button,
    }
}
// Array that stores project objects
let p_Array = [];

// three default objects
const inbox = project('Inbox',[] , document.createElement('button')); inbox.Button.textContent = inbox.Name;
const today = project('Today',[],document.createElement('button')); today.Button.textContent = today.Name;
const week = project('Week',[] ,document.createElement('button')); week.Button.textContent = week.Name;

p_Array.push(inbox);
p_Array.push(today);
p_Array.push(week);

//Button that adds new projects in p_Array here i have used dummy projects for simplicity later i will add the form to add project title
const Add_project = document.createElement('button'); Add_project.id="Add_project";

// i divided menu into three sections mainly first the default_projects that is inbox week and today
// second section is heading Project simple
// third section is the projects_added section which stores the newly added projects

function Menu()
{
    const menu = document.createElement('div');
    menu.id = "menu-content";
    const default_projects = document.createElement('div'); default_projects.id="default_projects";
    const project_Title = document.createElement('div'); project_Title.id="project_Title";
    const menu_bottom = document.createElement('div'); menu_bottom.id="menu_bottom";
    const projects_added = document.createElement('div');  projects_added.id="projects_added";
    // const Add_project = document.createElement('button'); Add_project.id="Add_project";
    Add_project.textContent = " + Add_project ";
    Add_project.addEventListener('click',()=>{
        const dummy_project = project("Dummy_project",[],document.createElement('button'));
        dummy_project.Button.textContent = dummy_project.Name;
        projects_added.appendChild(dummy_project.Button);
        dummy_project.Button.addEventListener('click',()=>{
             // i want this function to work same as  line 71 ans 72 in task.js which i am unable to do;
        })
        //here projects are added when Add_project button is clicked
        p_Array.push(dummy_project);
    })
    projects_added.appendChild(Add_project);
    p_Array.forEach(item =>{
        default_projects.appendChild(item.Button);
        
    })
    // default_projects.appendChild(inbox.Button);
    // default_projects.appendChild(today.Button);
    // default_projects.appendChild(week.Button);
    project_Title.textContent = "Projects";
    menu_bottom.appendChild(projects_added);
    menu.appendChild(default_projects);
    menu.appendChild(project_Title);
    menu.appendChild(menu_bottom);
    
    return menu;
}
export default Menu;
export {p_Array,Add_project};