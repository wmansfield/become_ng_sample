import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class SeatPackageItemEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getPendingAsync() {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackageitems/for_pending';
      return this.api.execute(request);
   }
   getForSigningAsync(seat_package_item_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackageitems/for_signing';
      request.params["seat_package_item_id"] =  seat_package_item_id;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getSeatPackageItemAsync(seat_package_item_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackageitems/{seat_package_item_id}';
      request.resource = request.resource.replace(/{seat_package_item_id}/g, seat_package_item_id.toString());
      return this.api.execute(request);
   }
   getSeatPackageItemBySeatPackageAsync(seat_package_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackageitems/by_seatpackage/{seat_package_id}';
      request.resource = request.resource.replace(/{seat_package_id}/g, seat_package_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   getSeatPackageItemByPackageItemAsync(package_item_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackageitems/by_packageitem/{package_item_id}';
      request.resource = request.resource.replace(/{package_item_id}/g, package_item_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   createSeatPackageItemAsync(seatpackageitem:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'seatpackageitems';
      request.payload = JSON.stringify(seatpackageitem);
      return this.api.execute(request);
   }
   updateSeatPackageItemAsync(seat_package_item_id:string, seatpackageitem:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'seatpackageitems/{seat_package_item_id}';
      request.resource = request.resource.replace(/{seat_package_item_id}/g, seat_package_item_id.toString());
      request.payload = JSON.stringify(seatpackageitem);
      return this.api.execute(request);
   }
   deleteSeatPackageItemAsync(seat_package_item_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'seatpackageitems/{seat_package_item_id}';
      request.resource = request.resource.replace(/{seat_package_item_id}/g, seat_package_item_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}