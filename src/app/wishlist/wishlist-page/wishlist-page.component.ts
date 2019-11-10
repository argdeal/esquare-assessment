import { Component, OnInit } from "@angular/core";
import { WishlistService } from "../wishlist.service";

@Component({
  selector: "app-wishlist-page",
  templateUrl: "./wishlist-page.component.html",
  styleUrls: ["./wishlist-page.component.scss"]
})
export class WishlistPageComponent implements OnInit {
  list = null;

  constructor(private service: WishlistService) {
  }

  ngOnInit() {
    this.list = this.service.getList();
  }

  remove(idToRemove) {
    this.service.remove(idToRemove);
    this.list = this.service.getList();
  }
}
