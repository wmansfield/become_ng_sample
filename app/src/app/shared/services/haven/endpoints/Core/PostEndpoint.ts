import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class PostEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   createTextPostAsync(post:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'posts/text';
      request.payload = JSON.stringify(post);
      return this.api.execute(request);
   }
   createPhotoPostAsync(post:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'posts/photo';
      request.payload = JSON.stringify(post);
      return this.api.execute(request);
   }
   createVideoPostAsync(post:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'posts/video';
      request.payload = JSON.stringify(post);
      return this.api.execute(request);
   }
   updatePostBodyAsync(post_id:string, post:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'posts/{post_id}/update_body';
      request.resource = request.resource.replace(/{post_id}/g, post_id.toString());
      request.payload = JSON.stringify(post);
      return this.api.execute(request);
   }
   updateCommentTextAsync(comment_id:string, comment:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'comments/{comment_id}/update_body';
      request.resource = request.resource.replace(/{comment_id}/g, comment_id.toString());
      request.payload = JSON.stringify(comment);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getPostAsync(post_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'posts/{post_id}';
      request.resource = request.resource.replace(/{post_id}/g, post_id.toString());
      return this.api.execute(request);
   }
   getPostByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'posts/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPostByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'posts/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPostByFactionAssetAsync(asset_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'posts/by_factionasset/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPostByProjectAsync(project_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'posts/by_project/{project_id}';
      request.resource = request.resource.replace(/{project_id}/g, project_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPostByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'posts/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPostByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'posts/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPostByGroupAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'posts/by_group/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getPostByGroupIgnoreAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'posts/by_groupignore/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createPostAsync(post:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'posts';
      request.payload = JSON.stringify(post);
      return this.api.execute(request);
   }
   updatePostAsync(post_id:string, post:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'posts/{post_id}';
      request.resource = request.resource.replace(/{post_id}/g, post_id.toString());
      request.payload = JSON.stringify(post);
      return this.api.execute(request);
   }
   deletePostAsync(post_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'posts/{post_id}';
      request.resource = request.resource.replace(/{post_id}/g, post_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}