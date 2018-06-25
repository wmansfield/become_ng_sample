import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FactionTemplateEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   findForFaction(faction_id:string, keyword:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factiontemplates/for_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   upsertFactionTemplateAsync(factiontemplate:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'factiontemplates/upsert';
      request.payload = JSON.stringify(factiontemplate);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getFactionTemplateAsync(faction_template_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factiontemplates/{faction_template_id}';
      request.resource = request.resource.replace(/{faction_template_id}/g, faction_template_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, template_id:any = null, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factiontemplates';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["template_id"] =  template_id;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getFactionTemplateByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factiontemplates/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getFactionTemplateByTemplateAsync(template_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factiontemplates/by_template/{template_id}';
      request.resource = request.resource.replace(/{template_id}/g, template_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   createFactionTemplateAsync(factiontemplate:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factiontemplates';
      request.payload = JSON.stringify(factiontemplate);
      return this.api.execute(request);
   }
   updateFactionTemplateAsync(faction_template_id:string, factiontemplate:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'factiontemplates/{faction_template_id}';
      request.resource = request.resource.replace(/{faction_template_id}/g, faction_template_id.toString());
      request.payload = JSON.stringify(factiontemplate);
      return this.api.execute(request);
   }
   deleteFactionTemplateAsync(faction_template_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'factiontemplates/{faction_template_id}';
      request.resource = request.resource.replace(/{faction_template_id}/g, faction_template_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}