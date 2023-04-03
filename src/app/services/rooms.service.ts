import { Injectable,Inject } from '@angular/core';
import { RoomList } from '../rooms/rooms';
import { environment} from '../environment/environment'
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appConfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

roomlist : RoomList[] = [
];

getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
  shareReplay(1)
)

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http: HttpClient) { 

    console.log(this.config.apiEndpoint);
     console.log('Room Service Intialized..');
  }

  getRooms(){
    return this.http.get<RoomList[]>('api/rooms')
  }

  addRoom(room: RoomList){
    return this.http.post<RoomList[]>('api/rooms',room)
  }

  updateRoom(room: RoomList){
    return this.http.put<RoomList[]>(`api/rooms/${room.roomNumber}`,room)
  }

  deleteData(id:string){
    return this.http.delete<RoomList[]>(`api/rooms/${id}`);
  }

  getPhotos(){
    const request = new HttpRequest('GET',`
    https://jsonplaceholder.typicode.com/photos`,
    {
      reportProgress: true,
    });
    return this.http.request(request);
  }

}
