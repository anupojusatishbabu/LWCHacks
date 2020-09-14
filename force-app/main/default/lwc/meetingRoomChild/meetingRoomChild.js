import { LightningElement,api } from 'lwc';

export default class MeetingRoomChild extends LightningElement {
    @api meetingRooomInfo= {roomName:'A-01', roomCapacity:'10'};
    @api showRoomInfo = false;
}