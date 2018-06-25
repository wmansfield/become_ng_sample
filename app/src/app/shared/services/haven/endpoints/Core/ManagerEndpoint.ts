import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ManagerEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   changeTypeAsync(manager_id:string, manager_type:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'managers/{manager_id}/type/{manager_type}';
      request.resource = request.resource.replace(/{manager_id}/g, manager_id.toString());
      request.resource = request.resource.replace(/{manager_type}/g, manager_type.toString());
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getManagerAsync(manager_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'managers/{manager_id}';
      request.resource = request.resource.replace(/{manager_id}/g, manager_id.toString());
      return this.api.execute(request);
   }
   getManagerByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'managers/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getManagerByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'managers/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createManagerAsync(manager:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'managers';
      request.payload = JSON.stringify(manager);
      return this.api.execute(request);
   }
   updateManagerAsync(manager_id:string, manager:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'managers/{manager_id}';
      request.resource = request.resource.replace(/{manager_id}/g, manager_id.toString());
      request.payload = JSON.stringify(manager);
      return this.api.execute(request);
   }
   deleteManagerAsync(manager_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'managers/{manager_id}';
      request.resource = request.resource.replace(/{manager_id}/g, manager_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}