import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class BulletinEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getBulletinManagerAsync(bulletin_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/{bulletin_id}/manager';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      return this.api.execute(request);
   }
   addPhotoForBulletinAsync(faction_id:string, input:any, bulletin_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletins/photo/{faction_id}/{bulletin_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   addVideoForBulletinAsync(faction_id:string, input:any, bulletin_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletins/video/{faction_id}/{bulletin_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   getBulletinForFactionAccount(faction_id:string, include_archived:boolean, stack:number = -1, bulletin_category_id:any = null, skip:number = 0, take:number = 10) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/for_account_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["include_archived"] =  include_archived;
      request.params["bulletin_category_id"] =  bulletin_category_id;
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["stack"] =  stack;
      return this.api.execute(request);
   }
   getBulletinByFactionFavoritesAsync(faction_id:string, skip:number = 0, take:number = 10) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_faction/{faction_id}/favorites';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      return this.api.execute(request);
   }
   getBulletinByFactionImportantAsync(faction_id:string, include_archived:boolean, skip:number = 0, take:number = 10) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_faction/{faction_id}/important';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["include_archived"] =  include_archived;
      return this.api.execute(request);
   }
   findBulletinManagerAsync(faction_id:string, draft:boolean, stack:number = -1, bulletin_category_id:any = null, skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_faction/{faction_id}/admin';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["keyword"] =  keyword;
      request.params["bulletin_category_id"] =  bulletin_category_id;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      request.params["stack"] =  stack;
      return this.api.execute(request);
   }
   setArchived(bulletin_id:string, archived:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletins/set_archived/{bulletin_id}/{archived}';
      request.resource = request.resource.replace(/{archived}/g, archived.toString());
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      return this.api.execute(request);
   }
   setFavorite(bulletin_id:string, favorite:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletins/set_favorite/{bulletin_id}/{favorite}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.resource = request.resource.replace(/{favorite}/g, favorite.toString());
      return this.api.execute(request);
   }
   setViewed(bulletin_id:string, viewed:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletins/set_viewed/{bulletin_id}/{viewed}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.resource = request.resource.replace(/{viewed}/g, viewed.toString());
      return this.api.execute(request);
   }
   setCallToAction(bulletin_id:string, clicked:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletins/set_cta/{bulletin_id}/{clicked}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.resource = request.resource.replace(/{clicked}/g, clicked.toString());
      return this.api.execute(request);
   }
   setDismissed(bulletin_id:string, dismissed:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletins/set_dismissed/{bulletin_id}/{dismissed}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.resource = request.resource.replace(/{dismissed}/g, dismissed.toString());
      return this.api.execute(request);
   }
   setResponse(bulletin_id:string, response:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletins/set_response/{bulletin_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.payload = JSON.stringify(response);
      return this.api.execute(request);
   }
   ensureForm(bulletin_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletins/{bulletin_id}/ensure_form';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      return this.api.execute(request);
   }
   ensurePackage(bulletin_id:string, principal_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletins/{bulletin_id}/ensure_package/{principal_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      return this.api.execute(request);
   }
   updateRemarkTextAsync(remark_id:string, remark:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'remarks/{remark_id}/update_body';
      request.resource = request.resource.replace(/{remark_id}/g, remark_id.toString());
      request.payload = JSON.stringify(remark);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getBulletinAsync(bulletin_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/{bulletin_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, bulletin_category_id:any = null, account_id_owner:any = null, principal_id:any = null, account_id:any = null, member_id:any = null, participant_id:any = null, project_id:any = null, group_id:any = null, group_id_ignore:any = null, term_id:any = null, cta_occasion_id:any = null, cta_package_item_id:any = null, cta_package_id:any = null, cta_form_config_id:any = null, occasion_id:any = null, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["bulletin_category_id"] =  bulletin_category_id;
      request.params["account_id_owner"] =  account_id_owner;
      request.params["principal_id"] =  principal_id;
      request.params["account_id"] =  account_id;
      request.params["member_id"] =  member_id;
      request.params["participant_id"] =  participant_id;
      request.params["project_id"] =  project_id;
      request.params["group_id"] =  group_id;
      request.params["group_id_ignore"] =  group_id_ignore;
      request.params["term_id"] =  term_id;
      request.params["cta_occasion_id"] =  cta_occasion_id;
      request.params["cta_package_item_id"] =  cta_package_item_id;
      request.params["cta_package_id"] =  cta_package_id;
      request.params["cta_form_config_id"] =  cta_form_config_id;
      request.params["occasion_id"] =  occasion_id;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByBulletinCategoryAsync(bulletin_category_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_bulletincategory/{bulletin_category_id}';
      request.resource = request.resource.replace(/{bulletin_category_id}/g, bulletin_category_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByAccountOwnerAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_accountowner/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByMemberAsync(member_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_member/{member_id}';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByParticipantAsync(participant_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_participant/{participant_id}';
      request.resource = request.resource.replace(/{participant_id}/g, participant_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByProjectAsync(project_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_project/{project_id}';
      request.resource = request.resource.replace(/{project_id}/g, project_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByGroupAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_group/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByGroupIgnoreAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_groupignore/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByOccasionCTAAsync(occasion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_occasioncta/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByPackageItemAsync(package_item_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_packageitem/{package_item_id}';
      request.resource = request.resource.replace(/{package_item_id}/g, package_item_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByPackageAsync(package_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_package/{package_id}';
      request.resource = request.resource.replace(/{package_id}/g, package_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByFormConfigAsync(form_config_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_formconfig/{form_config_id}';
      request.resource = request.resource.replace(/{form_config_id}/g, form_config_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   getBulletinByOccasionTargetAsync(occasion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, draft:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'bulletins/by_occasiontarget/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["draft"] =  draft;
      return this.api.execute(request);
   }
   createBulletinAsync(bulletin:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'bulletins';
      request.payload = JSON.stringify(bulletin);
      return this.api.execute(request);
   }
   updateBulletinAsync(bulletin_id:string, bulletin:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'bulletins/{bulletin_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.payload = JSON.stringify(bulletin);
      return this.api.execute(request);
   }
   deleteBulletinAsync(bulletin_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'bulletins/{bulletin_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}