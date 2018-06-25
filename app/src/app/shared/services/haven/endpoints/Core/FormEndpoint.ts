import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FormEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   getFormManagerAsync(form_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/{form_id}/manager';
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      return this.api.execute(request);
   }
   findManager(flow:any, skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, form_config_id:any = null, faction_id:any = null, principal_id:any = null, account_id:any = null, member_id:any = null, participant_id:any = null, project_id:any = null, group_id:any = null, term_id:any = null, bulletin_id_source:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/find_manager';
      request.params["flow"] =  flow == null ? null : flow;
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["form_config_id"] =  form_config_id;
      request.params["faction_id"] =  faction_id;
      request.params["principal_id"] =  principal_id;
      request.params["account_id"] =  account_id;
      request.params["member_id"] =  member_id;
      request.params["participant_id"] =  participant_id;
      request.params["project_id"] =  project_id;
      request.params["group_id"] =  group_id;
      request.params["term_id"] =  term_id;
      request.params["bulletin_id_source"] =  bulletin_id_source;
      return this.api.execute(request);
   }
   getForFactionAccount(faction_id:string, pending:boolean, only_active:boolean, executions:any = null, skip:number = 0, take:number = 10) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/for_account_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["pending"] =  pending;
      request.params["only_active"] =  only_active;
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["executions"] =  executions;
      return this.api.execute(request);
   }
   addPhotoForFormAsync(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'forms/photo/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   addPhotoForFormResponse(faction_id:string, form_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'forms/photo/{faction_id}/{form_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   upsertFormAsync(form:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'forms/upsert';
      request.payload = JSON.stringify(form);
      return this.api.execute(request);
   }
   sendTemplateAsync(input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'forms/send_template';
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   sendSelfAsync(form_config_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'forms/send_self/{form_config_id}';
      request.resource = request.resource.replace(/{form_config_id}/g, form_config_id.toString());
      return this.api.execute(request);
   }
   submitFormAsync(response:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'forms/submit';
      request.payload = JSON.stringify(response);
      return this.api.execute(request);
   }
   updateStatusAsync(form_id:string, enable:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'forms/{form_id}/status/{enable}';
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      request.resource = request.resource.replace(/{enable}/g, enable.toString());
      return this.api.execute(request);
   }
   GenerateExportCSV(form_id, form_response_id = null) {
      var path = "/forms/" + form_id + "/export_csv";
      if(form_response_id != null)
      {
      path += "?form_response_id=" + form_response_id;
      }
      return this.api.baseUrl + path;
   }
   GenerateExportPDF(form_id, form_response_id = null) {
      var path = "/forms/" + form_id + "/export_pdf";
      if (form_response_id != null)
      {
      path += "?form_response_id=" + form_response_id;
      }
      return this.api.baseUrl + path;
   }
   getReport(form_id:string, form_response_id:any = null, skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/{form_id}/report';
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      request.params["form_response_id"] =  form_response_id;
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   getReportsForPrincipal(principal_id:string, skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/report_for/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   getFormData(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'forms/{faction_id}/form_data';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   getFormConfigs(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'forms/{faction_id}/form_configs';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getFormAsync(form_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/{form_id}';
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, form_config_id:any = null, faction_id:any = null, principal_id:any = null, account_id:any = null, member_id:any = null, participant_id:any = null, project_id:any = null, group_id:any = null, group_id_ignore:any = null, term_id:any = null, bulletin_id_source:any = null, account_id_creator:any = null, occasion_id_source:any = null, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["form_config_id"] =  form_config_id;
      request.params["faction_id"] =  faction_id;
      request.params["principal_id"] =  principal_id;
      request.params["account_id"] =  account_id;
      request.params["member_id"] =  member_id;
      request.params["participant_id"] =  participant_id;
      request.params["project_id"] =  project_id;
      request.params["group_id"] =  group_id;
      request.params["group_id_ignore"] =  group_id_ignore;
      request.params["term_id"] =  term_id;
      request.params["bulletin_id_source"] =  bulletin_id_source;
      request.params["account_id_creator"] =  account_id_creator;
      request.params["occasion_id_source"] =  occasion_id_source;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByFormConfigAsync(form_config_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_formconfig/{form_config_id}';
      request.resource = request.resource.replace(/{form_config_id}/g, form_config_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByMemberAsync(member_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_member/{member_id}';
      request.resource = request.resource.replace(/{member_id}/g, member_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByParticipantAsync(participant_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_participant/{participant_id}';
      request.resource = request.resource.replace(/{participant_id}/g, participant_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByProjectAsync(project_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_project/{project_id}';
      request.resource = request.resource.replace(/{project_id}/g, project_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByGroupAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_group/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByGroupIgnoreAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_groupignore/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByBulletinAsync(bulletin_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_bulletin/{bulletin_id}';
      request.resource = request.resource.replace(/{bulletin_id}/g, bulletin_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByAccountCreatorAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_accountcreator/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   getFormByOccasionAsync(occasion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, flow:any = null) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'forms/by_occasion/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["flow"] =  flow;
      return this.api.execute(request);
   }
   createFormAsync(form:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'forms';
      request.payload = JSON.stringify(form);
      return this.api.execute(request);
   }
   updateFormAsync(form_id:string, form:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'forms/{form_id}';
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      request.payload = JSON.stringify(form);
      return this.api.execute(request);
   }
   deleteFormAsync(form_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'forms/{form_id}';
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}