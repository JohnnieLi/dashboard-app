import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Message} from '../../models/Message';
import {HashMap} from 'hashmap';
import {User} from '../../models/User';

@Component({
    selector: 'app-tickets',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss'],
    providers: [DashboardService]
})
export class TicketComponent implements OnInit, AfterViewInit {

    displayedColumns = ['TicketID', 'name', 'progress', 'status', 'action'];
    dataSource: MatTableDataSource<Message>;
    chatHidden = true;
    selectedMessages: Object[];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(public dashboardService: DashboardService) {
        // Create 100 users
        const users = this.transferMailsByTopic();
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }

    onReply(row) {
        this.chatHidden = false;
        this.selectedMessages = row.messages;
        console.log(row);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    ngOnInit() {
        // this.dashService.getUsers(0).subscribe(
        //     data => {
        //         this.normalUsers = data.users;
        //         this.nPHelper.initPageHelper(this.normalUsers);
        //     }
        // );
        // this.dashService.getUsers(1).subscribe(
        //     data => {
        //         this.businessUsers = data.users;
        //         this.bPHelper.initPageHelper(this.businessUsers, 10);
        //     }
        // );
    }


    sendMessage(event) {
        console.log('ticket', event);
    }

    hideChat(event = false) {
        if (event) {
            this.chatHidden = true;
        }
    }


    transferMailsByTopic() {
        const transferedMails = {};
        const mapArray = [];

        console.log('transferMailsByTopic original', mails);
        mails.map(function (value, index) {
            console.log(value.topic_id);
            if (transferedMails[value.topic_id]) {
                transferedMails[value.topic_id].push(value);
            } else {
                transferedMails[value.topic_id] = [value];
            }
        });
        console.log(transferedMails);
        for (const key in transferedMails) {
            if (transferedMails.hasOwnProperty(key)) {
                console.log(key);
                const sortedByDateMessage = transferedMails[key].sort(function (a, b) {
                    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
                });
                const IndexOfLast = sortedByDateMessage.length - 1;
                const mapObject = {
                    topic_id: key,
                    name: transferedMails[key][0].fromUser.username,
                    date: transferedMails[key][0].date,
                    subject: transferedMails[key][0].subject,
                    messages: sortedByDateMessage,
                    status: sortedByDateMessage[IndexOfLast].status
                };
                mapArray.push(mapObject);
            }
        }
        console.log(mapArray);
        // order by date
        mapArray.sort(function (a, b) {
            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
        });
        console.log('sorted', mapArray);
        return mapArray;
    }
}


const user1 = new User();
user1.username = 'tester1@atbi.ca';
user1.firstName = 'tester1';
user1._id = '4s5a7c3f69eee613de57d188';
const user2 = new User();
user2.username = 'admin1@atbi.ca';
user2.firstName = 'admin1';
user2._id = '5a5a7c3f69eee613de57d179';
const user3 = new User();
user3.username = 'tester2@outlook.com';
user3.firstName = 'tester2';
user3._id = '8s5a7c3f69eee613de57d177';
const user4 = new User();
user4.username = 'tester3@qq.com';
user4.firstName = 'tester3';
user4._id = '2q5a7c3f69eee613de57d199';


const mail1 = new Message();
mail1.topic_id = '56';
mail1.content = 'Constants used to fill up our data base';
mail1.fromUser = user1;
mail1.toUser = user2;
mail1.subject = 'test subject#1';
mail1.date = new Date();
mail1.status = 1;

const mail2 = new Message();
mail2.topic_id = '56';
mail2.content = 'same topic content2';
mail2.fromUser = user2;
mail2.toUser = user1;
mail2.subject = 'test subject#1';
mail2.date = new Date();
mail2.status = 1;


const mail3 = new Message();
mail3.topic_id = '56';
mail3.content = 'same topic content3';
mail3.fromUser = user1;
mail3.toUser = user2;
mail3.subject = 'test subject#1';
mail3.date = new Date();
mail3.status = 2;

const mail4 = new Message();
mail4.topic_id = '12';
mail4.content = 'different topic';
mail4.fromUser = user3;
mail4.toUser = user2;
mail4.subject = 'test subject#2';
mail4.date = new Date();
mail4.status = 1;

const mail5 = new Message();
mail5.topic_id = '12';
mail5.content = 'different topic reply by admin';
mail5.fromUser = user2;
mail5.toUser = user3;
mail5.subject = 'test subject#2';
mail5.date = new Date();
mail5.status = 1;


const mail6 = new Message();
mail6.topic_id = '34';
mail6.content = 'different topic #3';
mail6.fromUser = user4;
mail6.toUser = user2;
mail6.subject = 'test subject#3';
mail6.date = new Date();
mail6.status = 1;


const mails = [mail1, mail2, mail3, mail4, mail5, mail6];




