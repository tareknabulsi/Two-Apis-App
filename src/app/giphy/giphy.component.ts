import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HistoryComponent } from '../history/history.component';

@Component({
  providers: [HomeComponent, HistoryComponent],
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  giphySearchString: string;
  giphyResults: string[];
  limit: number = 100;

  constructor(private route: ActivatedRoute, private comp: HomeComponent) {
    this.route.params.subscribe(res => {
      if (res.string){
        this.giphySearchString = res.string;
        this.searchGiphy(this.limit);
      }
    });
  }

  searchGiphy(limit: number){
    console.log(this.giphySearchString);
    this.comp.giphySearchString = this.giphySearchString;
    this.comp.searchGiphy(limit);
    this.giphyResults = this.comp.giphyResults;
  }

  ngOnInit() {
  }

}
