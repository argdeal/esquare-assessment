import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from 'src/app/dialog-content/dialog-content.component';

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"]
})
export class ListItemComponent implements OnInit {
  @Input() book:{};
  info = {};
  imgSrc = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.info = this.book['volumeInfo'] || {};
    if(this.info['imageLinks'] && this.info['imageLinks'].thumbnail) {
      this.imgSrc = this.info['imageLinks'].thumbnail;
    } else {
      this.imgSrc = '';
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '460px',
      data: this.book
    });
  }  
}
