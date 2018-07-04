import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';
    // need to update
     meniItem=[
        {
            "name":"Dashboard",
            "link":"dashboard",
            "icon":"fa fa-file"
        },{
            "name":"Posts",
            "link":"post",
            "icon":"fa fa-file"
        },
        {
            "name":"Pages",
            "link":"page",
            "icon":"fa fa-file"
        },
        {
            "name":"Sections",
            "link":"sections",
            "icon":"fa fa-suitcase"
        },
        {
            "name":"Menu",
            "link":"menu",
            "icon":"fa fa-bars"
        },
        {
            "name":"Banner",
            "link":"banner",
            "icon":"fa fa-picture-o"
        },
        {
            "name":"Services",
            "link":"service",
            "icon":"fa fa-folder-o"
        },
        {
            "name":"Projets",
            "link":"project",
            "icon":"fa fa-folder-o"
        },
        {
            "name":"Partners",
            "link":"partners",
            "icon":"fa fa-pencil-square-o"
        },
        {
            "name":"Teams",
            "link":"teams",
            "icon":"fa fa-pencil-square-o"
        },
        {
            "name":"Testimonial",
            "link":"testimonials",
            "icon":"fa fa-pencil-square-o"
        },
        {
            "name":"Appearance",
            "link":"Appearance",
            "icon":"fa fa-eye"
        }
    ]
    constructor() {
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }


    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
