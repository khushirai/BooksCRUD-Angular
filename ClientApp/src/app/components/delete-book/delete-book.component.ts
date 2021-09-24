import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BookService } from 'src/app/services/book.service';
import { AppState } from 'src/app/store/app.state';
import * as bookActions from './../../store/book.actions';
@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book:any;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:BookService,
    private store:Store<AppState>) { }

  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id).subscribe(data=>{
      this.book=data;
    })
  }

  deleteBook(id:number){
    // this.service.deleteBook(id).subscribe(data=>{
    //   this.router.navigate(["/books"]);
    // })
    this.store.dispatch(new bookActions.deleteBookAction(id));
  }

}
