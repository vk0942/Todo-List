import './style.css';
import Header from './header.js';
import Menu from './menu.js';
import Tasks from './tasks.js';
const content = document.createElement('div');
content.id="content";
//header section
const header = document.createElement('div'); header.id="header";
header.appendChild(Header());
//
const menu = document.createElement('div'); menu.id="menu";
menu.appendChild(Menu());

//

const tasks = document.createElement('div'); tasks.id = "tasks";
tasks.appendChild(Tasks());

content.appendChild(header);
content.appendChild(menu);
content.appendChild(tasks);
document.body.appendChild(content);

