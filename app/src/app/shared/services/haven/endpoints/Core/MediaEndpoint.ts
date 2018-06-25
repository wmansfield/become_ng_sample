import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class MediaEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getTemporaryUploadUrl(asset_type:any, media_target:any, name:any, target_id:any = null, parent_id:any = null, verb:any = "PUT", content_type:any = "multipart/form-data") {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'media/upload_info';
      request.params["asset_type"] =  asset_type;
      request.params["media_target"] =  media_target;
      request.params["name"] =  name;
      request.params["target_id"] =  target_id ? target_id : "";
      request.params["parent_id"] =  parent_id ? parent_id : "";
      request.params["verb"] =  verb;
      request.params["content_type"] =  content_type;
      return this.api.execute(request);
   }
   // </Standard Methods>
}