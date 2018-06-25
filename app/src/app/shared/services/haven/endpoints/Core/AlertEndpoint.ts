import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AlertEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   findForAccount(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, dismissed:any = true, level:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'alerts/for_account';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["dismissed"] =  dismissed;
      request.params["level"] =  level;
      return this.api.execute(request);
   }
   findForAccountFaction(faction_id:string, skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, dismissed:any = true, level:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'alerts/for_account_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["dismissed"] =  dismissed;
      request.params["level"] =  level;
      return this.api.execute(request);
   }
   dismissAllForFactionAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'alerts/dismiss_for_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getAlertAsync(alert_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'alerts/{alert_id}';
      request.resource = request.resource.replace(/{alert_id}/g, alert_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, dismissed:any = true, level:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'alerts';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["dismissed"] =  dismissed;
      request.params["level"] =  level;
      return this.api.execute(request);
   }
   getAlertByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, dismissed:any = true, level:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'alerts/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["dismissed"] =  dismissed;
      request.params["level"] =  level;
      return this.api.execute(request);
   }
   createAlertAsync(alert:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'alerts';
      request.payload = JSON.stringify(alert);
      return this.api.execute(request);
   }
   updateAlertAsync(alert_id:string, alert:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'alerts/{alert_id}';
      request.resource = request.resource.replace(/{alert_id}/g, alert_id.toString());
      request.payload = JSON.stringify(alert);
      return this.api.execute(request);
   }
   deleteAlertAsync(alert_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'alerts/{alert_id}';
      request.resource = request.resource.replace(/{alert_id}/g, alert_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}