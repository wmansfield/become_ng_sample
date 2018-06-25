import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class NotificationEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getNotificationForFactionAccount(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'notifications/for_account_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getNotificationAsync(notification_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'notifications/{notification_id}';
      request.resource = request.resource.replace(/{notification_id}/g, notification_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'notifications';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      return this.api.execute(request);
   }
   getNotificationByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'notifications/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createNotificationAsync(notification:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'notifications';
      request.payload = JSON.stringify(notification);
      return this.api.execute(request);
   }
   updateNotificationAsync(notification_id:string, notification:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'notifications/{notification_id}';
      request.resource = request.resource.replace(/{notification_id}/g, notification_id.toString());
      request.payload = JSON.stringify(notification);
      return this.api.execute(request);
   }
   deleteNotificationAsync(notification_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'notifications/{notification_id}';
      request.resource = request.resource.replace(/{notification_id}/g, notification_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}