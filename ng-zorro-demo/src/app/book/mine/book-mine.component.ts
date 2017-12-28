import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,  ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { BookMineService  } from './../book-mine.service';
import { Book } from './../book';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';

import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'app-book-mine',
    templateUrl: './book-mine.component.html',
    styleUrls: ['./book-mine.component.scss']
})

export class BookMineComponent implements OnInit {
    @Input() books: Observable<Book[]>;

     uname: string;
    webname: string;
    private searchTerms = new Subject<string>();
    constructor(
        private bookMineService: BookMineService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        console.log('hahah');
        this.books = this.route.paramMap
            .switchMap((params: ParamMap) => this.bookMineService.getUname(params.get('webname')));
            // .subscribe(book => this.book = book)
            // .catch(error => {
            //     // TODO: add real error handling
            //     console.log(error);
            //     return Observable.of<Hero[]>([]);
            // });
        console.log(this.books );
    }

    // getUname(uname: string): string {
    //     this.book.uname = uname;
    //     console.log(this.uname);
    //     console.log(this.webname);
    //     return this.uname;
    // }
}
