import {Component,OnInit , Inject} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material'


@Component({
    selector:'app-affichage',
    templateUrl:'./affichage.component.html',
    styleUrls: ['./affichage.component.scss']
})


export class Affichage implements OnInit{
    ngOnInit(){
        
    }
    constructor(@Inject(MAT_DIALOG_DATA) public data:string) {
        
    }
}
