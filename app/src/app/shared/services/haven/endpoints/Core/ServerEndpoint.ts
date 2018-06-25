import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ServerEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getAppConfigAsync(platform:any) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'server/app_config';
      request.params["platform"] =  platform;
      return this.api.execute(request);
   }
   getIsUpdateRequiredAsync(platform:any, version:any) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'server/update_required';
      request.params["platform"] =  platform;
      request.params["version"] =  version;
      return this.api.execute(request);
   }
   getTimeZonesAsync() {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'server/timezones';
      return this.api.execute(request);
   }
   getLocalizedTranslationsAsync(platform:any, force:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'server/localization';
      request.params["force"] =  force;
      request.params["platform"] =  platform;
      return this.api.execute(request);
   }
   getLocalizationForWebAsync(locale:any = "en", platform:any = "web", force:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'server/locales/{locale}';
      request.params["locale"] =  locale;
      request.params["force"] =  force;
      request.params["platform"] =  platform;
      return this.api.execute(request);
   }
   // </Standard Methods>
}