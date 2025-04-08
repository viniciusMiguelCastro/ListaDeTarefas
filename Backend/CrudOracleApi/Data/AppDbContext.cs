using Microsoft.EntityFrameworkCore;
using CrudOracleApi.Models;

namespace CrudOracleApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Tarefa> Tarefas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tarefa>().ToTable("TAREFAS", schema: "SYSTEM");
            modelBuilder.Entity<Tarefa>()
                .Property(t => t.Concluido)
                .HasConversion<int>();
        }
    }
}
