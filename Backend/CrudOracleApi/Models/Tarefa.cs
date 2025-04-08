using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CrudOracleApi.Models
{
    [Table("TAREFAS", Schema = "SYSTEM")]

    public class Tarefa
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }

        [Column("TITULO")]
        public string? Titulo { get; set; }

        [Column("DESCRICAO")]
        public string? Descricao { get; set; }

        [Column("CONCLUIDO")]
        public bool Concluido { get; set; }
    }
}
