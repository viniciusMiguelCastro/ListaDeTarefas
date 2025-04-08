import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tarefas-edit',
  templateUrl: './tarefas-edit.component.html',
  styleUrls: ['./tarefas-edit.component.css'],
  imports: [FormsModule]
})
export class TarefasEditComponent implements OnInit {
  tarefa: Tarefa = { id: 0, titulo: '', descricao: '', concluido: false };

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tarefaService.getTarefaById(+id).subscribe(tarefa => {
        this.tarefa = tarefa;
      });
    }
  }
  
  salvar(): void {
    if (this.tarefa.id) {
      this.tarefaService.updateTarefa(this.tarefa).subscribe(() => {
        this.router.navigate(['/tarefas']);
      });
    } else {
      this.tarefaService.addTarefa(this.tarefa).subscribe(() => {
        this.router.navigate(['/tarefas']);
      });
    }
  }
}
