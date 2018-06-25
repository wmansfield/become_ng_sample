import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PackageEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getPackageAsync(package_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'packages/{package_id}';
      request.resource = request.resource.replace(/{package_id}/g, package_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'packages';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      return this.api.execute(request);
   }
   getPackageByFactionAsync(faction_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'packages/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   createPackageAsync(item:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'packages';
      request.payload = JSON.stringify(item);
      return this.api.execute(request);
   }
   updatePackageAsync(package_id:string, item:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'packages/{package_id}';
      request.resource = request.resource.replace(/{package_id}/g, package_id.toString());
      request.payload = JSON.stringify(item);
      return this.api.execute(request);
   }
   deletePackageAsync(package_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'packages/{package_id}';
      request.resource = request.resource.replace(/{package_id}/g, package_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}