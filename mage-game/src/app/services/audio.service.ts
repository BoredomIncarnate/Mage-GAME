import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

export enum Track {
    Opening = 'assets/soundtrack/space.mp3'
}


@Injectable({
    providedIn: 'root',
})

export class AudioService {
    audioPlayer: any;

    constructor(private storeService: StoreService) {
        this.audioPlayer = new Audio();
    }

    setTrack = (track: Track) => {
        this.audioPlayer.src = track
    }

    play = () => this.audioPlayer.play();
}