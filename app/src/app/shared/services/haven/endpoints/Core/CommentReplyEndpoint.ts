import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class CommentReplyEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getCommentReplyAsync(feed_item_id_ref:string, comment_id:string, comment_reply_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'commentreplys/{feed_item_id_ref}/{comment_id}/{comment_reply_id}';
      request.resource = request.resource.replace(/{comment_reply_id}/g, comment_reply_id.toString());
      request.resource = request.resource.replace(/{comment_id}/g, comment_id.toString());
      request.resource = request.resource.replace(/{feed_item_id_ref}/g, feed_item_id_ref.toString());
      return this.api.execute(request);
   }
   getCommentReplyByCommentAsync(comment_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'commentreplys/by_comment/{comment_id}';
      request.resource = request.resource.replace(/{comment_id}/g, comment_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getCommentReplyByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'commentreplys/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createCommentReplyAsync(commentreply:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'commentreplys';
      request.payload = JSON.stringify(commentreply);
      return this.api.execute(request);
   }
   updateCommentReplyAsync(comment_reply_id:string, commentreply:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'commentreplys/{comment_reply_id}';
      request.resource = request.resource.replace(/{comment_reply_id}/g, comment_reply_id.toString());
      request.payload = JSON.stringify(commentreply);
      return this.api.execute(request);
   }
   deleteCommentReplyAsync(comment_reply_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'commentreplys/{comment_reply_id}';
      request.resource = request.resource.replace(/{comment_reply_id}/g, comment_reply_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}