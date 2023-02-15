import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookService} from '../../../shared/services/book.service';
import {BookDto} from "novel-ideas-api";
import {Page} from "../../../shared/models/page";
import {RxStompService} from "../../../shared/services/rx-stomp.service";
import {Message} from '@stomp/stompjs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  pageBookDto!: Page<BookDto>;
  bookDtoList!: BookDto[];
  bookDto!: BookDto;

  receivedMessages: string[] = [];
  private topicSubscription!: Subscription;

  constructor(private booksService: BookService, private rxStompService: RxStompService) {
  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((response) => {
      this.pageBookDto = response;
      this.bookDtoList = this.pageBookDto.content;

    });
    this.booksService.getBook(1).subscribe((response) => {
      this.bookDto = response;
    });
    this.topicSubscription = this.rxStompService
      .watch('/all/mesgs')
      .subscribe((message: Message) => {
        this.receivedMessages.push(message.body);
      });
  }

  ngOnDestroy() {
    this.topicSubscription.unsubscribe();
  }

  // connect() {
  //
  //   var socket = new SockJS('/ws');
  //   stompClient = Stomp.over(socket);
  //
  //   stompClient.connect({}, function(frame) {
  //
  //     setConnected(true);
  //     console.log('Connected: ' + frame);
  //     stompClient.subscribe('/all/mesgs', function(messageconput) {
  //
  //       showMessageOutput(JSON.parse(messageOutput.body));
  //     });
  //   });
  // }


}

