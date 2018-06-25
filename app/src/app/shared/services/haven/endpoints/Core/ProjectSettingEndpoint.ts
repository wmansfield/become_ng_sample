import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class ProjectSettingEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getProjectSettingAsync(project_setting_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'projectsettings/{project_setting_id}';
      request.resource = request.resource.replace(/{project_setting_id}/g, project_setting_id.toString());
      return this.api.execute(request);
   }
   getProjectSettingByProjectAsync(project_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'projectsettings/by_project/{project_id}';
      request.resource = request.resource.replace(/{project_id}/g, project_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      return this.api.execute(request);
   }
   createProjectSettingAsync(projectsetting:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'projectsettings';
      request.payload = JSON.stringify(projectsetting);
      return this.api.execute(request);
   }
   updateProjectSettingAsync(project_setting_id:string, projectsetting:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'projectsettings/{project_setting_id}';
      request.resource = request.resource.replace(/{project_setting_id}/g, project_setting_id.toString());
      request.payload = JSON.stringify(projectsetting);
      return this.api.execute(request);
   }
   deleteProjectSettingAsync(project_setting_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'projectsettings/{project_setting_id}';
      request.resource = request.resource.replace(/{project_setting_id}/g, project_setting_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}