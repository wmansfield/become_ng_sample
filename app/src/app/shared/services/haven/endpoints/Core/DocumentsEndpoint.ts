import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class DocumentsEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   signAsync(seat_package_item_id:string, allow_remind:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'documents/sign/{seat_package_item_id}/{allow_remind}';
      request.resource = request.resource.replace(/{seat_package_item_id}/g, seat_package_item_id.toString());
      request.resource = request.resource.replace(/{allow_remind}/g, allow_remind.toString());
      return this.api.execute(request);
   }
   GenerateDownloadUrl(seat_package_item_id, download) {
      var path = "/documents/downloadsigned/" + seat_package_item_id + "?download=" + download;
      return this.api.baseUrl + path;
   }
   // </Standard Methods>
}