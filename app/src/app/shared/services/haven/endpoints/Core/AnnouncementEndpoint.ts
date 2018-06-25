import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AnnouncementEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getAnnouncementAsync(announcement_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'announcements/{announcement_id}';
      request.resource = request.resource.replace(/{announcement_id}/g, announcement_id.toString());
      return this.api.execute(request);
   }
   getAnnouncementByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'announcements/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAnnouncementByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'announcements/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAnnouncementByGroupAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'announcements/by_group/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAnnouncementByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'announcements/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAnnouncementByGroupIgnoreAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'announcements/by_groupignore/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAnnouncementByOccasionAsync(occasion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'announcements/by_occasion/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAnnouncementByBulletinAsync(bulletin_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'announcements/by_bulletin/{bulletin_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createAnnouncementAsync(announcement:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'announcements';
      request.payload = JSON.stringify(announcement);
      return this.api.execute(request);
   }
   updateAnnouncementAsync(announcement_id:string, announcement:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'announcements/{announcement_id}';
      request.resource = request.resource.replace(/{announcement_id}/g, announcement_id.toString());
      request.payload = JSON.stringify(announcement);
      return this.api.execute(request);
   }
   deleteAnnouncementAsync(announcement_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'announcements/{announcement_id}';
      request.resource = request.resource.replace(/{announcement_id}/g, announcement_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}