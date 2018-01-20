import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
    console.log('Created auth service');
  }

  public isLoggedIn(): boolean {
    return true;
  }

}
