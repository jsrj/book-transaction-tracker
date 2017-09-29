using System;
using Microsoft.EntityFrameworkCore;

namespace books_transaction_tracker.Models
{
	public class TrackerContext : DbContext
	{
    public DbSet<Book>        Books        { get; set; }
    public DbSet<Transaction> Transactions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
            // On PC
      optionsBuilder.UseSqlServer("Server = (localdb)\\MSSQLLocalDB; Database = BooksTracker; Trusted_Connection = True;");

            // On Mac
      //optionsBuilder.UseInMemoryDatabase("DummyDatabase");
    }
  }
}
