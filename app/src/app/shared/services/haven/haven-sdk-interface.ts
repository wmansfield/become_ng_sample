import { HavenRequest } from './haven-request';

export interface IHavenSDK {
    execute(request:HavenRequest);
    baseUrl:string;
}
