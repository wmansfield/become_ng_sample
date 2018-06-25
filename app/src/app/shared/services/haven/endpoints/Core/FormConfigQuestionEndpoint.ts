import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FormConfigQuestionEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getFormConfigQuestionAsync(form_config_question_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formconfigquestions/{form_config_question_id}';
      request.resource = request.resource.replace(/{form_config_question_id}/g, form_config_question_id.toString());
      return this.api.execute(request);
   }
   getFormConfigQuestionByFormConfigAsync(form_config_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formconfigquestions/by_formconfig/{form_config_id}';
      request.resource = request.resource.replace(/{form_config_id}/g, form_config_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   createFormConfigQuestionAsync(formconfigquestion:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'formconfigquestions';
      request.payload = JSON.stringify(formconfigquestion);
      return this.api.execute(request);
   }
   updateFormConfigQuestionAsync(form_config_question_id:string, formconfigquestion:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'formconfigquestions/{form_config_question_id}';
      request.resource = request.resource.replace(/{form_config_question_id}/g, form_config_question_id.toString());
      request.payload = JSON.stringify(formconfigquestion);
      return this.api.execute(request);
   }
   deleteFormConfigQuestionAsync(form_config_question_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'formconfigquestions/{form_config_question_id}';
      request.resource = request.resource.replace(/{form_config_question_id}/g, form_config_question_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}