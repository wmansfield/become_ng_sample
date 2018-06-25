import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FeedBackEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getFeedBackAsync(feedback_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feedbacks/{feedback_id}';
      request.resource = request.resource.replace(/{feedback_id}/g, feedback_id.toString());
      return this.api.execute(request);
   }
   getFeedBackByFeedItemAsync(feed_item_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feedbacks/by_feeditem/{feed_item_id}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFeedBackByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feedbacks/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createFeedBackAsync(feedback:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'feedbacks';
      request.payload = JSON.stringify(feedback);
      return this.api.execute(request);
   }
   updateFeedBackAsync(feedback_id:string, feedback:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'feedbacks/{feedback_id}';
      request.resource = request.resource.replace(/{feedback_id}/g, feedback_id.toString());
      request.payload = JSON.stringify(feedback);
      return this.api.execute(request);
   }
   deleteFeedBackAsync(feedback_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'feedbacks/{feedback_id}';
      request.resource = request.resource.replace(/{feedback_id}/g, feedback_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}