import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PinEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   ensurePinAsync(pin:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'pins/ensure';
      request.payload = JSON.stringify(pin);
      return this.api.execute(request);
   }
   removePinAsync(pin:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'pins/remove';
      request.payload = JSON.stringify(pin);
      return this.api.execute(request);
   }
   movePinAsync(pin:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'pins/move';
      request.payload = JSON.stringify(pin);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getPinAsync(pin_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'pins/{pin_id}';
      request.resource = request.resource.replace(/{pin_id}/g, pin_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, pin_category_id:any = null, bulletin_id:any = null, form_id:any = null, feed_item_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'pins';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["pin_category_id"] =  pin_category_id;
      request.params["bulletin_id"] =  bulletin_id;
      request.params["form_id"] =  form_id;
      request.params["feed_item_id"] =  feed_item_id;
      return this.api.execute(request);
   }
   getPinByPinCategoryAsync(pin_category_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'pins/by_pincategory/{pin_category_id}';
      request.resource = request.resource.replace(/{pin_category_id}/g, pin_category_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPinByBulletinAsync(bulletin_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'pins/by_bulletin/{bulletin_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPinByFormAsync(form_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'pins/by_form/{form_id}';
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPinByFeedItemAsync(feed_item_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'pins/by_feeditem/{feed_item_id}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createPinAsync(pin:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'pins';
      request.payload = JSON.stringify(pin);
      return this.api.execute(request);
   }
   updatePinAsync(pin_id:string, pin:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'pins/{pin_id}';
      request.resource = request.resource.replace(/{pin_id}/g, pin_id.toString());
      request.payload = JSON.stringify(pin);
      return this.api.execute(request);
   }
   deletePinAsync(pin_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'pins/{pin_id}';
      request.resource = request.resource.replace(/{pin_id}/g, pin_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}