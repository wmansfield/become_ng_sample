import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProductEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getProductAsync(product_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'products/{product_id}';
      request.resource = request.resource.replace(/{product_id}/g, product_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'products';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      return this.api.execute(request);
   }
   getProductByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'products/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProductAsync(product:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'products';
      request.payload = JSON.stringify(product);
      return this.api.execute(request);
   }
   updateProductAsync(product_id:string, product:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'products/{product_id}';
      request.resource = request.resource.replace(/{product_id}/g, product_id.toString());
      request.payload = JSON.stringify(product);
      return this.api.execute(request);
   }
   deleteProductAsync(product_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'products/{product_id}';
      request.resource = request.resource.replace(/{product_id}/g, product_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}