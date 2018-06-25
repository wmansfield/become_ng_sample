import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProductSeatTypeEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getProductSeatTypeAsync(product_seat_type_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'productseattypes/{product_seat_type_id}';
      request.resource = request.resource.replace(/{product_seat_type_id}/g, product_seat_type_id.toString());
      return this.api.execute(request);
   }
   getProductSeatTypeByPlanAsync(plan_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'productseattypes/by_plan/{plan_id}';
      request.resource = request.resource.replace(/{plan_id}/g, plan_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getProductSeatTypeBySeatTypeAsync(seat_type_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'productseattypes/by_seattype/{seat_type_id}';
      request.resource = request.resource.replace(/{seat_type_id}/g, seat_type_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProductSeatTypeAsync(productseattype:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'productseattypes';
      request.payload = JSON.stringify(productseattype);
      return this.api.execute(request);
   }
   updateProductSeatTypeAsync(product_seat_type_id:string, productseattype:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'productseattypes/{product_seat_type_id}';
      request.resource = request.resource.replace(/{product_seat_type_id}/g, product_seat_type_id.toString());
      request.payload = JSON.stringify(productseattype);
      return this.api.execute(request);
   }
   deleteProductSeatTypeAsync(product_seat_type_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'productseattypes/{product_seat_type_id}';
      request.resource = request.resource.replace(/{product_seat_type_id}/g, product_seat_type_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}