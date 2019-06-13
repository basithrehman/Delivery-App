import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = '6274852';
@Injectable()
export class LocalStorageService {
     anotherTodolist = [];
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

     public storeOnLocalStorage(status, Email) {
          
          // get array of tasks from local storage
          var currentTodoList = this.storage.get(STORAGE_KEY) || [];
          // push new task to array
          currentTodoList = {
              login: status,
              email: Email
          };
          // insert updated array to local storage
          this.storage.set(STORAGE_KEY, currentTodoList);
          console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
          return this.storage.get(STORAGE_KEY);
     }

  public getLocalStorage() {

          return this.storage.get(STORAGE_KEY);
  }

}
