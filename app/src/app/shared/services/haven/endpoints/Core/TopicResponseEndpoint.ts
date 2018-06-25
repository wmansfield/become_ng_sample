import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class TopicResponseEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getTopicResponseAsync(topic_id:string, topic_response_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topicresponses/{topic_id}/{topic_response_id}';
      request.resource = request.resource.replace(/{topic_response_id}/g, topic_response_id.toString());
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      return this.api.execute(request);
   }
   getTopicResponseByTopicAsync(topic_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topicresponses/by_topic/{topic_id}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getTopicResponseByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topicresponses/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createTopicResponseAsync(topicresponse:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'topicresponses';
      request.payload = JSON.stringify(topicresponse);
      return this.api.execute(request);
   }
   updateTopicResponseAsync(topic_response_id:string, topicresponse:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'topicresponses/{topic_response_id}';
      request.resource = request.resource.replace(/{topic_response_id}/g, topic_response_id.toString());
      request.payload = JSON.stringify(topicresponse);
      return this.api.execute(request);
   }
   deleteTopicResponseAsync(topic_response_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'topicresponses/{topic_response_id}';
      request.resource = request.resource.replace(/{topic_response_id}/g, topic_response_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}