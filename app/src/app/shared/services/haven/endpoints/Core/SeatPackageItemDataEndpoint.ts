import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class SeatPackageItemDataEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getSeatPackageItemDataAsync(seat_package_item_data_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackageitemdatas/{seat_package_item_data_id}';
      request.resource = request.resource.replace(/{seat_package_item_data_id}/g, seat_package_item_data_id.toString());
      return this.api.execute(request);
   }
   getSeatPackageItemDataBySeatPackageItemAsync(seat_package_item_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackageitemdatas/by_seatpackageitem/{seat_package_item_id}';
      request.resource = request.resource.replace(/{seat_package_item_id}/g, seat_package_item_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createSeatPackageItemDataAsync(seatpackageitemdata:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'seatpackageitemdatas';
      request.payload = JSON.stringify(seatpackageitemdata);
      return this.api.execute(request);
   }
   updateSeatPackageItemDataAsync(seat_package_item_data_id:string, seatpackageitemdata:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'seatpackageitemdatas/{seat_package_item_data_id}';
      request.resource = request.resource.replace(/{seat_package_item_data_id}/g, seat_package_item_data_id.toString());
      request.payload = JSON.stringify(seatpackageitemdata);
      return this.api.execute(request);
   }
   deleteSeatPackageItemDataAsync(seat_package_item_data_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'seatpackageitemdatas/{seat_package_item_data_id}';
      request.resource = request.resource.replace(/{seat_package_item_data_id}/g, seat_package_item_data_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}