import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FeedItemEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   setSpam(feed_item_id:string, spam:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'feeditems/set_spam/{feed_item_id}/{spam}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      request.resource = request.resource.replace(/{spam}/g, spam.toString());
      return this.api.execute(request);
   }
   setLike(feed_item_id:string, like:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'feeditems/set_like/{feed_item_id}/{like}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      request.resource = request.resource.replace(/{like}/g, like.toString());
      return this.api.execute(request);
   }
   setFavorite(feed_item_id:string, favorite:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'feeditems/set_favorite/{feed_item_id}/{favorite}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      request.resource = request.resource.replace(/{favorite}/g, favorite.toString());
      return this.api.execute(request);
   }
   setModeration(feed_item_id:string, approved:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'feeditems/set_status/{feed_item_id}/{approved}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      request.resource = request.resource.replace(/{approved}/g, approved.toString());
      return this.api.execute(request);
   }
   deleteFeedItemForSpamAsync(feed_item_id:string, reason:any) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'feeditems/{feed_item_id}/spam/{reason}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      request.resource = request.resource.replace(/{reason}/g, reason.toString());
      return this.api.execute(request);
   }
   getFeedItemByFactionFavoritesAsync(faction_id:string, skip:number = 0, take:number = 10) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/by_faction/{faction_id}/favorites';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      return this.api.execute(request);
   }
   getFeedItemForAccountAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, text_only:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/for_account/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["text_only"] =  text_only;
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getFeedItemAsync(feed_item_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/{feed_item_id}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      return this.api.execute(request);
   }
   getFeedItemByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFeedItemByPostAsync(post_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/by_post/{post_id}';
      request.resource = request.resource.replace(/{post_id}/g, post_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFeedItemByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFeedItemByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFeedItemByMemberAsync(member_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/by_member/{member_id}';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFeedItemByParticipantAsync(participant_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/by_participant/{participant_id}';
      request.resource = request.resource.replace(/{participant_id}/g, participant_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFeedItemByProjectAsync(project_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/by_project/{project_id}';
      request.resource = request.resource.replace(/{project_id}/g, project_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFeedItemByGroupAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/by_group/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFeedItemByGroupIgnoreAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/by_groupignore/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFeedItemByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'feeditems/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createFeedItemAsync(feeditem:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'feeditems';
      request.payload = JSON.stringify(feeditem);
      return this.api.execute(request);
   }
   updateFeedItemAsync(feed_item_id:string, feeditem:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'feeditems/{feed_item_id}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      request.payload = JSON.stringify(feeditem);
      return this.api.execute(request);
   }
   deleteFeedItemAsync(feed_item_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'feeditems/{feed_item_id}';
      request.resource = request.resource.replace(/{feed_item_id}/g, feed_item_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}