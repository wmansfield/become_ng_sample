import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class TopicDesignationEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getTopicDesignationAsync(topic_id:string, topic_designation_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topicdesignations/{topic_id}/{topic_designation_id}';
      request.resource = request.resource.replace(/{topic_designation_id}/g, topic_designation_id.toString());
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      return this.api.execute(request);
   }
   getTopicDesignationByTopicAsync(topic_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topicdesignations/by_topic/{topic_id}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getTopicDesignationByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topicdesignations/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createTopicDesignationAsync(topicdesignation:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'topicdesignations';
      request.payload = JSON.stringify(topicdesignation);
      return this.api.execute(request);
   }
   updateTopicDesignationAsync(topic_designation_id:string, topicdesignation:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'topicdesignations/{topic_designation_id}';
      request.resource = request.resource.replace(/{topic_designation_id}/g, topic_designation_id.toString());
      request.payload = JSON.stringify(topicdesignation);
      return this.api.execute(request);
   }
   deleteTopicDesignationAsync(topic_designation_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'topicdesignations/{topic_designation_id}';
      request.resource = request.resource.replace(/{topic_designation_id}/g, topic_designation_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}