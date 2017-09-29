using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using books_transaction_tracker.Models;
using System.Diagnostics.Contracts;

namespace books_transaction_tracker
{
  // API Route Root
  [Route("api/[controller]")]
  public class TransactionsController : Controller
  {

    // Include context 
    private readonly              TrackerContext _context;
    public TransactionsController(TrackerContext context)
    {
      _context = context;
    }

        // GET: api/transactions (Retrieve list of all transactions)
        [HttpGet]
        public IEnumerable<Transaction> GetAllTransactions()
        {
            return _context.Transactions.ToList();
        }

        // GET api/transactions/1 (Retrieve transaction by Transaction ID)
        [HttpGet("{id}", Name = "GetTransactionByID")]
        public IActionResult GetTransactionById(long id)
        {
          Contract.Ensures(Contract.Result<IActionResult>() != null);
          var transaction = _context.Transactions.FirstOrDefault(t => t.ID == id);


          if (transaction == null)
          {
            return NotFound("No Transactions with that ID Number exist.");
          }

          ObjectResult response = new ObjectResult(transaction);
          return response;
        }

        // POST api/transactions (Add a new transaction)
        [HttpPost]
        public IActionResult CreateTransaction([FromBody]Transaction transaction)
        {
          if (transaction == null)
          {
            return BadRequest("Cannot create an empty transaction.");
          }

          transaction.UpdateDate = "N/A";
          var bookToEdit = _context.Books.FirstOrDefault(r => r.Title == transaction.Book);
          if (bookToEdit == null)
          {
            return NotFound("Could not find a book by that title.");
          }

          // Quantity cannot be lower than number issued.
          if (!(bookToEdit.Issued >= bookToEdit.Quantity))
          {
            // Only number of books (quantity) may be edited.
            bookToEdit.Issued += 1;

            _context.Books.Update(bookToEdit);

          }
          _context.Transactions.Add(transaction);
          _context.SaveChanges();

          return CreatedAtRoute("GetTransactionByID", new { id = transaction.ID }, transaction);
        }

        // PATCH api/transactions/42 (Update transaction by ID)
        [HttpPatch("{id}")]
        public IActionResult UpdateTransaction(long id, [FromBody]Transaction transaction)
        {

          if (transaction == null)
          {
            return BadRequest("Server failed to retrieve information from request.");
          }

          var TransactionToUpdate = _context.Transactions.FirstOrDefault(res => res.ID == id);
          var bookToReturn = _context.Books.FirstOrDefault(res => res.Title == TransactionToUpdate.Book);

          if (TransactionToUpdate == null)
          {
            return NotFound("Could not find a transaction associated with that Transaction ID number.");
          }

          if (bookToReturn == null)
          {
            return NotFound("Could not find a book by that title.");
          }


          if (TransactionToUpdate.Closed == 1)
          {
            return BadRequest("This transaction has already been closed and cannot be further edited.");
          }
          else if (transaction.TransactionType == "RETURN")
          {
            TransactionToUpdate.TransactionType = "RETURN";
            TransactionToUpdate.UpdateDate = "NOW";
            TransactionToUpdate.Closed = 1;
            bookToReturn.Issued -= 1;

            _context.Books.Update(bookToReturn);
            _context.Transactions.Update(TransactionToUpdate);

            _context.SaveChanges();

          } else {
            return BadRequest("You must specify whether or not you intend to process this transaction as a return.");
          }
          return Ok("Transaction # " + TransactionToUpdate.ID + " returned successfully.");
        }
  }
}


