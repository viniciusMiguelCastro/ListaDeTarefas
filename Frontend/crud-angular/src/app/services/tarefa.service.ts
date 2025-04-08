import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:5000/api/tarefas';

export interface Tarefa {
  id?: number;
  titulo?: string;
  descricao?: string;
  concluido: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  constructor(private http: HttpClient) {}

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(API_URL);
  }

  getTarefaById(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${API_URL}/${id}`);
  }

  addTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(API_URL, tarefa);
  }

  updateTarefa(tarefa: Tarefa): Observable<void> {
    return this.http.put<void>(`${API_URL}/${tarefa.id}`, tarefa);
  }

  deleteTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }
}
