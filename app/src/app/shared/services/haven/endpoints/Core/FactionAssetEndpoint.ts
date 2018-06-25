import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FactionAssetEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getFactionAssetAsync(asset_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'factionassets/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      return this.api.execute(request);
   }
   createFactionAssetAsync(factionasset:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'factionassets';
      request.payload = JSON.stringify(factionasset);
      return this.api.execute(request);
   }
   updateFactionAssetAsync(asset_id:string, factionasset:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'factionassets/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      request.payload = JSON.stringify(factionasset);
      return this.api.execute(request);
   }
   deleteFactionAssetAsync(asset_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'factionassets/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}