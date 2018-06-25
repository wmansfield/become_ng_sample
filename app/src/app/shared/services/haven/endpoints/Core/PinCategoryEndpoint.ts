import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PinCategoryEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getPinCategoryForAccountFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'pincategorys/for_account_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getPinCategoryAsync(pin_category_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'pincategorys/{pin_category_id}';
      request.resource = request.resource.replace(/{pin_category_id}/g, pin_category_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'pincategorys';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      return this.api.execute(request);
   }
   getPinCategoryByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'pincategorys/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createPinCategoryAsync(pincategory:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'pincategorys';
      request.payload = JSON.stringify(pincategory);
      return this.api.execute(request);
   }
   updatePinCategoryAsync(pin_category_id:string, pincategory:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'pincategorys/{pin_category_id}';
      request.resource = request.resource.replace(/{pin_category_id}/g, pin_category_id.toString());
      request.payload = JSON.stringify(pincategory);
      return this.api.execute(request);
   }
   deletePinCategoryAsync(pin_category_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'pincategorys/{pin_category_id}';
      request.resource = request.resource.replace(/{pin_category_id}/g, pin_category_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}