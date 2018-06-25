import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class BulletinResponseEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getBulletinResponseAsync(bulletin_id:string, bulletin_response_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletinresponses/{bulletin_id}/{bulletin_response_id}';
      request.resource = request.resource.replace(/{bulletin_response_id}/g, bulletin_response_id.toString());
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      return this.api.execute(request);
   }
   getBulletinResponseByBulletinAsync(bulletin_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletinresponses/by_bulletin/{bulletin_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getBulletinResponseByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletinresponses/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createBulletinResponseAsync(bulletinresponse:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletinresponses';
      request.payload = JSON.stringify(bulletinresponse);
      return this.api.execute(request);
   }
   updateBulletinResponseAsync(bulletin_response_id:string, bulletinresponse:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'bulletinresponses/{bulletin_response_id}';
      request.resource = request.resource.replace(/{bulletin_response_id}/g, bulletin_response_id.toString());
      request.payload = JSON.stringify(bulletinresponse);
      return this.api.execute(request);
   }
   deleteBulletinResponseAsync(bulletin_response_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'bulletinresponses/{bulletin_response_id}';
      request.resource = request.resource.replace(/{bulletin_response_id}/g, bulletin_response_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}