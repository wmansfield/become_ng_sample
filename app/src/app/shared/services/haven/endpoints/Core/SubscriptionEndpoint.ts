import {HavenRequest} from '../../haven-request';
import {IHavenSDK} from '../../haven-sdk-interface';

export class SubscriptionEndpoint {
   constructor(private api:IHavenSDK){
      this.api = api;
   }
   // <Standard Methods>
   getSettingsAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'subscriptions/{faction_id}/settings';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   getSelfCustomerAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'subscriptions/{faction_id}/self/customer';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   getSelfSubscriptionAsync(faction_id:string, principal_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'subscriptions/{faction_id}/self/subscriptions/{principal_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      return this.api.execute(request);
   }
   getMySubscriptionAsync(faction_id:string, subscription_id:any) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'subscriptions/mine/{faction_id}/subscriptions/{subscription_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{subscription_id}/g, subscription_id.toString());
      return this.api.execute(request);
   }
   getMySubscriptions(cancelled:boolean = false, limit:number = 100) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'subscriptions/mine';
      request.params["cancelled"] =  cancelled;
      request.params["limit"] =  limit;
      return this.api.execute(request);
   }
   previewMySubscription(faction_id:string, subscription_id:any, plan_id:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'subscriptions/mine/{faction_id}/subscriptions/{subscription_id}/preview/{plan_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{subscription_id}/g, subscription_id.toString());
      request.resource = request.resource.replace(/{plan_id}/g, plan_id.toString());
      return this.api.execute(request);
   }
   changeMySubscriptionPlanAsync(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'subscriptions/mine/{faction_id}/plans/change';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   cancelMySubscriptionAsync(faction_id:string, subscription_id:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'subscriptions/mine/{faction_id}/cancel/{subscription_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{subscription_id}/g, subscription_id.toString());
      return this.api.execute(request);
   }
   createMySubscriptionAsync(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'subscriptions/mine/{faction_id}/add';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   getMyInvoices() {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'subscriptions/mine/invoices';
      return this.api.execute(request);
   }
   getPublicPlansAsync(faction_id:string) {
      var request = new HavenRequest();
      request.method = 'GET';
      request.resource = 'subscriptions/{faction_id}/plans/public';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      return this.api.execute(request);
   }
   getPlanPreviewAsync(faction_id:string, principal_id:string, plan_id:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'subscriptions/{faction_id}/plans/{principal_id}/preview/{plan_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      request.resource = request.resource.replace(/{plan_id}/g, plan_id.toString());
      return this.api.execute(request);
   }
   changeSubscriptionPlanAsync(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'subscriptions/{faction_id}/plans/change';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   subscriptionCancelAsync(faction_id:string, principal_id:string) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'subscriptions/{faction_id}/cancel/{principal_id}';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{principal_id}/g, principal_id.toString());
      return this.api.execute(request);
   }
   cardAddAsync(faction_id:string, input:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'subscriptions/{faction_id}/cards/add';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.payload = JSON.stringify(input);
      return this.api.execute(request);
   }
   cardRemoveAsync(faction_id:string, card_id:any) {
      var request = new HavenRequest();
      request.method = 'POST';
      request.resource = 'subscriptions/{faction_id}/cards/{card_id}/remove';
      request.resource = request.resource.replace(/{faction_id}/g, faction_id.toString());
      request.resource = request.resource.replace(/{card_id}/g, card_id.toString());
      return this.api.execute(request);
   }
   // </Standard Methods>
}