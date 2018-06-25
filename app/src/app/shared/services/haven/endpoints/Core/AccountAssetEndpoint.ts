import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AccountAssetEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getAccountAssetAsync(asset_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'accountassets/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      return this.api.execute(request);
   }
   createAccountAssetAsync(accountasset:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'accountassets';
      request.payload = JSON.stringify(accountasset);
      return this.api.execute(request);
   }
   updateAccountAssetAsync(asset_id:string, accountasset:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'accountassets/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      request.payload = JSON.stringify(accountasset);
      return this.api.execute(request);
   }
   deleteAccountAssetAsync(asset_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'accountassets/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}