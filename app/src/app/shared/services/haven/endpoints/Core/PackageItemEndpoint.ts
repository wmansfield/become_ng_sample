import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PackageItemEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getPackageItemAsync(package_item_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'packageitems/{package_item_id}';
      request.resource = request.resource.replace(/{package_item_id}/g, package_item_id.toString());
      return this.api.execute(request);
   }
   getPackageItemByPackageAsync(package_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'packageitems/by_package/{package_id}';
      request.resource = request.resource.replace(/{package_id}/g, package_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   createPackageItemAsync(packageitem:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'packageitems';
      request.payload = JSON.stringify(packageitem);
      return this.api.execute(request);
   }
   updatePackageItemAsync(package_item_id:string, packageitem:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'packageitems/{package_item_id}';
      request.resource = request.resource.replace(/{package_item_id}/g, package_item_id.toString());
      request.payload = JSON.stringify(packageitem);
      return this.api.execute(request);
   }
   deletePackageItemAsync(package_item_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'packageitems/{package_item_id}';
      request.resource = request.resource.replace(/{package_item_id}/g, package_item_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}