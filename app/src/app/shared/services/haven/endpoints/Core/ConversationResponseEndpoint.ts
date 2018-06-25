import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ConversationResponseEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getConversationResponseAsync(conversation_id:string, conversation_response_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversationresponses/{conversation_id}/{conversation_response_id}';
      request.resource = request.resource.replace(/{conversation_response_id}/g, conversation_response_id.toString());
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      return this.api.execute(request);
   }
   getConversationResponseByConversationAsync(conversation_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversationresponses/by_conversation/{conversation_id}';
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getConversationResponseByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversationresponses/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createConversationResponseAsync(conversationresponse:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'conversationresponses';
      request.payload = JSON.stringify(conversationresponse);
      return this.api.execute(request);
   }
   updateConversationResponseAsync(conversation_response_id:string, conversationresponse:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'conversationresponses/{conversation_response_id}';
      request.resource = request.resource.replace(/{conversation_response_id}/g, conversation_response_id.toString());
      request.payload = JSON.stringify(conversationresponse);
      return this.api.execute(request);
   }
   deleteConversationResponseAsync(conversation_response_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'conversationresponses/{conversation_response_id}';
      request.resource = request.resource.replace(/{conversation_response_id}/g, conversation_response_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}