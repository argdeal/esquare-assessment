import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { SearchService } from "../search.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.scss"]
})
export class SearchPageComponent {
  books$: Observable<any>;
  count$: Observable<number>;
  term = '';
  count = 0;
  private _loading = false;

  constructor(private service: SearchService) {
    this.service.initMaxItems(20);
  }

  searchItems(term, startPage = 0) {
    // if arguments length === 1 this is new world search
    // put pager to page 0
    if(arguments.length === 1) {
      this.service.newSearch();
    }

    if (term.length > 0) {
      this.term = term;

      this._loading = true;
      const result$ = this.service.getBooks(term, startPage)
                      
      this.books$ = result$.pipe(
        map(data => {
          if(this.count !== +data["totalItems"]) {
            this.count = +data["totalItems"];
          }
          if(data["items"]) {
            return data["items"];
          } else {
            return null;
          }
        })
      );
    } else {
      this._loading = false;
      this.books$ = null;
    }
  }

  onChangeStartIndex(startPage) {
    this.searchItems(this.term, startPage);
  }
}
