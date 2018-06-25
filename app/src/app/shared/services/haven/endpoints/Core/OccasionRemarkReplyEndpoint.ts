import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class OccasionRemarkReplyEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getOccasionRemarkReplyAsync(occasion_remark_reply_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionremarkreplys/{occasion_remark_reply_id}';
      request.resource = request.resource.replace(/{occasion_remark_reply_id}/g, occasion_remark_reply_id.toString());
      return this.api.execute(request);
   }
   getOccasionRemarkReplyByOccasionRemarkAsync(occasion_remark_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionremarkreplys/by_occasionremark/{occasion_remark_id}';
      request.resource = request.resource.replace(/{occasion_remark_id}/g, occasion_remark_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getOccasionRemarkReplyByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionremarkreplys/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createOccasionRemarkReplyAsync(occasionremarkreply:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasionremarkreplys';
      request.payload = JSON.stringify(occasionremarkreply);
      return this.api.execute(request);
   }
   updateOccasionRemarkReplyAsync(occasion_remark_reply_id:string, occasionremarkreply:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'occasionremarkreplys/{occasion_remark_reply_id}';
      request.resource = request.resource.replace(/{occasion_remark_reply_id}/g, occasion_remark_reply_id.toString());
      request.payload = JSON.stringify(occasionremarkreply);
      return this.api.execute(request);
   }
   deleteOccasionRemarkReplyAsync(occasion_remark_reply_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'occasionremarkreplys/{occasion_remark_reply_id}';
      request.resource = request.resource.replace(/{occasion_remark_reply_id}/g, occasion_remark_reply_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}