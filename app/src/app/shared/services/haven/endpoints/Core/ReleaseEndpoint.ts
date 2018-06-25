import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ReleaseEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getReleaseAsync(release_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'releases/{release_id}';
      request.resource = request.resource.replace(/{release_id}/g, release_id.toString());
      return this.api.execute(request);
   }
   createReleaseAsync(release:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'releases';
      request.payload = JSON.stringify(release);
      return this.api.execute(request);
   }
   updateReleaseAsync(release_id:string, release:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'releases/{release_id}';
      request.resource = request.resource.replace(/{release_id}/g, release_id.toString());
      request.payload = JSON.stringify(release);
      return this.api.execute(request);
   }
   deleteReleaseAsync(release_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'releases/{release_id}';
      request.resource = request.resource.replace(/{release_id}/g, release_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}