import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PromotionConsumptionEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   GenerateExportExcel(faction_id, promotion_id) {
      var path = "/promotionconsumptions/" + faction_id + "/" + promotion_id + "/export_excel";
      return this.api.baseUrl + path;
   }
   // </Extended Methods>

   // <Standard Methods>
   getPromotionConsumptionAsync(promotion_consumption_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'promotionconsumptions/{promotion_consumption_id}';
      request.resource = request.resource.replace(/{promotion_consumption_id}/g, promotion_consumption_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, promotion_id:any = null, account_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'promotionconsumptions';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["promotion_id"] =  promotion_id;
      request.params["account_id"] =  account_id;
      return this.api.execute(request);
   }
   getPromotionConsumptionByPromotionAsync(promotion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'promotionconsumptions/by_promotion/{promotion_id}';
      request.resource = request.resource.replace(/{promotion_id}/g, promotion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPromotionConsumptionByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'promotionconsumptions/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createPromotionConsumptionAsync(promotionconsumption:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'promotionconsumptions';
      request.payload = JSON.stringify(promotionconsumption);
      return this.api.execute(request);
   }
   updatePromotionConsumptionAsync(promotion_consumption_id:string, promotionconsumption:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'promotionconsumptions/{promotion_consumption_id}';
      request.resource = request.resource.replace(/{promotion_consumption_id}/g, promotion_consumption_id.toString());
      request.payload = JSON.stringify(promotionconsumption);
      return this.api.execute(request);
   }
   deletePromotionConsumptionAsync(promotion_consumption_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'promotionconsumptions/{promotion_consumption_id}';
      request.resource = request.resource.replace(/{promotion_consumption_id}/g, promotion_consumption_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}