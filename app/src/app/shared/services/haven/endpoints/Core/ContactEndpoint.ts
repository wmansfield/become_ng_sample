import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ContactEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getContactAsync(contact_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'contacts/{contact_id}';
      request.resource = request.resource.replace(/{contact_id}/g, contact_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'contacts';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   createContactAsync(contact:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'contacts';
      request.payload = JSON.stringify(contact);
      return this.api.execute(request);
   }
   updateContactAsync(contact_id:string, contact:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'contacts/{contact_id}';
      request.resource = request.resource.replace(/{contact_id}/g, contact_id.toString());
      request.payload = JSON.stringify(contact);
      return this.api.execute(request);
   }
   deleteContactAsync(contact_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'contacts/{contact_id}';
      request.resource = request.resource.replace(/{contact_id}/g, contact_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}