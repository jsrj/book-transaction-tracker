using Microsoft.EntityFrameworkCore;

namespace books_transaction_tracker.Models
{
    public class TransactionsContext : DbContext
    {
        public TransactionsContext(DbContextOptions<TransactionsContext> options)
            : base(options)
        {
            this.Database.EnsureCreated();
        }
        public DbSet<Transaction> Transactions { get; set; }
    }
}