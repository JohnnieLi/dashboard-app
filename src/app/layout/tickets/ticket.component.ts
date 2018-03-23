import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Mail} from '../../models/Mail';
import {HashMap} from 'hashmap';

@Component({
    selector: 'app-tickets',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss'],
    providers: [DashboardService]
})
export class TicketComponent implements OnInit, AfterViewInit {

    displayedColumns = ['TicketID', 'name', 'progress', 'status', 'action'];
    dataSource: MatTableDataSource<Mail>;
    chatHidden = true;
    selectedMessages: Object[];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor() {
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
                const sortedByDateMessage = transferedMails[key].sort(function(a, b){
                    return new Date(b.date).valueOf() - new Date(a.date).valueOf();
                });
                const IndexOfLast = sortedByDateMessage.length - 1;
                const mapObject = {
                    topic_id : key,
                    name : transferedMails[key][0].fromUser,
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
        mapArray.sort(function(a, b){
            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
        });
        console.log('sorted' , mapArray);
        return mapArray;
    }
}




const mail1 = new Mail();
mail1.topic_id = '56';
mail1.content = 'Constants used to fill up our data base';
mail1.fromUser = 'tester1';
mail1.toUser = 'admin';
mail1.subject = 'test subject#1';
mail1.date = new Date();
mail1.status = 1;

const mail2 = new Mail();
mail2.topic_id = '56';
mail2.content = 'same topic content2';
mail2.fromUser = 'admin';
mail2.toUser = 'tester1';
mail2.subject = 'test subject#1';
mail2.date = new Date();
mail2.status = 1;


const mail3 = new Mail();
mail3.topic_id = '56';
mail3.content = 'same topic content3';
mail3.fromUser = 'tester1';
mail3.toUser = 'admin';
mail3.subject = 'test subject#1';
mail3.date = new Date();
mail3.status = 2;

const mail4 = new Mail();
mail4.topic_id = '12';
mail4.content = 'different topic';
mail4.fromUser = 'tester2';
mail4.toUser = 'admin';
mail4.subject = 'test subject#2';
mail4.date = new Date();
mail4.status = 1;

const mail5 = new Mail();
mail5.topic_id = '12';
mail5.content = 'different topic reply by admin';
mail5.fromUser = 'admin';
mail5.toUser = 'tester2';
mail5.subject = 'test subject#2';
mail5.date = new Date();
mail5.status = 1;


const mail6 = new Mail();
mail6.topic_id = '34';
mail6.content = 'different topic #3';
mail6.fromUser = 'tester3';
mail6.toUser = 'admin';
mail6.subject = 'test subject#3';
mail6.date = new Date();
mail6.status = 1;


const mails = [mail1, mail2, mail3, mail4, mail5, mail6];




