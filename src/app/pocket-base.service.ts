import { Injectable } from '@angular/core'
import PocketBase from 'pocketbase'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PocketBaseService {
  constructor() {
    this.pb = new PocketBase(environment.pocketbase.url)
  }
  pb
  async viewTest() {
    return await this.pb.collection('users').getOne('RECORD_ID', {
      expand: 'relField1,relField2.subRelField',
    })
  }
}
