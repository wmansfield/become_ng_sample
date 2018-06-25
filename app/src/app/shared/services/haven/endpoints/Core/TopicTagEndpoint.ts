import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class TopicTagEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getTopicTagAsync(topic_tag_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topictags/{topic_tag_id}';
      request.resource = request.resource.replace(/{topic_tag_id}/g, topic_tag_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, topic_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topictags';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["topic_id"] =  topic_id;
      return this.api.execute(request);
   }
   getTopicTagByTopicAsync(topic_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topictags/by_topic/{topic_id}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createTopicTagAsync(topictag:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'topictags';
      request.payload = JSON.stringify(topictag);
      return this.api.execute(request);
   }
   updateTopicTagAsync(topic_tag_id:string, topictag:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'topictags/{topic_tag_id}';
      request.resource = request.resource.replace(/{topic_tag_id}/g, topic_tag_id.toString());
      request.payload = JSON.stringify(topictag);
      return this.api.execute(request);
   }
   deleteTopicTagAsync(topic_tag_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'topictags/{topic_tag_id}';
      request.resource = request.resource.replace(/{topic_tag_id}/g, topic_tag_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}