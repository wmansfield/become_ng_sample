import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class OccasionRemarkEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getOccasionRemarksAsync(occasion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionremarks/for_occasion/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getOccasionRemarksUntilAsync(occasion_id:string, occasion_remark_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionremarks/for_specific/{occasion_id}/{occasion_remark_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.resource = request.resource.replace(/{occasion_remark_id}/g, occasion_remark_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   dismissRemark(occasion_remark_id:string, dismiss:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasionremarks/{occasion_remark_id}/{dismiss}';
      request.resource = request.resource.replace(/{occasion_remark_id}/g, occasion_remark_id.toString());
      request.resource = request.resource.replace(/{dismiss}/g, dismiss.toString());
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getOccasionRemarkAsync(occasion_remark_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionremarks/{occasion_remark_id}';
      request.resource = request.resource.replace(/{occasion_remark_id}/g, occasion_remark_id.toString());
      return this.api.execute(request);
   }
   getOccasionRemarkByOccasionAsync(occasion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionremarks/by_occasion/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getOccasionRemarkByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasionremarks/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createOccasionRemarkAsync(occasionremark:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasionremarks';
      request.payload = JSON.stringify(occasionremark);
      return this.api.execute(request);
   }
   updateOccasionRemarkAsync(occasion_remark_id:string, occasionremark:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'occasionremarks/{occasion_remark_id}';
      request.resource = request.resource.replace(/{occasion_remark_id}/g, occasion_remark_id.toString());
      request.payload = JSON.stringify(occasionremark);
      return this.api.execute(request);
   }
   deleteOccasionRemarkAsync(occasion_remark_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'occasionremarks/{occasion_remark_id}';
      request.resource = request.resource.replace(/{occasion_remark_id}/g, occasion_remark_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}