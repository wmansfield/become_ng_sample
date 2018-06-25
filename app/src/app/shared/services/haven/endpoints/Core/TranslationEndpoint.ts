import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class TranslationEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   upsertTranslationAsync(translation:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'translations/upsert';
      request.payload = JSON.stringify(translation);
      return this.api.execute(request);
   }
   findForTranslating(language_id:string, skip:number = 0, take:number = 10, platform:any = "", keyword:any = "", only_blank:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'translations/for_translating/{language_id}';
      request.resource = request.resource.replace(/{language_id}/g, language_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["keyword"] =  keyword;
      request.params["platform"] =  platform;
      request.params["only_blank"] =  only_blank;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getTranslationAsync(translation_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'translations/{translation_id}';
      request.resource = request.resource.replace(/{translation_id}/g, translation_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, language_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'translations';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["language_id"] =  language_id;
      return this.api.execute(request);
   }
   getTranslationByLanguageAsync(language_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'translations/by_language/{language_id}';
      request.resource = request.resource.replace(/{language_id}/g, language_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createTranslationAsync(translation:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'translations';
      request.payload = JSON.stringify(translation);
      return this.api.execute(request);
   }
   updateTranslationAsync(translation_id:string, translation:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'translations/{translation_id}';
      request.resource = request.resource.replace(/{translation_id}/g, translation_id.toString());
      request.payload = JSON.stringify(translation);
      return this.api.execute(request);
   }
   deleteTranslationAsync(translation_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'translations/{translation_id}';
      request.resource = request.resource.replace(/{translation_id}/g, translation_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}