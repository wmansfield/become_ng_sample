import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class RemarkReplyEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getRemarkReplyAsync(bulletin_id_ref:string, remark_id:string, remark_reply_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'remarkreplys/{bulletin_id_ref}/{remark_id}/{remark_reply_id}';
      request.resource = request.resource.replace(/{remark_reply_id}/g, remark_reply_id.toString());
      request.resource = request.resource.replace(/{remark_id}/g, remark_id.toString());
      request.resource = request.resource.replace(/{bulletin_id_ref}/g, bulletin_id_ref.toString());
      return this.api.execute(request);
   }
   getRemarkReplyByRemarkAsync(remark_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'remarkreplys/by_remark/{remark_id}';
      request.resource = request.resource.replace(/{remark_id}/g, remark_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getRemarkReplyByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'remarkreplys/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createRemarkReplyAsync(remarkreply:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'remarkreplys';
      request.payload = JSON.stringify(remarkreply);
      return this.api.execute(request);
   }
   updateRemarkReplyAsync(remark_reply_id:string, remarkreply:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'remarkreplys/{remark_reply_id}';
      request.resource = request.resource.replace(/{remark_reply_id}/g, remark_reply_id.toString());
      request.payload = JSON.stringify(remarkreply);
      return this.api.execute(request);
   }
   deleteRemarkReplyAsync(remark_reply_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'remarkreplys/{remark_reply_id}';
      request.resource = request.resource.replace(/{remark_reply_id}/g, remark_reply_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}