import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarefas-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tarefas-list.component.html',
  styleUrls: ['./tarefas-list.component.css']
})
export class TarefasListComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTarefas();
  }

  getTarefas(): void {
    this.tarefaService.getTarefas().subscribe(tarefas => {
      this.tarefas = tarefas;
    });
  }

  deletarTarefa(id: number): void {
    this.tarefaService.deleteTarefa(id).subscribe(() => {
      this.getTarefas();
    });
  }

  editarTarefa(id: number): void {
    this.router.navigate(['/tarefas/edit', id]);
  }
}
