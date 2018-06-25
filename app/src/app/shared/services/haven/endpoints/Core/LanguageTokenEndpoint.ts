import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class LanguageTokenEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getLanguageTokenAsync(token_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'languagetokens/{token_id}';
      request.resource = request.resource.replace(/{token_id}/g, token_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, platform:any = "") {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'languagetokens';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["platform"] =  platform;
      return this.api.execute(request);
   }
   createLanguageTokenAsync(languagetoken:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'languagetokens';
      request.payload = JSON.stringify(languagetoken);
      return this.api.execute(request);
   }
   updateLanguageTokenAsync(token_id:string, languagetoken:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'languagetokens/{token_id}';
      request.resource = request.resource.replace(/{token_id}/g, token_id.toString());
      request.payload = JSON.stringify(languagetoken);
      return this.api.execute(request);
   }
   deleteLanguageTokenAsync(token_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'languagetokens/{token_id}';
      request.resource = request.resource.replace(/{token_id}/g, token_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}