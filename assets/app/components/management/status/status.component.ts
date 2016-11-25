import {Component, OnInit} from '@angular/core';
import {Status} from "./status.model";
import {StatusService} from "./status.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'status',
    templateUrl: 'status.component.html',
    styleUrls : ['status.component.css'],
    providers : [StatusService]
})
export class StatusComponent  implements OnInit{

    private status : Status[];

    constructor(private statusService: StatusService){}

    ngOnInit(){

        this.statusService.getStatus()
            .subscribe(
                (status: Status[]) => {
                    this.status = status
                }
            );
    }

    onSubmit(form: NgForm){

        const status = new Status(form.value.description);
        this.statusService.createStatus(status)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );

        form.resetForm();
    }
}