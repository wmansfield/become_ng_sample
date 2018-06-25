import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PromotionEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getPromotionAsync(promotion_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'promotions/{promotion_id}';
      request.resource = request.resource.replace(/{promotion_id}/g, promotion_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, enabled:any = true) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'promotions';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["enabled"] =  enabled;
      return this.api.execute(request);
   }
   getPromotionByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, enabled:any = true) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'promotions/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["enabled"] =  enabled;
      return this.api.execute(request);
   }
   createPromotionAsync(promotion:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'promotions';
      request.payload = JSON.stringify(promotion);
      return this.api.execute(request);
   }
   updatePromotionAsync(promotion_id:string, promotion:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'promotions/{promotion_id}';
      request.resource = request.resource.replace(/{promotion_id}/g, promotion_id.toString());
      request.payload = JSON.stringify(promotion);
      return this.api.execute(request);
   }
   deletePromotionAsync(promotion_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'promotions/{promotion_id}';
      request.resource = request.resource.replace(/{promotion_id}/g, promotion_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}