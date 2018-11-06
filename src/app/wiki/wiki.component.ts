import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HistoryComponent } from '../history/history.component';

@Component({
  providers: [HomeComponent, HistoryComponent], //To access its attributes and methods.
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  wikiSearchString: string;
  wikiResults: any[];
  limit: number = 100;

  constructor(private route: ActivatedRoute, private comp: HomeComponent) {
    this.route.params.subscribe(res => {
      if (res.string){
        this.wikiSearchString = res.string;
        this.searchWiki(this.limit);
      }
    });
  }

  searchWiki(limit: number){ //Retrieve the variable information from the HomeComponent and call its function.
    console.log(this.wikiSearchString);
    this.comp.wikiSearchString = this.wikiSearchString;
    this.comp.searchWiki(limit);
    this.wikiResults = this.comp.wikiResults;
  }

  ngOnInit() {
  }

}
