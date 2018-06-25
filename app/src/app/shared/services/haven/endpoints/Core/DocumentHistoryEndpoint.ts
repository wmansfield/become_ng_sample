import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class DocumentHistoryEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getForPrincipalAsync(principal_id:string, skip:number, take:number) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'documenthistorys/for_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      return this.api.execute(request);
   }
   getForFactionAccountAsync(faction_id:string, skip:number, take:number) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'documenthistorys/for_faction_account/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getDocumentHistoryAsync(document_history_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'documenthistorys/{document_history_id}';
      request.resource = request.resource.replace(/{document_history_id}/g, document_history_id.toString());
      return this.api.execute(request);
   }
   getDocumentHistoryBySeatPackageItemAsync(seat_package_item_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'documenthistorys/by_seatpackageitem/{seat_package_item_id}';
      request.resource = request.resource.replace(/{seat_package_item_id}/g, seat_package_item_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createDocumentHistoryAsync(documenthistory:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'documenthistorys';
      request.payload = JSON.stringify(documenthistory);
      return this.api.execute(request);
   }
   updateDocumentHistoryAsync(document_history_id:string, documenthistory:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'documenthistorys/{document_history_id}';
      request.resource = request.resource.replace(/{document_history_id}/g, document_history_id.toString());
      request.payload = JSON.stringify(documenthistory);
      return this.api.execute(request);
   }
   deleteDocumentHistoryAsync(document_history_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'documenthistorys/{document_history_id}';
      request.resource = request.resource.replace(/{document_history_id}/g, document_history_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}