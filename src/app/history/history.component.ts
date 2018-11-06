import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  searches: any[];
  searchRef: any;
  isHistoryRetrieved: boolean;

  constructor(private database: AngularFireDatabase) {
    this.searches = [];
    this.searchRef = this.database.list('Searches');
    this.isHistoryRetrieved = false;
  }

  getHistory(){
    this.searchRef.valueChanges().subscribe((results: any) => {
      if (this.isHistoryRetrieved)
        return; //If history displayed once already, don't continuously update.
      results.forEach(result => {
        this.searches.push({searchText: result.SearchText, createdAt: result.CreatedAt, userID: result.UserID,});
      });
      this.searches.reverse();
      console.log(this.searches);
      this.isHistoryRetrieved = true;
    });
  }

  addSearchToHistory(time: string, createdAt: string, searchText: string, userID: string){
    if (searchText.trim() != '')
      this.searchRef.set(time, {CreatedAt: createdAt, SearchText: searchText, UserID: userID});
  }

  ngOnInit() {
    this.getHistory();
  }
}
