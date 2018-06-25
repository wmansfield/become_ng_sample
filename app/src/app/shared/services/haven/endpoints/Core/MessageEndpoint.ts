import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class MessageEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   setViewed(message_id:string, viewed:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'messages/set_viewed/{message_id}/{viewed}';
      request.resource = request.resource.replace(/{message_id}/g, message_id.toString());
      request.resource = request.resource.replace(/{viewed}/g, viewed.toString());
      return this.api.execute(request);
   }
   getNewMessageByConversationAsync(conversation_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, before_stamp_utc:any = null, equal_or_after_stamp_utc:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'messages/new_by_conversation/{conversation_id}';
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["before_stamp_utc"] =  before_stamp_utc;
      request.params["equal_or_after_stamp_utc"] =  equal_or_after_stamp_utc;
      return this.api.execute(request);
   }
   getMessagesUntilAsync(conversation_id:string, message_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'messages/for_specific/{conversation_id}/{message_id}';
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      request.resource = request.resource.replace(/{message_id}/g, message_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getMessageAsync(conversation_id:string, message_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'messages/{conversation_id}/{message_id}';
      request.resource = request.resource.replace(/{message_id}/g, message_id.toString());
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      return this.api.execute(request);
   }
   getMessageByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, before_stamp_utc:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'messages/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["before_stamp_utc"] =  before_stamp_utc;
      return this.api.execute(request);
   }
   getMessageByConversationAsync(conversation_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, before_stamp_utc:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'messages/by_conversation/{conversation_id}';
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["before_stamp_utc"] =  before_stamp_utc;
      return this.api.execute(request);
   }
   createMessageAsync(message:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'messages';
      request.payload = JSON.stringify(message);
      return this.api.execute(request);
   }
   updateMessageAsync(message_id:string, message:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'messages/{message_id}';
      request.resource = request.resource.replace(/{message_id}/g, message_id.toString());
      request.payload = JSON.stringify(message);
      return this.api.execute(request);
   }
   deleteMessageAsync(message_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'messages/{message_id}';
      request.resource = request.resource.replace(/{message_id}/g, message_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}