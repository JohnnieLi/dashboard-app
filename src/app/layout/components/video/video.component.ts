import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ɵEMPTY_ARRAY} from '@angular/core';
import {Router} from '@angular/router';
import {Plan} from '../../../models/Plan';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit, AfterViewInit {

    @Input()
    plans: Plan[];
    @Input()
    service: any;
    @Input()
    type = 1; // 1: preview  2: edit view

    selectedGrade = 0;
    @Output()
    selected: EventEmitter<any> = new EventEmitter<any>();


    player: any;
    thumbImages = [];

    constructor(public router: Router) {
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        const doc = (<any>window).document;
        const playerApiScript = doc.createElement('script');
        playerApiScript.type = 'text/javascript';
        playerApiScript.src = 'https://www.youtube.com/iframe_api';
        doc.body.appendChild(playerApiScript);
    }


    ngOnInit() {
        this.loadYoutube('-d342sq7QG4');
        this.toggleVideo();

        setTimeout(() => this.switchYoutube('Wm2Bqs3r0hI'), 10000);
    }


    loadYoutube(videoId) {
        this.thumbImages[0] = 'https://img.youtube.com/vi/' + videoId + '/0.jpg';
        this.thumbImages[1] = 'https://img.youtube.com/vi/' + videoId + '/1.jpg';
        (<any>window).onYouTubeIframeAPIReady = () => {
            this.player = new (<any>window).YT.Player('ytplayer', {
                height: '600px',
                width: '100%',
                videoId: videoId,
                playerVars: {'autoplay': 0, 'rel': 0, 'controls': 2},
                events: {
                    'onReady': () => {
                    },
                    'onStateChange': () => {
                    }
                }
            });
        };
    }

    switchYoutube(videoId) {
        this.thumbImages[0] = 'https://img.youtube.com/vi/' + videoId + '/0.jpg';
        this.thumbImages[1] = 'https://img.youtube.com/vi/' + videoId + '/1.jpg';
        this.player.loadVideoById(videoId);
        this.player.pauseVideo();
    }

    toggleVideo() {
        const elVideoToggle = document.querySelector('.video-toggle');
        elVideoToggle.addEventListener('click', e => {
            elVideoToggle.classList.toggle('active');
            const condition = elVideoToggle.matches('.active');
            if (!condition) {
                console.log(condition);
                this.player.pauseVideo();
            } else {
                console.log(condition, this.player);
                this.player.playVideo();
            }
        });
    }




}
