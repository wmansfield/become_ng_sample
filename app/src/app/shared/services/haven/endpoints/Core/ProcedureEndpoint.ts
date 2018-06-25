import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProcedureEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getProcedureAsync(procedure_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'procedures/{procedure_id}';
      request.resource = request.resource.replace(/{procedure_id}/g, procedure_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, procedure_category_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'procedures';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["procedure_category_id"] =  procedure_category_id;
      return this.api.execute(request);
   }
   getProcedureByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'procedures/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getProcedureByProcedureCategoryAsync(procedure_category_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'procedures/by_procedurecategory/{procedure_category_id}';
      request.resource = request.resource.replace(/{procedure_category_id}/g, procedure_category_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProcedureAsync(procedure:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'procedures';
      request.payload = JSON.stringify(procedure);
      return this.api.execute(request);
   }
   updateProcedureAsync(procedure_id:string, procedure:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'procedures/{procedure_id}';
      request.resource = request.resource.replace(/{procedure_id}/g, procedure_id.toString());
      request.payload = JSON.stringify(procedure);
      return this.api.execute(request);
   }
   deleteProcedureAsync(procedure_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'procedures/{procedure_id}';
      request.resource = request.resource.replace(/{procedure_id}/g, procedure_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}