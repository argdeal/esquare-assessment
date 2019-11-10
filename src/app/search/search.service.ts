import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const MAX = "maxResults=";
const START_INDEX = "startIndex=";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private _maxItems: number = 10;
  get maxItems(): number { return this._maxItems; };

  private pageCountChangeNotifier = new Subject<number>();
  pageCount$ = this.pageCountChangeNotifier.asObservable();  

  private newSearchNotifier = new Subject();
  newSearch$ = this.newSearchNotifier.asObservable();  

  constructor(private http: HttpClient) {}

  initMaxItems(max: number) {
    this._maxItems = max;
  }

  getBooks(term: string, startIndex = 0): Observable<any> {
    const url = this.createUrl(term, startIndex);
    return this.http.get(url);
  }

  updatePageCount(newCount) {
    this.pageCountChangeNotifier.next(newCount);
  }

  newSearch() {
    this.newSearchNotifier.next();
  }

  private createUrl(term, startPage = 0) {
    return `${BASE_URL}${term}&${MAX}${this.maxItems}&${START_INDEX}${startPage}`;
  }
}
