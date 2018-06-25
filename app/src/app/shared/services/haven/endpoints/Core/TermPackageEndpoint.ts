import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class TermPackageEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getTermPackageByTermGlobalAsync(term_id:string, global:boolean, skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'termpackages/by_term/{term_id}/global';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["global"] =  global;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getTermPackageAsync(term_package_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'termpackages/{term_package_id}';
      request.resource = request.resource.replace(/{term_package_id}/g, term_package_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, package_id:any = null, term_id:any = null, target_seat_id:any = null, bulletin_id_source:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'termpackages';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["package_id"] =  package_id;
      request.params["term_id"] =  term_id;
      request.params["target_seat_id"] =  target_seat_id;
      request.params["bulletin_id_source"] =  bulletin_id_source;
      return this.api.execute(request);
   }
   getTermPackageByPackageAsync(package_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'termpackages/by_package/{package_id}';
      request.resource = request.resource.replace(/{package_id}/g, package_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   getTermPackageByTermAsync(term_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'termpackages/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   getTermPackageBySeatAsync(seat_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'termpackages/by_seat/{seat_id}';
      request.resource = request.resource.replace(/{seat_id}/g, seat_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   getTermPackageByBulletinAsync(bulletin_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'termpackages/by_bulletin/{bulletin_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   createTermPackageAsync(termpackage:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'termpackages';
      request.payload = JSON.stringify(termpackage);
      return this.api.execute(request);
   }
   updateTermPackageAsync(term_package_id:string, termpackage:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'termpackages/{term_package_id}';
      request.resource = request.resource.replace(/{term_package_id}/g, term_package_id.toString());
      request.payload = JSON.stringify(termpackage);
      return this.api.execute(request);
   }
   deleteTermPackageAsync(term_package_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'termpackages/{term_package_id}';
      request.resource = request.resource.replace(/{term_package_id}/g, term_package_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}