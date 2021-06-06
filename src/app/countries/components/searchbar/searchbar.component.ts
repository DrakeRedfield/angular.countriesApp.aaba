import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Input() placeholder:string = '';
  @Output() onSearch = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  textSearch: string = '';
  debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(500))
    .subscribe( value => {
      this.onDebounce.emit(value);
    });
  }

  keyPress(){
    this.debouncer.next( this.textSearch );
  }

  search(){
    this.onSearch.emit(this.textSearch);
  }

}
