import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProjectEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getProjectAsync(project_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'projects/{project_id}';
      request.resource = request.resource.replace(/{project_id}/g, project_id.toString());
      return this.api.execute(request);
   }
   getProjectByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'projects/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   getProjectByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'projects/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProjectAsync(project:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'projects';
      request.payload = JSON.stringify(project);
      return this.api.execute(request);
   }
   updateProjectAsync(project_id:string, project:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'projects/{project_id}';
      request.resource = request.resource.replace(/{project_id}/g, project_id.toString());
      request.payload = JSON.stringify(project);
      return this.api.execute(request);
   }
   deleteProjectAsync(project_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'projects/{project_id}';
      request.resource = request.resource.replace(/{project_id}/g, project_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}