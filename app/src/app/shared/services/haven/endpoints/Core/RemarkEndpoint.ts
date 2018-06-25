import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class RemarkEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getRemarksUntilAsync(bulletin_id:string, remark_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'remarks/for_specific/{bulletin_id}/{remark_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.resource = request.resource.replace(/{remark_id}/g, remark_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getRemarkAsync(bulletin_id:string, remark_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'remarks/{bulletin_id}/{remark_id}';
      request.resource = request.resource.replace(/{remark_id}/g, remark_id.toString());
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      return this.api.execute(request);
   }
   getRemarkByBulletinAsync(bulletin_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'remarks/by_bulletin/{bulletin_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getRemarkByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'remarks/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createRemarkAsync(remark:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'remarks';
      request.payload = JSON.stringify(remark);
      return this.api.execute(request);
   }
   updateRemarkAsync(remark_id:string, remark:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'remarks/{remark_id}';
      request.resource = request.resource.replace(/{remark_id}/g, remark_id.toString());
      request.payload = JSON.stringify(remark);
      return this.api.execute(request);
   }
   deleteRemarkAsync(remark_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'remarks/{remark_id}';
      request.resource = request.resource.replace(/{remark_id}/g, remark_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}