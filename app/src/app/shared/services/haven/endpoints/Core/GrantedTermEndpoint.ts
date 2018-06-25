import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class GrantedTermEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getGrantedTermAsync(granted_term_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'grantedterms/{granted_term_id}';
      request.resource = request.resource.replace(/{granted_term_id}/g, granted_term_id.toString());
      return this.api.execute(request);
   }
   getGrantedTermBySeatTypeAsync(seat_type_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'grantedterms/by_seattype/{seat_type_id}';
      request.resource = request.resource.replace(/{seat_type_id}/g, seat_type_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getGrantedTermByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'grantedterms/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createGrantedTermAsync(grantedterm:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'grantedterms';
      request.payload = JSON.stringify(grantedterm);
      return this.api.execute(request);
   }
   updateGrantedTermAsync(granted_term_id:string, grantedterm:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'grantedterms/{granted_term_id}';
      request.resource = request.resource.replace(/{granted_term_id}/g, granted_term_id.toString());
      request.payload = JSON.stringify(grantedterm);
      return this.api.execute(request);
   }
   deleteGrantedTermAsync(granted_term_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'grantedterms/{granted_term_id}';
      request.resource = request.resource.replace(/{granted_term_id}/g, granted_term_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}