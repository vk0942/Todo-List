export default function Menu()
{
    const menu = document.createElement('div');
    menu.id = "menu-content";
    const default_projects = document.createElement('div');
    const project_heading = document.createElement('div');
    const projects_added = document.createElement('div');
    menu.appendChild(default_projects);
    menu.appendChild(project_heading);
    menu.appendChild(projects_added);
    
    return menu;
}