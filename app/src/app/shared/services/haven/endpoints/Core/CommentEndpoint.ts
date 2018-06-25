import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class CommentEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getCommentsUntilAsync(feed_item_id:string, comment_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'comments/for_specific/{feed_item_id}/{comment_id}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      request.resource = request.resource.replace(/{comment_id}/g, comment_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getCommentAsync(feed_item_id:string, comment_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'comments/{feed_item_id}/{comment_id}';
      request.resource = request.resource.replace(/{comment_id}/g, comment_id.toString());
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      return this.api.execute(request);
   }
   getCommentByFeedItemAsync(feed_item_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'comments/by_feeditem/{feed_item_id}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getCommentByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'comments/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createCommentAsync(comment:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'comments';
      request.payload = JSON.stringify(comment);
      return this.api.execute(request);
   }
   updateCommentAsync(comment_id:string, comment:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'comments/{comment_id}';
      request.resource = request.resource.replace(/{comment_id}/g, comment_id.toString());
      request.payload = JSON.stringify(comment);
      return this.api.execute(request);
   }
   deleteCommentAsync(comment_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'comments/{comment_id}';
      request.resource = request.resource.replace(/{comment_id}/g, comment_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}