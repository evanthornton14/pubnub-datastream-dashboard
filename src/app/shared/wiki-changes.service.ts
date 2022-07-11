import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WikiChange } from '../models/wiki-change.model';

@Injectable({
  providedIn: 'root'
})
export class WikiChangesService {
  constructor(private http: HttpClient) {}

}


