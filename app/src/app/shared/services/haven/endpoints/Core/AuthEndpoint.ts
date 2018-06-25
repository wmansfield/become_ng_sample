import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class AuthEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   loginAsync(authLoginInput:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'auth/login';
      request.payload = JSON.stringify(authLoginInput);
      return this.api.execute(request);
   }
   registerAsync(authLoginInput:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'auth/register';
      request.payload = JSON.stringify(authLoginInput);
      return this.api.execute(request);
   }
   registerTrialAsync(authLoginInput:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'auth/registertrial';
      request.payload = JSON.stringify(authLoginInput);
      return this.api.execute(request);
   }
   registerSubscriptionAsync(authLoginInput:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'auth/register_subscription';
      request.payload = JSON.stringify(authLoginInput);
      return this.api.execute(request);
   }
   handleAvailable(faction_id:string, term:any = "") {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'auth/{faction_id}/handle_available';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.params["term"] =  term;
      return this.api.execute(request);
   }
   emailExists(term:any = "") {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'auth/email_exists';
      request.params["term"] =  term;
      return this.api.execute(request);
   }
   logoutAsync() {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'auth/logout';
      return this.api.execute(request);
   }
   findFactionAsync(keyword:any) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'auth/find_faction';
      request.params["keyword"] =  keyword;
      return this.api.execute(request);
   }
   passwordResetStartAsync(email:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'auth/password_reset/start';
      request.payload = JSON.stringify({email: email });
      return this.api.execute(request);
   }
   passwordResetCompleteAsync(email:any, token:any, password:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'auth/password_reset/complete';
      request.payload = JSON.stringify({email: email,password: password,token: token});
      return this.api.execute(request);
   }
   verifyAccessCodeAsync(input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'auth/verifycode';
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   getPlansAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'auth/{faction_id}/plans';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}