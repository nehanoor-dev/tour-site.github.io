import { Injectable } from '@angular/core';
import jsonData from './../../assets/data/data.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
private data = jsonData;

  constructor() { }

  getData() {
    return this.data;
  }
}
