const inbox = document.createElement('button'); inbox.textContent = "Inbox";
const today = document.createElement('button'); today.textContent = "Today";
const week = document.createElement('button');  week.textContent = "This Week";
function Menu()
{
    const menu = document.createElement('div');
    menu.id = "menu-content";
    const default_projects = document.createElement('div');
    const project_heading = document.createElement('div'); project_heading.id="project_heading";
    const projects_added = document.createElement('div'); 


    default_projects.appendChild(inbox);
    default_projects.appendChild(today);
    default_projects.appendChild(week);
    project_heading.textContent = "Projects";

    menu.appendChild(default_projects);
    menu.appendChild(project_heading);
    menu.appendChild(projects_added);
    
    return menu;
}
export default Menu;
export { inbox,today,week };