import './style.css';
import Header from './header.js';
import Menu from './menu.js';
const content = document.createElement('div');
content.id="content";
//header section
const header = document.createElement('div'); header.id="header";
header.appendChild(Header());
//
const menu = document.createElement('div'); menu.id="menu";
menu.appendChild(Menu());

//
const variable = document.createElement('div'); variable.id = "variable";
content.appendChild(header);
content.appendChild(menu);
content.appendChild(variable);
document.body.appendChild(content);