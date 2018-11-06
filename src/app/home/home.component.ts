import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { wikiBit, giphyBit } from '../../environments/environment';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HistoryComponent } from '../history/history.component';

@Component({
  providers: [HistoryComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  wikiBitUrl: string;
  giphyBitUrl: string;
  wikiResults: any[];
  giphyResults: string[];
  wikiSearchString: string;
  giphySearchString: string;
  wikiLimit: number = 20;
  giphyLimit: number = 16;

  constructor(private http: HttpClient, private router: Router, private comp: HistoryComponent) {
    this.wikiBitUrl = ``;
    this.giphyBitUrl = ``;
    this.wikiResults = [];
    this.giphyResults = [];
    this.wikiSearchString = '';
    this.giphySearchString = '';
  }

  ngOnInit() {
  }

  searchWikiAndRoutePage(){
    this.router.navigate(['../wiki', this.wikiSearchString]);
  }

  searchGiphyAndRoutePage(){
    this.router.navigate(['../giphy', this.giphySearchString]);
  }

  searchWiki(limit: number) {
    this.wikiResults = [];
    this.wikiBitUrl = `${wikiBit.urlBase}${limit}&srsearch=${this.wikiSearchString}`;
    this.http.get(this.wikiBitUrl).subscribe( (results: any) => {
      results.query.search.forEach(result => {
        this.wikiResults.push({name: result.title, iD: result.pageid});
      });
      console.log(this.wikiResults);
    },
    (error) => {
      console.log(error);
    });
    var date: Date = new Date();
    var stringDate: string = date.toDateString();
    this.addSearchToHistory(date.toString(), date.toString(), this.wikiSearchString, 'Guest');
  }

  searchGiphy(limit: number) {
    this.giphyResults= [];
    this.giphyBitUrl= `${giphyBit.urlBase}${giphyBit.apiKey}&q=${this.giphySearchString}&limit=${limit}&offset=0&rating=Y&lang=en`;
    this.http.get(this.giphyBitUrl).subscribe( (results: any) => {
      results.data.forEach(result => {
        this.giphyResults.push(result.images.original.url);
      });
      console.log(this.giphyResults);
    },
    (error) => {
      console.log(error);
    });
    var date: Date = new Date();
    this.addSearchToHistory(date.toString(), date.toString(), this.giphySearchString, 'Guest');
  }

  addSearchToHistory(time: string, createdAt: string, searchText: string, userID: string){
    this.comp.addSearchToHistory(time, createdAt, searchText, userID);
  }
}
