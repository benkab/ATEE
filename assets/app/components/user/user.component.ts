import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user.model";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls : ['./user.component.css']
})
export class UserComponent implements OnInit{

    private users : User[];

    constructor(private userService : UserService){}

    ngOnInit(){
        this.userService.getUsers()
            .subscribe(
                (users: User[]) => {
                    this.users = users;
                }
            );
    }

}