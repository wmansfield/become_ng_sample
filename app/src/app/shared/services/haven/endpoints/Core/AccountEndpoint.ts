import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AccountEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getSelfAsync() {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accounts/self';
      return this.api.execute(request);
   }
   getSelfBadgeAsync() {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accounts/self_badge';
      return this.api.execute(request);
   }
   impersonateAsync(name:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'accounts/impersonate';
      request.payload = JSON.stringify({ user: name });
      return this.api.execute(request);
   }
   updateActKey(faction_id:string, userInfo:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'accounts/{faction_id}/actkey';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(userInfo);
      return this.api.execute(request);
   }
   updateProfile(account:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'accounts/profile';
      request.payload = JSON.stringify(account);
      return this.api.execute(request);
   }
   updateEmbeddedAsync(faction_id:string, account:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'accounts/embedded/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(account);
      return this.api.execute(request);
   }
   updateAccountProfile(faction_id:string, account_id:string, account:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'accounts/profile/{faction_id}/{account_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.payload = JSON.stringify(account);
      return this.api.execute(request);
   }
   registerPushTokenAsync(input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'accounts/self/push_register';
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   updatePushSettingsAsync(settings:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'accounts/self/push_settings';
      request.payload = JSON.stringify(settings);
      return this.api.execute(request);
   }
   getPushSettingsAsync() {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accounts/self/push_settings';
      return this.api.execute(request);
   }
   findForLabel(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accounts/for_label';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   findEmbedded(faction_id:string, skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accounts/embedded/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getAccountAsync(account_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accounts/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, asset_id_avatar:any = null, app_label_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accounts';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["asset_id_avatar"] =  asset_id_avatar;
      request.params["app_label_id"] =  app_label_id;
      return this.api.execute(request);
   }
   getAccountByAvatarAsync(asset_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accounts/by_avatar/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getAccountByAppLabelAsync(app_label_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accounts/by_applabel/{app_label_id}';
      request.resource = request.resource.replace(/{app_label_id}/g, app_label_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createAccountAsync(account:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'accounts';
      request.payload = JSON.stringify(account);
      return this.api.execute(request);
   }
   updateAccountAsync(account_id:string, account:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'accounts/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.payload = JSON.stringify(account);
      return this.api.execute(request);
   }
   deleteAccountAsync(account_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'accounts/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}