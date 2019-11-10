import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SearchService } from '../../search.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent {
  @Input() count = 0;
  @Input() maxPageSize = 10;
  @Output() onChangeIndex = new EventEmitter<number>();

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private service: SearchService) { 
    this.service.pageCount$.subscribe( (newCount: number) => {
      this.count = newCount;
      this.paginator.length = newCount;
    });
    this.service.newSearch$.subscribe( () => {
      this.paginator.firstPage();
    });
  }

  onPage($event) {
    const startFrom = $event.pageIndex;
    this.onChangeIndex.emit(startFrom);
  }

}
