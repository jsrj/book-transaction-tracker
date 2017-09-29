using System;

namespace books_transaction_tracker.Models
{
    public class Transaction
	{
        private string updateDate;
        private string transactionDate;

        public int    ID              { get; set; }
		    public int    Closed          { get; set; }

		    public string Book            { get; set; }
		    public string TransactionType { get; set; }
		    public string TransactionDate
		    {
            get { return this.transactionDate; }
            set {
                  if(value == "generate-new")
                  {
                    this.transactionDate = DateTime.Now.ToString();
                  }
                }
		    }
        public string UpdateDate
        {
            get { return this.updateDate; }
            set {
                  if (value != "N/A")
                  {
        					  this.updateDate = DateTime.Now.ToString();
                  }
                  if (value == "N/A" )
                  {
                    this.updateDate = "N/A";
                  }
            }
        }
	  }
}
