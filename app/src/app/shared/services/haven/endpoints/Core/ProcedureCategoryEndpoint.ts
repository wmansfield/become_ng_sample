import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProcedureCategoryEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getProcedureCategoryAsync(procedure_category_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'procedurecategorys/{procedure_category_id}';
      request.resource = request.resource.replace(/{procedure_category_id}/g, procedure_category_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'procedurecategorys';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      return this.api.execute(request);
   }
   getProcedureCategoryByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'procedurecategorys/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProcedureCategoryAsync(procedurecategory:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'procedurecategorys';
      request.payload = JSON.stringify(procedurecategory);
      return this.api.execute(request);
   }
   updateProcedureCategoryAsync(procedure_category_id:string, procedurecategory:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'procedurecategorys/{procedure_category_id}';
      request.resource = request.resource.replace(/{procedure_category_id}/g, procedure_category_id.toString());
      request.payload = JSON.stringify(procedurecategory);
      return this.api.execute(request);
   }
   deleteProcedureCategoryAsync(procedure_category_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'procedurecategorys/{procedure_category_id}';
      request.resource = request.resource.replace(/{procedure_category_id}/g, procedure_category_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}