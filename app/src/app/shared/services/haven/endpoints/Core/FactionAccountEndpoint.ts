import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FactionAccountEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getFactionAccountAsync(faction_account_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factionaccounts/{faction_account_id}';
      request.resource = request.resource.replace(/{faction_account_id}/g, faction_account_id.toString());
      return this.api.execute(request);
   }
   getFactionAccountByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factionaccounts/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFactionAccountByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factionaccounts/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createFactionAccountAsync(factionaccount:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factionaccounts';
      request.payload = JSON.stringify(factionaccount);
      return this.api.execute(request);
   }
   updateFactionAccountAsync(faction_account_id:string, factionaccount:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'factionaccounts/{faction_account_id}';
      request.resource = request.resource.replace(/{faction_account_id}/g, faction_account_id.toString());
      request.payload = JSON.stringify(factionaccount);
      return this.api.execute(request);
   }
   deleteFactionAccountAsync(faction_account_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'factionaccounts/{faction_account_id}';
      request.resource = request.resource.replace(/{faction_account_id}/g, faction_account_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}