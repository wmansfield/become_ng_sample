import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ConversationReceiptEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getConversationReceiptAsync(conversation_receipt_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversationreceipts/{conversation_receipt_id}';
      request.resource = request.resource.replace(/{conversation_receipt_id}/g, conversation_receipt_id.toString());
      return this.api.execute(request);
   }
   getConversationReceiptByConversationAsync(conversation_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversationreceipts/by_conversation/{conversation_id}';
      request.resource = request.resource.replace(/{conversation_id}/g, conversation_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getConversationReceiptByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'conversationreceipts/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createConversationReceiptAsync(conversationreceipt:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'conversationreceipts';
      request.payload = JSON.stringify(conversationreceipt);
      return this.api.execute(request);
   }
   updateConversationReceiptAsync(conversation_receipt_id:string, conversationreceipt:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'conversationreceipts/{conversation_receipt_id}';
      request.resource = request.resource.replace(/{conversation_receipt_id}/g, conversation_receipt_id.toString());
      request.payload = JSON.stringify(conversationreceipt);
      return this.api.execute(request);
   }
   deleteConversationReceiptAsync(conversation_receipt_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'conversationreceipts/{conversation_receipt_id}';
      request.resource = request.resource.replace(/{conversation_receipt_id}/g, conversation_receipt_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}