import { Component, Input, OnInit } from '@angular/core';
import { WikiChange } from '../models/wiki-change.model';

@Component({
  selector: 'app-wiki-change-list',
  templateUrl: './wiki-change-list.component.html',
  styleUrls: ['./wiki-change-list.component.css']
})
export class WikiChangeListComponent implements OnInit {
  
  @Input()
  changes: ReadonlyArray<WikiChange> = [];
  // @Output()
  // add = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

}
