import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit{

  id: number = 0;

  id$ =this.router.params.pipe(map(params => params['roomid']));

  constructor(private router:ActivatedRoute){}

  ngOnInit():void{
    // this.router.params.subscribe((params) => {this.id = params['roomid'];})

    this.router.paramMap.subscribe((params) => {
      params.get('roomid');
    })
   
  }
}