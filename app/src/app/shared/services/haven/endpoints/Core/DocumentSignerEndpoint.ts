import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class DocumentSignerEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getDocumentSignerAsync(document_signer_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'documentsigners/{document_signer_id}';
      request.resource = request.resource.replace(/{document_signer_id}/g, document_signer_id.toString());
      return this.api.execute(request);
   }
   getDocumentSignerBySeatPackageItemAsync(seat_package_item_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'documentsigners/by_seatpackageitem/{seat_package_item_id}';
      request.resource = request.resource.replace(/{seat_package_item_id}/g, seat_package_item_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getDocumentSignerByMemberAsync(member_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'documentsigners/by_member/{member_id}';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createDocumentSignerAsync(documentsigner:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'documentsigners';
      request.payload = JSON.stringify(documentsigner);
      return this.api.execute(request);
   }
   updateDocumentSignerAsync(document_signer_id:string, documentsigner:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'documentsigners/{document_signer_id}';
      request.resource = request.resource.replace(/{document_signer_id}/g, document_signer_id.toString());
      request.payload = JSON.stringify(documentsigner);
      return this.api.execute(request);
   }
   deleteDocumentSignerAsync(document_signer_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'documentsigners/{document_signer_id}';
      request.resource = request.resource.replace(/{document_signer_id}/g, document_signer_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}