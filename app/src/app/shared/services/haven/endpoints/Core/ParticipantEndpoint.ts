import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ParticipantEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getParticipantAsync(participant_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'participants/{participant_id}';
      request.resource = request.resource.replace(/{participant_id}/g, participant_id.toString());
      return this.api.execute(request);
   }
   getParticipantByProjectAsync(project_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'participants/by_project/{project_id}';
      request.resource = request.resource.replace(/{project_id}/g, project_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getParticipantByAccountAsync(account_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'participants/by_account/{account_id}';
      request.resource = request.resource.replace(/{account_id}/g, account_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createParticipantAsync(participant:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'participants';
      request.payload = JSON.stringify(participant);
      return this.api.execute(request);
   }
   updateParticipantAsync(participant_id:string, participant:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'participants/{participant_id}';
      request.resource = request.resource.replace(/{participant_id}/g, participant_id.toString());
      request.payload = JSON.stringify(participant);
      return this.api.execute(request);
   }
   deleteParticipantAsync(participant_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'participants/{participant_id}';
      request.resource = request.resource.replace(/{participant_id}/g, participant_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}