import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class DocumentCacheEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getDocumentCacheByFactionHiddenAsync(faction_id:string, include_hidden:boolean = false, include_unverified:boolean = false, skip:number = 0, take:number = 10, keyword:any = "") {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'documentcaches/by_faction_hidden/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["include_hidden"] =  include_hidden;
      request.params["include_unverified"] =  include_unverified;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getDocumentCacheAsync(document_cache_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'documentcaches/{document_cache_id}';
      request.resource = request.resource.replace(/{document_cache_id}/g, document_cache_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, verified:any = true) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'documentcaches';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["verified"] =  verified;
      return this.api.execute(request);
   }
   getDocumentCacheByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, verified:any = true) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'documentcaches/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["verified"] =  verified;
      return this.api.execute(request);
   }
   createDocumentCacheAsync(documentcache:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'documentcaches';
      request.payload = JSON.stringify(documentcache);
      return this.api.execute(request);
   }
   updateDocumentCacheAsync(document_cache_id:string, documentcache:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'documentcaches/{document_cache_id}';
      request.resource = request.resource.replace(/{document_cache_id}/g, document_cache_id.toString());
      request.payload = JSON.stringify(documentcache);
      return this.api.execute(request);
   }
   deleteDocumentCacheAsync(document_cache_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'documentcaches/{document_cache_id}';
      request.resource = request.resource.replace(/{document_cache_id}/g, document_cache_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}