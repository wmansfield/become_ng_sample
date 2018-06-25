import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class SeatPackageEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getDashboardAsync(faction_id:string, history_size:number = 5) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackages/dashboard/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["history_size"] =  history_size;
      return this.api.execute(request);
   }
   getCompletedAsync(faction_id:string, skip:number, take:number) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackages/completed/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      return this.api.execute(request);
   }
   getByPrincipalAsync(principal_id:string, include_removed:boolean, skip:number, take:number) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackages/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["include_removed"] =  include_removed;
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      return this.api.execute(request);
   }
   getByPackageTermAsync(package_id:string, term_id:string, include_removed:boolean, skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackages/by_package_term/{package_id}/{term_id}';
      request.resource = request.resource.replace(/{package_id}/g, package_id.toString());
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["include_removed"] =  include_removed;
      request.params["keyword"] =  keyword;
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getSeatPackageAsync(seat_package_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackages/{seat_package_id}';
      request.resource = request.resource.replace(/{seat_package_id}/g, seat_package_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, term_package_id:any = null, seat_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackages';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["term_package_id"] =  term_package_id;
      request.params["seat_id"] =  seat_id;
      return this.api.execute(request);
   }
   getSeatPackageByTermPackageAsync(term_package_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackages/by_termpackage/{term_package_id}';
      request.resource = request.resource.replace(/{term_package_id}/g, term_package_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   getSeatPackageBySeatAsync(seat_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'seatpackages/by_seat/{seat_id}';
      request.resource = request.resource.replace(/{seat_id}/g, seat_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   createSeatPackageAsync(seatpackage:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'seatpackages';
      request.payload = JSON.stringify(seatpackage);
      return this.api.execute(request);
   }
   updateSeatPackageAsync(seat_package_id:string, seatpackage:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'seatpackages/{seat_package_id}';
      request.resource = request.resource.replace(/{seat_package_id}/g, seat_package_id.toString());
      request.payload = JSON.stringify(seatpackage);
      return this.api.execute(request);
   }
   deleteSeatPackageAsync(seat_package_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'seatpackages/{seat_package_id}';
      request.resource = request.resource.replace(/{seat_package_id}/g, seat_package_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}