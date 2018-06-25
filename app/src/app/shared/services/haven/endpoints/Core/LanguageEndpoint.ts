import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class LanguageEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getLanguageAsync(language_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'languages/{language_id}';
      request.resource = request.resource.replace(/{language_id}/g, language_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'languages';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   createLanguageAsync(language:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'languages';
      request.payload = JSON.stringify(language);
      return this.api.execute(request);
   }
   updateLanguageAsync(language_id:string, language:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'languages/{language_id}';
      request.resource = request.resource.replace(/{language_id}/g, language_id.toString());
      request.payload = JSON.stringify(language);
      return this.api.execute(request);
   }
   deleteLanguageAsync(language_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'languages/{language_id}';
      request.resource = request.resource.replace(/{language_id}/g, language_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}