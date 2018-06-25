import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class FormResponseDataEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getFormResponseDataAsync(form_data_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formresponsedatas/{form_data_id}';
      request.resource = request.resource.replace(/{form_data_id}/g, form_data_id.toString());
      return this.api.execute(request);
   }
   getFormResponseDataByFormResponseAsync(form_response_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formresponsedatas/by_formresponse/{form_response_id}';
      request.resource = request.resource.replace(/{form_response_id}/g, form_response_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFormResponseDataByFormQuestionAsync(form_question_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formresponsedatas/by_formquestion/{form_question_id}';
      request.resource = request.resource.replace(/{form_question_id}/g, form_question_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getFormResponseDataByFactionAssetAsync(asset_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'formresponsedatas/by_factionasset/{asset_id}';
      request.resource = request.resource.replace(/{asset_id}/g, asset_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createFormResponseDataAsync(formresponsedata:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'formresponsedatas';
      request.payload = JSON.stringify(formresponsedata);
      return this.api.execute(request);
   }
   updateFormResponseDataAsync(form_data_id:string, formresponsedata:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'formresponsedatas/{form_data_id}';
      request.resource = request.resource.replace(/{form_data_id}/g, form_data_id.toString());
      request.payload = JSON.stringify(formresponsedata);
      return this.api.execute(request);
   }
   deleteFormResponseDataAsync(form_data_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'formresponsedatas/{form_data_id}';
      request.resource = request.resource.replace(/{form_data_id}/g, form_data_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}