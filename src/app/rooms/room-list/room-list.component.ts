import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output, SimpleChange } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnDestroy{

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  @Input() title: string = '';


  ngOnChanges(changes: SimpleChange):void {
    console.log(changes);
    if((changes as any ['title'] && changes.currentValue)){
      this.title = (changes as any ['title']).currentValue.toUpperCase();
    }
  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room)
  }

  ngOnDestroy(): void {
    console.log('on destroy test')
}

}

