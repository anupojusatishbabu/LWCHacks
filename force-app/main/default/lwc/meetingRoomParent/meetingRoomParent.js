import { LightningElement } from 'lwc';

export default class MeetingRoomParent extends LightningElement {

    meetingRoomInfo = [
        {roomName:'A-01', roomCapacity:'10'},
        {roomName:'A-02', roomCapacity:'12'},
        {roomName:'A-03', roomCapacity:'20'},
        {roomName:'B-01', roomCapacity:'5'},
        {roomName:'B-02', roomCapacity:'08'},
        {roomName:'B-03', roomCapacity:'06'},
        {roomName:'C-01', roomCapacity:'25'},
        {roomName:'C-02', roomCapacity:'15'},
        {roomName:'C-03', roomCapacity:'2'}
    ]

}