namespace books_transaction_tracker.Models
{
    public class Book
    {

      public int    ID           { get; set; }
      public int    Quantity     { get; set; }
      public int    Issued       { get; set; }

      public string ISBN         { get; set; }
      public string Title        { get; set; }
      public string Author       { get; set; }
      public string PublishDate  { get; set; }
      public string BookCategory { get; set; }
    }
}
