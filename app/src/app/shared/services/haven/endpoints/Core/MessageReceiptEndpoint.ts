import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class MessageReceiptEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getMessageReceiptAsync(message_receipt_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'messagereceipts/{message_receipt_id}';
      request.resource = request.resource.replace(/{message_receipt_id}/g, message_receipt_id.toString());
      return this.api.execute(request);
   }
   getMessageReceiptByMessageAsync(message_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'messagereceipts/by_message/{message_id}';
      request.resource = request.resource.replace(/{message_id}/g, message_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getMessageReceiptByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'messagereceipts/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createMessageReceiptAsync(messagereceipt:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'messagereceipts';
      request.payload = JSON.stringify(messagereceipt);
      return this.api.execute(request);
   }
   updateMessageReceiptAsync(message_receipt_id:string, messagereceipt:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'messagereceipts/{message_receipt_id}';
      request.resource = request.resource.replace(/{message_receipt_id}/g, message_receipt_id.toString());
      request.payload = JSON.stringify(messagereceipt);
      return this.api.execute(request);
   }
   deleteMessageReceiptAsync(message_receipt_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'messagereceipts/{message_receipt_id}';
      request.resource = request.resource.replace(/{message_receipt_id}/g, message_receipt_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}