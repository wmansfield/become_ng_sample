import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class TopicEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Extended Methods>
   createFullAsync(topic:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'topics/full';
      request.payload = JSON.stringify(topic);
      return this.api.execute(request);
   }
   getByFactionAccount(faction_id:string, skip:number = 0, take:number = 10, favorite:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/by_faction_account/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["favorite"] =  favorite;
      return this.api.execute(request);
   }
   getByFactionAdmin(faction_id:string, skip:number = 0, take:number = 10, hidden:boolean = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/by_faction_admin/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["hidden"] =  hidden;
      return this.api.execute(request);
   }
   getForFactionAccount(topic_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/for_faction_account/{topic_id}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      return this.api.execute(request);
   }
   getForFactionAdmin(topic_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/for_faction_admin/{topic_id}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      return this.api.execute(request);
   }
   changeStatus(topic_id:string, disabled:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'topics/{topic_id}/status/{disabled}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      request.resource = request.resource.replace(/{disabled}/g, disabled.toString());
      return this.api.execute(request);
   }
   setFollow(topic_id:string, favorite:boolean, subscribe:boolean) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'topics/set_follow/{topic_id}/{favorite}/{subscribe}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      request.resource = request.resource.replace(/{favorite}/g, favorite.toString());
      request.resource = request.resource.replace(/{subscribe}/g, subscribe.toString());
      return this.api.execute(request);
   }
   // </Extended Methods>

   // <Standard Methods>
   getTopicAsync(topic_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/{topic_id}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      return this.api.execute(request);
   }
   find(skip:number = 0, take:number = 10, keyword:any = "", order_by:any = "", descending:boolean = false, faction_id:any = null, principal_id:any = null, project_id:any = null, program_id:any = null, group_id:any = null, group_id_ignore:any = null, term_id:any = null, occasion_id:any = null, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics';
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["keyword"] =  keyword;
      request.params["faction_id"] =  faction_id;
      request.params["principal_id"] =  principal_id;
      request.params["project_id"] =  project_id;
      request.params["program_id"] =  program_id;
      request.params["group_id"] =  group_id;
      request.params["group_id_ignore"] =  group_id_ignore;
      request.params["term_id"] =  term_id;
      request.params["occasion_id"] =  occasion_id;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   getTopicByFactionAsync(faction_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/by_faction/{faction_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   getTopicByPrincipalAsync(principal_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/by_principal/{principal_id}';
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   getTopicByProjectAsync(project_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/by_project/{project_id}';
      request.resource = request.resource.replace(/{project_id}/g, project_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   getTopicByProgramAsync(program_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/by_program/{program_id}';
      request.resource = request.resource.replace(/{program_id}/g, program_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   getTopicByGroupAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/by_group/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   getTopicByGroupIgnoreAsync(group_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/by_groupignore/{group_id}';
      request.resource = request.resource.replace(/{group_id}/g, group_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   getTopicByTermAsync(term_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/by_term/{term_id}';
      request.resource = request.resource.replace(/{term_id}/g, term_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   getTopicByOccasionAsync(occasion_id:string, skip:number = 0, take:number = 10, order_by:any = "", descending:boolean = false, disabled:any = false) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'topics/by_occasion/{occasion_id}';
      request.resource = request.resource.replace(/{occasion_id}/g, occasion_id.toString());
      request.params["skip"] =  skip;
      request.params["take"] =  take;
      request.params["order_by"] =  order_by;
      request.params["descending"] =  descending;
      request.params["disabled"] =  disabled;
      return this.api.execute(request);
   }
   createTopicAsync(topic:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'topics';
      request.payload = JSON.stringify(topic);
      return this.api.execute(request);
   }
   updateTopicAsync(topic_id:string, topic:any) {
      var request = new HavenRequest();
      request.method = 'PUT';
      request.resource = 'topics/{topic_id}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      request.payload = JSON.stringify(topic);
      return this.api.execute(request);
   }
   updateTopicPriorityAsync(topic_id:string, priority:number) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'topics/{topic_id}/update_priority/{priority}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      request.resource = request.resource.replace(/{priority}/g, priority.toString().toString());
      return this.api.execute(request);
   }
   deleteTopicAsync(topic_id:string) {
      var request = new HavenRequest();
      request.method = 'DELETE';
      request.resource = 'topics/{topic_id}';
      request.resource = request.resource.replace(/{topic_id}/g, topic_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}