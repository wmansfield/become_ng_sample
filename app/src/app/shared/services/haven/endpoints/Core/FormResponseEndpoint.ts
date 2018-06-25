import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FormResponseEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getFormResponseAsync(form_id:string, form_response_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formresponses/{form_id}/{form_response_id}';
      request.resource = request.resource.replace(/{form_response_id}/g, form_response_id.toString());
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, form_id:any = null, account_id:any = null, asset_id:any = null, principal_id:any = null, member_id:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formresponses';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["form_id"] =  form_id;
      request.params["account_id"] =  account_id;
      request.params["asset_id"] =  asset_id;
      request.params["principal_id"] =  principal_id;
      request.params["member_id"] =  member_id;
      return this.api.execute(request);
   }
   getFormResponseByFormAsync(form_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formresponses/by_form/{form_id}';
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFormResponseByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formresponses/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFormResponseByFactionAssetAsync(asset_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formresponses/by_factionasset/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFormResponseByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formresponses/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFormResponseByMemberAsync(member_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formresponses/by_member/{member_id}';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createFormResponseAsync(formresponse:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'formresponses';
      request.payload = JSON.stringify(formresponse);
      return this.api.execute(request);
   }
   updateFormResponseAsync(form_response_id:string, formresponse:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'formresponses/{form_response_id}';
      request.resource = request.resource.replace(/{form_response_id}/g, form_response_id.toString());
      request.payload = JSON.stringify(formresponse);
      return this.api.execute(request);
   }
   deleteFormResponseAsync(form_response_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'formresponses/{form_response_id}';
      request.resource = request.resource.replace(/{form_response_id}/g, form_response_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}