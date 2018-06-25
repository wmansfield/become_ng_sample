import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PromotionGrantEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getPromotionGrantAsync(promotion_grant_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'promotiongrants/{promotion_grant_id}';
      request.resource = request.resource.replace(/{promotion_grant_id}/g, promotion_grant_id.toString());
      return this.api.execute(request);
   }
   getPromotionGrantByPromotionAsync(promotion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'promotiongrants/by_promotion/{promotion_id}';
      request.resource = request.resource.replace(/{promotion_id}/g, promotion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createPromotionGrantAsync(promotiongrant:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'promotiongrants';
      request.payload = JSON.stringify(promotiongrant);
      return this.api.execute(request);
   }
   updatePromotionGrantAsync(promotion_grant_id:string, promotiongrant:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'promotiongrants/{promotion_grant_id}';
      request.resource = request.resource.replace(/{promotion_grant_id}/g, promotion_grant_id.toString());
      request.payload = JSON.stringify(promotiongrant);
      return this.api.execute(request);
   }
   deletePromotionGrantAsync(promotion_grant_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'promotiongrants/{promotion_grant_id}';
      request.resource = request.resource.replace(/{promotion_grant_id}/g, promotion_grant_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}