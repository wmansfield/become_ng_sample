import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FormQuestionEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getFormQuestionAsync(form_question_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formquestions/{form_question_id}';
      request.resource = request.resource.replace(/{form_question_id}/g, form_question_id.toString());
      return this.api.execute(request);
   }
   getFormQuestionByFormAsync(form_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formquestions/by_form/{form_id}';
      request.resource = request.resource.replace(/{form_id}/g, form_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   getFormQuestionByFormConfigQuestionAsync(form_config_question_id:string, include_removed:boolean, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formquestions/by_formconfigquestion/{form_config_question_id}';
      request.resource = request.resource.replace(/{form_config_question_id}/g, form_config_question_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["include_removed"] =  include_removed;
      return this.api.execute(request);
   }
   createFormQuestionAsync(formquestion:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'formquestions';
      request.payload = JSON.stringify(formquestion);
      return this.api.execute(request);
   }
   updateFormQuestionAsync(form_question_id:string, formquestion:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'formquestions/{form_question_id}';
      request.resource = request.resource.replace(/{form_question_id}/g, form_question_id.toString());
      request.payload = JSON.stringify(formquestion);
      return this.api.execute(request);
   }
   deleteFormQuestionAsync(form_question_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'formquestions/{form_question_id}';
      request.resource = request.resource.replace(/{form_question_id}/g, form_question_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}