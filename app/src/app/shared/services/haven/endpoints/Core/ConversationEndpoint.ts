import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ConversationEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   startConversationAsync(conversation:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'conversations/start';
      request.payload = JSON.stringify(conversation);
      return this.api.execute(request);
   }
   createMessageAsync(message:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'conversations/add';
      request.payload = JSON.stringify(message);
      return this.api.execute(request);
   }
   addAccountAsync(conversation_id:string, account_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'conversations/{conversation_id}/add_account/{account_id}';
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      return this.api.execute(request);
   }
   findTarget(faction_id:string, take:number = 10, keyword:any = "") {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversations/targets/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["take"] =  take;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   getMessagesUntilAsync(conversation_id:string, take:number = 10) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversations/for_specific/{conversation_id}';
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      request.params["take"] =  take;
      return this.api.execute(request);
   }
   getForFactionAccountAsync(faction_id:string, skip:number = 0, take:number = 10, archived:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversations/for_account/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["archived"] =  archived;
      return this.api.execute(request);
   }
   setViewed(conversation_id:string, message_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'conversations/set_viewed/{conversation_id}/{message_id}';
      request.resource = request.resource.replace(/{message_id}/g, message_id.toString());
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      return this.api.execute(request);
   }
   setArchived(conversation_id:string, archived:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'conversations/set_archived/{conversation_id}/{archived}';
      request.resource = request.resource.replace(/{archived}/g, archived.toString());
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      return this.api.execute(request);
   }
   setFlagged(conversation_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'conversations/set_flagged/{conversation_id}';
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getConversationAsync(conversation_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversations/{conversation_id}';
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      return this.api.execute(request);
   }
   getConversationByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversations/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getConversationByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversations/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createConversationAsync(conversation:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'conversations';
      request.payload = JSON.stringify(conversation);
      return this.api.execute(request);
   }
   updateConversationAsync(conversation_id:string, conversation:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'conversations/{conversation_id}';
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      request.payload = JSON.stringify(conversation);
      return this.api.execute(request);
   }
   deleteConversationAsync(conversation_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'conversations/{conversation_id}';
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}