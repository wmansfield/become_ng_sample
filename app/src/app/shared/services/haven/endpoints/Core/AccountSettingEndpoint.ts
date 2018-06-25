import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AccountSettingEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getAccountSettingAsync(account_setting_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accountsettings/{account_setting_id}';
      request.resource = request.resource.replace(/{account_setting_id}/g, account_setting_id.toString());
      return this.api.execute(request);
   }
   getAccountSettingByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accountsettings/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createAccountSettingAsync(accountsetting:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'accountsettings';
      request.payload = JSON.stringify(accountsetting);
      return this.api.execute(request);
   }
   updateAccountSettingAsync(account_setting_id:string, accountsetting:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'accountsettings/{account_setting_id}';
      request.resource = request.resource.replace(/{account_setting_id}/g, account_setting_id.toString());
      request.payload = JSON.stringify(accountsetting);
      return this.api.execute(request);
   }
   deleteAccountSettingAsync(account_setting_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'accountsettings/{account_setting_id}';
      request.resource = request.resource.replace(/{account_setting_id}/g, account_setting_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}