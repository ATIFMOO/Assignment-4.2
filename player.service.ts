import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:3000/players'; // URL to your backend API

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }

  getPlayer(id: number): Observable<Player> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Player>(url);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player);
  }

  updatePlayer(player: Player): Observable<any> {
    const url = `${this.apiUrl}/${player.id}`;
    return this.http.put(url, player);
  }

  deletePlayer(player: Player | number): Observable<Player> {
    const id = typeof player === 'number' ? player : player.id;
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Player>(url);
  }
}
