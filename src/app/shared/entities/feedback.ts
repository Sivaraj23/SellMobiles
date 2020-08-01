import {User} from './user';

export class Feedback{
    feedbackId:number;
    user:User;
    description:string;
    replyDescription:string;
    createdOn: Date;
     updatedOn: Date;
}