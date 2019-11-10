import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WishlistService } from '../wishlist/wishlist.service';

export const LANG = {
  'en':'English',
  'iw':'Hebrew'
}

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {
  info = '';
  imgSrc = '';
  lang = ''

  constructor(
    private wlService: WishlistService,
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) {
      this.info = this.data['volumeInfo'] || {};
      if(this.info['imageLinks'] && this.info['imageLinks'].thumbnail) {
        this.imgSrc = this.info['imageLinks'].thumbnail;
      } else {
        this.imgSrc = '';
      }
  
      if(this.info['language']) {
        this.lang = LANG[this.info['language']];
      } 
      
    }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  addToWishlist() {
    const src = Array.isArray(this.info['industryIdentifiers']) ? 
                this.info['industryIdentifiers'][0] : 
                {};

    this.wlService.add({ 
      identifier: src.identifier,
      title: this.info['title'] || 'N/A'
    });
  }

}
