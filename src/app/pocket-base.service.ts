import { Injectable } from '@angular/core'
import PocketBase from 'pocketbase'

@Injectable({
  providedIn: 'root',
})
export class PocketBaseService {
  constructor() {
    this.pb = new PocketBase('http://127.0.0.1:8090')
  }
  pb
  async viewTest() {
    return await this.pb.collection('users').getOne('RECORD_ID', {
      expand: 'relField1,relField2.subRelField',
    })
  }
}
