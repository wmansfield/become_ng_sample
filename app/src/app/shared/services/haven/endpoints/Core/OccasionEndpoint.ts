import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class OccasionEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   addPhotoForOccasionAsync(faction_id:string, input:any, occasion_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasions/photo/{faction_id}/{occasion_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   addVideoForOccasionAsync(faction_id:string, input:any, occasion_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasions/video/{faction_id}/{occasion_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   GenerateItemsExportCSV(occasion_id) {
      var path = "/occasions/" + occasion_id + "/export_items_csv";
      return this.api.baseUrl + path;
   }
   GenerateResponsesExportCSV(occasion_id) {
      var path = "/occasions/" + occasion_id + "/export_responses_csv";
      return this.api.baseUrl + path;
   }
   getOccasionWithItemsAsync(occasion_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/{occasion_id}/with_items';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      return this.api.execute(request);
   }
   getOccasionManagerAsync(occasion_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/{occasion_id}/manager';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      return this.api.execute(request);
   }
   findManagerAsync(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, occasion_category_id:any = null, account_id:any = null, principal_id:any = null, project_id:any = null, group_id:any = null, term_id:any = null, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/find_manager';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["occasion_category_id"] =  occasion_category_id;
      request.params["account_id"] =  account_id;
      request.params["principal_id"] =  principal_id;
      request.params["project_id"] =  project_id;
      request.params["group_id"] =  group_id;
      request.params["term_id"] =  term_id;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   findForBulletinAsync(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/find_manager_bulletin';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getForFactionAccount(faction_id:string, only_responded:boolean, start:any, end:any, occasion_category_id:any = null, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/for_account_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["only_responded"] =  only_responded;
      request.params["start"] =  start;
      request.params["end"] =  end;
      request.params["occasion_category_id"] =  occasion_category_id;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getForFactionAccountList(faction_id:string, only_responded:boolean, start:any, take:number, occasion_category_id:any = null, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/for_account_faction/{faction_id}/list';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["only_responded"] =  only_responded;
      request.params["start"] =  start;
      request.params["take"] =  take;
      request.params["occasion_category_id"] =  occasion_category_id;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getAvailableItemsForRespond(occasion_id:string, skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/{occasion_id}/available_items';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   upsertOccasionAsync(occasion:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasions/upsert';
      request.payload = JSON.stringify(occasion);
      return this.api.execute(request);
   }
   submitResponseAsync(response:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasions/respond';
      request.payload = JSON.stringify(response);
      return this.api.execute(request);
   }
   markDownloadedAsync(occasion_response_id:string, calendar_id:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasions/downloaded/{occasion_response_id}/{calendar_id}';
      request.resource = request.resource.replace(/{occasion_response_id}/g, occasion_response_id.toString());
      request.resource = request.resource.replace(/{calendar_id}/g, calendar_id.toString());
      return this.api.execute(request);
   }
   markSynchronizedAsync(occasion_id:string, calendar_id:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasions/synchronized/{occasion_id}/{calendar_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.resource = request.resource.replace(/{calendar_id}/g, calendar_id.toString());
      return this.api.execute(request);
   }
   updateOccasionRemarkTextAsync(occasion_remark_id:string, remark:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasionsremarks/{occasion_remark_id}/update_body';
      request.resource = request.resource.replace(/{occasion_remark_id}/g, occasion_remark_id.toString());
      request.payload = JSON.stringify(remark);
      return this.api.execute(request);
   }
   updateOccasionRemarkReplyTextAsync(occasion_remark_reply_id:string, remark:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasionsremarks/{occasion_remark_reply_id}/update_body';
      request.resource = request.resource.replace(/{occasion_remark_reply_id}/g, occasion_remark_reply_id.toString());
      request.payload = JSON.stringify(remark);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getOccasionAsync(occasion_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, occasion_category_id:any = null, account_id:any = null, asset_id:any = null, principal_id:any = null, project_id:any = null, group_id:any = null, group_id_ignore:any = null, term_id:any = null, form_config_id:any = null, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["occasion_category_id"] =  occasion_category_id;
      request.params["account_id"] =  account_id;
      request.params["asset_id"] =  asset_id;
      request.params["principal_id"] =  principal_id;
      request.params["project_id"] =  project_id;
      request.params["group_id"] =  group_id;
      request.params["group_id_ignore"] =  group_id_ignore;
      request.params["term_id"] =  term_id;
      request.params["form_config_id"] =  form_config_id;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getOccasionByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getOccasionByOccasionCategoryAsync(occasion_category_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/by_occasioncategory/{occasion_category_id}';
      request.resource = request.resource.replace(/{occasion_category_id}/g, occasion_category_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getOccasionByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getOccasionByFactionAssetAsync(asset_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/by_factionasset/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getOccasionByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getOccasionByProjectAsync(project_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/by_project/{project_id}';
      request.resource = request.resource.replace(/{project_id}/g, project_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getOccasionByGroupAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/by_group/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getOccasionByGroupIgnoreAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/by_groupignore/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getOccasionByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   getOccasionByFormAsync(form_config_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, kind:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'occasions/by_form/{form_config_id}';
      request.resource = request.resource.replace(/{form_config_id}/g, form_config_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["kind"] =  kind;
      return this.api.execute(request);
   }
   createOccasionAsync(occasion:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'occasions';
      request.payload = JSON.stringify(occasion);
      return this.api.execute(request);
   }
   updateOccasionAsync(occasion_id:string, occasion:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'occasions/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.payload = JSON.stringify(occasion);
      return this.api.execute(request);
   }
   deleteOccasionAsync(occasion_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'occasions/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}