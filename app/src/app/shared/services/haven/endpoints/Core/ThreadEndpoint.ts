import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ThreadEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   startThreadAsync(thread:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'threads/start';
      request.payload = JSON.stringify(thread);
      return this.api.execute(request);
   }
   getForFactionAccount(thread_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'threads/for_faction_account/{thread_id}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      return this.api.execute(request);
   }
   getByTopicAccount(topic_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, favorite:boolean = false, disabled:boolean = false, topic_tag_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'threads/by_topic_account/{topic_id}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["favorite"] =  favorite;
      request.params["disabled"] =  disabled;
      request.params["topic_tag_id"] =  topic_tag_id == null ? "" : topic_tag_id;
      return this.api.execute(request);
   }
   getRecent(faction_id:string, skip:number = 0, take:number = 10, topic_tag_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'threads/recent/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["topic_tag_id"] =  topic_tag_id == null ? "" : topic_tag_id;
      return this.api.execute(request);
   }
   setFollow(thread_id:string, favorite:boolean, subscribe:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'threads/set_follow/{thread_id}/{favorite}/{subscribe}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.resource = request.resource.replace(/{favorite}/g, favorite.toString());
      request.resource = request.resource.replace(/{subscribe}/g, subscribe.toString());
      return this.api.execute(request);
   }
   setSticky(thread_id:string, sticky:boolean, sticky_priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'threads/set_sticky/{thread_id}/{sticky}/{sticky_priority}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.resource = request.resource.replace(/{sticky}/g, sticky.toString());
      request.resource = request.resource.replace(/{sticky_priority}/g, sticky_priority.toString());
      return this.api.execute(request);
   }
   changeThreadAsync(thread_id:string, thread:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'threads/change/{thread_id}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.payload = JSON.stringify(thread);
      return this.api.execute(request);
   }
   changeThreadStickyPriorityAsync(thread_id:string, priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'threads/{thread_id}/change_sticky_priority/{priority}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.resource = request.resource.replace(/{priority}/g, priority.toString().toString());
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getThreadAsync(thread_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'threads/{thread_id}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      return this.api.execute(request);
   }
   getThreadByTopicAsync(topic_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'threads/by_topic/{topic_id}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   getThreadByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'threads/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   getThreadByReplyThreadAsync(thread_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'threads/by_replythread/{thread_id}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   createThreadAsync(thread:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'threads';
      request.payload = JSON.stringify(thread);
      return this.api.execute(request);
   }
   updateThreadAsync(thread_id:string, thread:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'threads/{thread_id}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.payload = JSON.stringify(thread);
      return this.api.execute(request);
   }
   updateThreadStickyPriorityAsync(thread_id:string, priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'threads/{thread_id}/update_sticky_priority/{priority}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.resource = request.resource.replace(/{priority}/g, priority.toString().toString());
      return this.api.execute(request);
   }
   updateThreadRankAsync(thread_id:string, priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'threads/{thread_id}/update_rank/{priority}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      request.resource = request.resource.replace(/{priority}/g, priority.toString().toString());
      return this.api.execute(request);
   }
   deleteThreadAsync(thread_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'threads/{thread_id}';
      request.resource = request.resource.replace(/{thread_id}/g, thread_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}