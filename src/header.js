import Icon from './Icons/tasks.png';
import github_icon from './Icons/github-mark-white.png';

export default function Header() {
    const header = document.createElement('div'); header.id = "header-content";
    const icon = new Image();
    icon.src = Icon; icon.id = "icon";
    header.appendChild(icon);
    const heading = document.createElement('h1');
    heading.textContent = "Todo List";
    const author = document.createElement('a');
    author.href = "https://github.com/vk0942";
    const git_icon = document.createElement('img'); git_icon.id = "git_icon";
    git_icon.src = github_icon;
    const name = document.createElement('span');
    name.textContent = "@vk0942";
    author.appendChild(git_icon);
    author.appendChild(name);
    author.id = "author";
    header.appendChild(heading);
    header.appendChild(author);
    return header;
}