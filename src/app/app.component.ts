import { Component } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { WikiChange } from './models/wiki-change.model';
import { Store } from '@ngrx/store';
import { selectWikiChanges } from './state/wiki-changes.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pubnub-datastream-dashboard';
  changes$ = this.store.select(selectWikiChanges);
  // public changes: WikiChange[];

  constructor(private pubnub: PubNubAngular, private store: Store) {

    // pubnub.init({
    //   publishKey: 'pub-c-22a07f3e-9749-4f92-9d71-7405a1a03f2a',
    //   subscribeKey: 'sub-c-60e4d552-4fa9-487a-8043-4d1c9f773630',
    //   uuid: 'f54c8f48-fca0-11ec-b939-0242ac120002'
    // });
    let channel = 'pubnub-wikipedia';
    pubnub.init({
      subscribeKey: 'sub-c-b0d14910-0601-11e4-b703-02ee2ddab7fe',
      uuid: 'f54c8f48-fca0-11ec-b939-0242ac120002',
      ssl: true
    });
    // pubnub.addListener({
    //   message: (message: any) => {
    //     // console.log(message.message);
    //     console.log(message);
    //   }
    // });

    // this.changes = [
    //   { "id": '001', "country": "#en.wikipedia", "item": "User:Dhruv edits/sandbox", "event": "wiki modification", "link": "https://en.wikipedia.org/w/index.php?diff=1097524747&oldid=1097524555", "user": "Dhruv edits" },
    //   { "id": '002', "country": "#en.wikipedia", "item": "2022 Asian Women's U19 Volleyball Championship", "event": "wiki modification", "link": "2 Asian Women's U19 Volleyball Championship", "user": "Breadunnie1010" },
    //   { "id": '003', "country": "#en.wikipedia", "item": "Kadakh", "event": "wiki modification", "link": "https://en.wikipedia.org/w/index.php?diff=1097524744&oldid=1078083669", "user": "InternetArchiveBot" },
    //   { "id": '004', "country": "#en.wikipedia", "item": "Wikipedia:WikiProject Articles for creation/Help desk", "event": "wiki modification", "link": "https://en.wikipedia.org/w/index.php?diff=1097524743&oldid=1097521049", "user": "Johnjeffy098" },
    //   { "id": '005', "country": "#en.wikipedia", "item": "Love's Last Shift", "event": "wiki modification", "link": "https://en.wikipedia.org/w/index.php?diff=1097524745&oldid=1097524732", "user": "Dabberoni15" },
    //   { "id": '006', "country": "#en.wikipedia", "item": "JumpStart", "event": "wiki modification", "link": "https://en.wikipedia.org/w/index.php?diff=1097524742&oldid=1083095433", "user": "InternetArchiveBot" },
    //   { "id": '007', "country": "#en.wikipedia", "item": "William Martin (swimmer)", "event": "wiki modification", "link": "https://en.wikipedia.org/w/index.php?diff=1097524739&oldid=1097523720", "user": "WAAPHC" },
    //   { "id": '008', "country": "#en.wikipedia", "item": "2021?22 Nigeria Professional Football League", "event": "wiki modification", "link": "1?22 Nigeria Professional Football League", "user": "Josedimaria237" },
    //   { "id": '009', "country": "#en.wikipedia", "item": "2022 NASCAR Cup Series", "event": "wiki modification", "link": "2 NASCAR Cup Series", "user": "RxxingAddict" }
    // ];

    pubnub.addListener({
      message: (m: any) => {
        // handle message
        var channelName = m.channel; // The channel to which the message was published
        var channelGroup = m.subscription; // The channel group or wildcard subscription match (if exists)
        var pubTT = m.timetoken; // Publish timetoken
        var msg = m.message; // The Payload
        var publisher = m.publisher; //The Publisher
        console.log('listened - message', m);
      },
      presence: (p: any) => {
        // handle presence
        var action = p.action; // Can be join, leave, state-change, or timeout
        var channelName = p.channel; // The channel to which the message was published
        var occupancy = p.occupancy; // Number of users subscribed to the channel
        var state = p.state; // User State
        var channelGroup = p.subscription; //  The channel group or wildcard subscription match (if exists)
        var publishTime = p.timestamp; // Publish timetoken
        var timetoken = p.timetoken;  // Current timetoken
        var uuid = p.uuid; // UUIDs of users who are subscribed to the channel
        console.log('listened - presence', p);
      },
      signal: (s: any) => {
        // handle signal
        var channelName = s.channel; // The channel to which the signal was published
        var channelGroup = s.subscription; // The channel group or wildcard subscription match (if exists)
        var pubTT = s.timetoken; // Publish timetoken
        var msg = s.message; // The Payload
        var publisher = s.publisher; //The Publisher
        console.log('listened - signal', s);
      },
      objects: (objectEvent: any) => {
        var channel = objectEvent.channel; // The channel
        var channelGroup = objectEvent.subscription; // The channel group
        var timetoken = objectEvent.timetoken; // The event timetoken
        var publisher = objectEvent.publisher; // The UUID that triggered this event
        var event = objectEvent.event; // The event name that occurred
        var type = objectEvent.type; // The event type that occurred
        var data = objectEvent.data; // The event data that occurred
        console.log('listened - objects', objectEvent);
      },
      messageAction: (ma: any) => {
        // handle message action
        var channelName = ma.channel; // The channel to which the message was published
        var publisher = ma.publisher; //The Publisher
        var event = ma.message.event; // message action added or removed
        var type = ma.message.data.type; // message action type
        var value = ma.message.data.value; // message action value
        var messageTimetoken = ma.message.data.messageTimetoken; // The timetoken of the original message
        var actionTimetoken = ma.message.data.actionTimetoken; // The timetoken of the message action
        console.log('listened - messageAction', ma);
      },
      file: (event: any) => {
        const channelName = event.channel; // Channel to which the file belongs
        const channelGroup = event.subscription; // Channel group or wildcard subscription match (if exists)
        const publisher = event.publisher; // File publisher
        const timetoken = event.timetoken; // Event timetoken
        const message = event.message; // Optional message attached to the file
        const fileId = event.file.id; // File unique id
        const fileName = event.file.name;// File name
        const fileUrl = event.file.url; // File direct URL
        console.log('listened - file', event);
      },
      status: (s: any) => {
        var affectedChannelGroups = s.affectedChannelGroups; // The channel groups affected in the operation, of type array.
        var affectedChannels = s.affectedChannels; // The channels affected in the operation, of type array.
        var category = s.category; //Returns PNConnectedCategory
        var operation = s.operation; //Returns PNSubscribeOperation
        var lastTimetoken = s.lastTimetoken; //The last timetoken used in the subscribe request, of type long.
        var currentTimetoken = s.currentTimetoken; //The current timetoken fetched in the subscribe response, which is going to be used in the next request, of type long.
        var subscribedChannels = s.subscribedChannels; //All the current subscribed channels, of type array.
        console.log('listened - status', s);
      },
    });



    pubnub.subscribe({ channel: channel, callback: this.processData, triggerEvents: true, withPresence: true });
    console.log('test', pubnub);
    pubnub.getMessage(channel, (msg) => {
      console.log(msg);
    });
  }

  processData(data: any) {
    //this.store.dispatch(retrievedWikiChangesList({ wikiChanges });
    console.log('process data', data);
  }
}
