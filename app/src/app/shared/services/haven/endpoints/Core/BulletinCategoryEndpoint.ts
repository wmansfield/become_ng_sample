import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class BulletinCategoryEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getBulletinCategoryForFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletincategorys/for_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getBulletinCategoryAsync(bulletin_category_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletincategorys/{bulletin_category_id}';
      request.resource = request.resource.replace(/{bulletin_category_id}/g, bulletin_category_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletincategorys';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      return this.api.execute(request);
   }
   getBulletinCategoryByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletincategorys/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createBulletinCategoryAsync(bulletincategory:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletincategorys';
      request.payload = JSON.stringify(bulletincategory);
      return this.api.execute(request);
   }
   updateBulletinCategoryAsync(bulletin_category_id:string, bulletincategory:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'bulletincategorys/{bulletin_category_id}';
      request.resource = request.resource.replace(/{bulletin_category_id}/g, bulletin_category_id.toString());
      request.payload = JSON.stringify(bulletincategory);
      return this.api.execute(request);
   }
   updateBulletinCategoryPriorityAsync(bulletin_category_id:string, priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletincategorys/{bulletin_category_id}/update_priority/{priority}';
      request.resource = request.resource.replace(/{bulletin_category_id}/g, bulletin_category_id.toString());
      request.resource = request.resource.replace(/{priority}/g, priority.toString().toString());
      return this.api.execute(request);
   }
   deleteBulletinCategoryAsync(bulletin_category_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'bulletincategorys/{bulletin_category_id}';
      request.resource = request.resource.replace(/{bulletin_category_id}/g, bulletin_category_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}