import { AfterViewInit,AfterViewChecked,ViewChildren, Component, DoCheck, OnInit, ViewChild,QueryList, OnDestroy } from '@angular/core';
import { RoomList, Rooms } from './rooms';
import { RoomListComponent} from './room-list/room-list.component'
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms.service';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit , AfterViewChecked, OnDestroy{

  hotelName:string = 'Hilton';

  numberOfRooms = 10;

  hideRooms =  true;

  selectedRoom !: RoomList
 
  rooms : Rooms = {
    totalRooms:20,
    availableRooms:10,
    bookedRooms:5,
  }

  title = 'Room List';

  roomlist : RoomList[]  = [];


  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();

  })


  @ViewChild(HeaderComponent) headeromponent !:HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent !: QueryList<HeaderComponent>;

  // roomService = new RoomsService(); //this is a service

  error:string ='';
  totalByts = 0;

  constructor(private roomService: RoomsService) {}

  ngOnInit(): void {

    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:{
          console.log("Request has been made!");
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log("Request success!");
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalByts += event.loaded;
          break;
      }
      case HttpEventType.Response: {
        console.log(event.body);
        break;
      }
    
    }})

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    })

    this.stream.subscribe((data) => console.log(data)); 
    this.roomService.getRooms$.subscribe(rooms => {
      this.roomlist = rooms;
    });
    
    
  }

  ngDoCheck(): void {
      console.log('on charges is called')
  }

  ngAfterViewInit(): void {
    this.headeromponent.title = "Rooms View";

    this.headerChildrenComponent.last.title = "Last Title";
  }

  ngAfterViewChecked(): void {
      
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber:'4',
      roomType:'Deluxe Room',
      amenities:'Air Conditoner',
      price:500,
      photo:'http://images.unsplash.com',
      checkinTime:new Date('11-Nov-2021'),
      checkoutTime:new Date('12-Nov-2021'),
      rating:4.525

    };

    // this.roomlist.push(room)
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomlist = data;
    });
    // this.roomlist = [...this.roomlist, room];
  }

  editRoom(){

    console.log('add')
    const room: RoomList = {
      roomNumber:'3',
      roomType:'Deluxe Room',
      amenities:'Air Conditoner',
      price:500,
      photo:'http://images.unsplash.com',
      checkinTime:new Date('11-Nov-2021'),
      checkoutTime:new Date('12-Nov-2021'),
      rating:4.525

    };

    this.roomService.addRoom(room).subscribe((data) => {
      this.roomlist = data;
    })
  }

  deleteRoom(){
    this.roomService.deleteData('4').subscribe((data) => {
      this.roomlist = data;
    });
  }

ngOnDestroy(): void {
    
}
  

}
function getRooms() {
  throw new Error('Function not implemented.');
}

