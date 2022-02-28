import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../shared/services/book.service';
import { BookDto } from "novel-ideas-api";
import { Page } from "../../../shared/models/page";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  pageBookDto!: Page<BookDto>;
  bookDtoList!: BookDto[];
  bookDto!: BookDto;

  constructor(private booksService: BookService) {
  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((response) => {
      this.pageBookDto = response;
      this.bookDtoList = this.pageBookDto.content;

    });
    this.booksService.getBook(1).subscribe((response) => {
      this.bookDto = response;
    });
  }

}

