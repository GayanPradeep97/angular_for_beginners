import { ElementRef,AfterViewInit,Optional, Component, OnInit, ViewChild, ViewContainerRef,Inject } from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from './localstorag.token'

@Component({
  selector: 'hinv-roots',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  title = 'hotelinventoryapp';

  @ViewChild('name', {static:true}) name !: ElementRef;

  constructor(@Optional() private loggerService: LoggerService,
  @Inject(LocalStorageToken) private localStorage:any){
     
  }


  ngOnInit() : void {
    this.loggerService.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = "Hilton Hotel";

    this.localStorage.setItem('name', "Hilton Hotel");
  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef

  // ngAfterViewInit(): void {
      
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  // componentRef.instance.numberOfRooms = 50;

  // }
}
