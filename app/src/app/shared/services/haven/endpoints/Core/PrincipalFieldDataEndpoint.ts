import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PrincipalFieldDataEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getPrincipalFieldDataAsync(principal_id:string, principal_field_data_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principalfielddatas/{principal_id}/{principal_field_data_id}';
      request.resource = request.resource.replace(/{principal_field_data_id}/g, principal_field_data_id.toString());
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, principal_field_id:any = null, principal_id:any = null, staff:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principalfielddatas';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["principal_field_id"] =  principal_field_id;
      request.params["principal_id"] =  principal_id;
      request.params["staff"] =  staff;
      return this.api.execute(request);
   }
   getPrincipalFieldDataByPrincipalFieldAsync(principal_field_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, staff:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principalfielddatas/by_principalfield/{principal_field_id}';
      request.resource = request.resource.replace(/{principal_field_id}/g, principal_field_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["staff"] =  staff;
      return this.api.execute(request);
   }
   getPrincipalFieldDataByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, staff:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'principalfielddatas/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["staff"] =  staff;
      return this.api.execute(request);
   }
   createPrincipalFieldDataAsync(principalfielddata:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'principalfielddatas';
      request.payload = JSON.stringify(principalfielddata);
      return this.api.execute(request);
   }
   updatePrincipalFieldDataAsync(principal_field_data_id:string, principalfielddata:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'principalfielddatas/{principal_field_data_id}';
      request.resource = request.resource.replace(/{principal_field_data_id}/g, principal_field_data_id.toString());
      request.payload = JSON.stringify(principalfielddata);
      return this.api.execute(request);
   }
   deletePrincipalFieldDataAsync(principal_field_data_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'principalfielddatas/{principal_field_data_id}';
      request.resource = request.resource.replace(/{principal_field_data_id}/g, principal_field_data_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}