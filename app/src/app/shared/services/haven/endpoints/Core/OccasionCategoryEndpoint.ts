import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class OccasionCategoryEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getOccasionCategoryAsync(occasion_category_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasioncategorys/{occasion_category_id}';
      request.resource = request.resource.replace(/{occasion_category_id}/g, occasion_category_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasioncategorys';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getOccasionCategoryByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasioncategorys/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   createOccasionCategoryAsync(occasioncategory:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasioncategorys';
      request.payload = JSON.stringify(occasioncategory);
      return this.api.execute(request);
   }
   updateOccasionCategoryAsync(occasion_category_id:string, occasioncategory:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'occasioncategorys/{occasion_category_id}';
      request.resource = request.resource.replace(/{occasion_category_id}/g, occasion_category_id.toString());
      request.payload = JSON.stringify(occasioncategory);
      return this.api.execute(request);
   }
   deleteOccasionCategoryAsync(occasion_category_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'occasioncategorys/{occasion_category_id}';
      request.resource = request.resource.replace(/{occasion_category_id}/g, occasion_category_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}