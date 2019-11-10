import { Injectable } from '@angular/core';

const STORAGE_KEY = 'wishlist';
const DELIM = ',';
export interface ITEM {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }

  getList() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  }

  add(item) {
    const items = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    items.push(item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  remove(identifier) {
    const items = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const newItems = items.filter(el => el['identifier'] !== identifier);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
  }

}
