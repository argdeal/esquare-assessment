import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter<string>();
  @ViewChild('inputTxt') input: ElementRef;
  term$ = new Subject<string>();
  subscription = null;

  constructor() { }

  ngOnInit() {
    this.subscription = this.term$.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(txt => {
      this.search.emit(txt);
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  clear() {
    this.input.nativeElement.value = '';
  }

}
