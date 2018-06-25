import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class NamingEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getNamingAsync(naming_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'namings/{naming_id}';
      request.resource = request.resource.replace(/{naming_id}/g, naming_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'namings';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   createNamingAsync(naming:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'namings';
      request.payload = JSON.stringify(naming);
      return this.api.execute(request);
   }
   updateNamingAsync(naming_id:string, naming:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'namings/{naming_id}';
      request.resource = request.resource.replace(/{naming_id}/g, naming_id.toString());
      request.payload = JSON.stringify(naming);
      return this.api.execute(request);
   }
   deleteNamingAsync(naming_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'namings/{naming_id}';
      request.resource = request.resource.replace(/{naming_id}/g, naming_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}