import { Injectable } from '@angular/core';

const STORAGE_KEY = 'loggedInUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() : boolean {
    return !!localStorage.getItem(STORAGE_KEY);
  }

  getUsername() {
    return localStorage.getItem(STORAGE_KEY);
  }

  login(username) {
    localStorage.setItem(STORAGE_KEY, username);
  }
}
