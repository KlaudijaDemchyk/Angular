import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): User[] {
    return [
      new User('Ivan',12),
      new User('Marina',17),
      new User('Misha',30),
      new User('Sergay',44),
    ]
  }

  constructor() { }
}
