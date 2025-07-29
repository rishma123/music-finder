import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { SearchComponent } from "./search/search.component";
import { SongCardComponent } from "./song-card/song-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [SearchComponent, SongCardComponent, CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

  songs: any[] =[];

  loading = false ;

   constructor(private musicService: MusicService) {}

   handleSearch(term: string) {
    this.loading =  true;
    this.musicService.searchSongs(term).subscribe((res) => {
    this.songs = res.results;
     this.loading = false;
    });
   }

}
