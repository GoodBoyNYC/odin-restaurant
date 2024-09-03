import { home } from './home.js';
import { about } from './about.js'; 
import { menu } from './menu.js';

const btnNav = document.querySelectorAll('nav button');

btnNav.forEach(btn => {
    btn.addEventListener('click', () => {
        switch (btn.textContent) {
            case 'Home':
                console.log("Snow");
                home();
                break;
            case 'About':
                console.log("Dogs");
                about();
                break;
            case 'Menu':
                console.log("Birds");
                menu();
                break;
            default:
                // Code for handling other button clicks
                break;
        }
    });
})