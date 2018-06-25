export class HavenRequest {
    method:string;
    resource:string;
    payload:string;
    params:any;

    constructor(){
        this.params = {};
     }
 }