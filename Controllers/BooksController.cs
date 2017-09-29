using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using books_transaction_tracker.Models;

namespace books_transaction_tracker
{
  // API Route Root
  [Route("api/[controller]")]
	public class BooksController : Controller
	{
		// Include context
    private readonly       TrackerContext _context;
		public BooksController(TrackerContext context)
		    {
			    _context = context;

           // Seeds database if this POC is being run for the first time on a new machine.
           if (_context.Books.Count() == 0)
           {
              // Creates a 'seed' if there are no items in the db
              _context.Books.Add(new Book
              {
                Title        = "Database Seeding 101",
                Author       = "Robert Jones",
                Quantity     = 1,
                PublishDate  = "8/23/2017",
                BookCategory = "Digital Gardening",
                ISBN         = "123-4567890"
               });

              _context.Books.Add(new Book
              {
                Title        = "Ready Player One",
                Author       = "Ernest Cline",
                Quantity     = 1,
                PublishDate  = "06/05/2012",
                BookCategory = "Sci-Fi",
                ISBN         = "978-0307887443"
              });

              _context.Books.Add(new Book
              {
                Title        = "Snow Crash",
                Author       = "Neal Stephenson",
                Quantity     = 1,
                PublishDate  = "05/02/2000",
                BookCategory = "Sci-Fi",
                ISBN         = "978-0553380958"
              });

              _context.Books.Add(new Book
              {
                Title        = "Altered Carbon",
                Author       = "Richard K. Morgan",
                Quantity     = 1,
                PublishDate  = "03/04/2003",
                BookCategory = "Sci-Fi",
                ISBN         = "978-0345457684"
              });

              _context.Books.Add(new Book
              {
                Title        = "Perilous Waif",
                Author       = "E. William Brown",
                Quantity     = 1,
                PublishDate  = "01/23/2017",
                BookCategory = "Sci-Fi",
                ISBN         = "978-1520430577"
              });

              _context.Books.Add(new Book
              {
                Title        = "Necronomicon",
                Author       = "H.P. Lovecraft",
                Quantity     = 1,
                PublishDate  = "N/A",
                BookCategory = "Horror",
                ISBN         = "978-8494543852"
              });

              _context.Books.Add(new Book
              {
                Title        = "Illuminatus! Trilogy",
                Author       = "Robert Shea",
                Quantity     = 1,
                PublishDate  = "12/01/1983",
                BookCategory = "Consipiracy Fiction",
                ISBN         = "978-0440539810"
              });

            _context.SaveChanges();
           }
		    }

		    // GET: api/books (Retrieve list of all books)
		    [HttpGet]
		    public IEnumerable<Book> GetAll()
		{
			return _context.Books.ToList();
		}

		    // GET api/books/ID (Retrieve book by ID)
		    [HttpGet("{id}", Name = "GetBook")]
		    public IActionResult GetById(long id)
		{
			var book = _context.Books.FirstOrDefault(res => res.ID == id);

			if (book == null)
			{
				return NotFound("No Book with that ID exists.");
			}

			return new ObjectResult(book);
		}

        // GET: api/books/title/{id} (Retrieve book title by ID)
        [HttpGet("title/{id}")]
        public IActionResult GetTitleById(long id)
        {
            var book = _context.Books.FirstOrDefault(res => res.ID == id);

            if (book == null)
            {
                return NotFound("No Book with that ID exists.");
            }

        return Content(book.Title);
        }

		    // POST api/books (Add a new book)
		    [HttpPost]
		    public IActionResult Create([FromBody]Book book)
		{
			if (book == null)
			{
				return BadRequest();
			}
			_context.Books.Add(book);
			_context.SaveChanges();

			return CreatedAtRoute("GetBook", new { id = book.ID }, book);
		}

		    // PATCH api/books/42 (Edit book by ID)
		    [HttpPatch("{id}")]
		    public IActionResult Update(long id, [FromBody]Book book)
		{

			if (book == null)
			{
				return BadRequest("Server failed to retrieve information from request.");
			}

			var bookToEdit = _context.Books.FirstOrDefault(r => r.ID == id);
			if (bookToEdit == null)
			{
				return NotFound("Could not find a book with the provided ID number.");
			}


			// Per requirement 7: quantity cannot be lower that number issued.
			if (bookToEdit.Issued <= book.Quantity)
			{
				// Per requirement 6: Only number of books (quantity) may be edited.
				bookToEdit.Quantity = book.Quantity;

				_context.Books.Update(bookToEdit);
				_context.SaveChanges();


			}
			else
			{
				return BadRequest("You cannot have more books issued than you own.");
			}

			return Ok(bookToEdit.Title + " inventory updated to " + book.Quantity + " successfully.");
		}

		    // DELETE api/books/42 (Delete a book by ID)
		    [HttpDelete("{id}")]
		    public IActionResult Delete(long id)
		{

			/* Incorporate an *ngIf statement on the frontend to ensure
             * that the delete button only appears in the event that 
             * book.inventory is 0. The following logic is only as 
             * secondary protection to prevent deletion from occuring 
             * through some other means like postman or insomnia... */

			var bookFromId = _context.Books.FirstOrDefault(r => r.ID == id);
			var title = bookFromId.Title;
			if (bookFromId == null)
			{
				return NotFound("No book containing ID#" + id + "currently exists in inventory.");
			}
			if (bookFromId.Quantity == 0)
			{
				_context.Books.Remove(bookFromId);
				_context.SaveChanges();

				return Ok(title + " deleted successfully.");
			}
			else
			{
				return BadRequest("Cannot delete a book while it still has an inventory quantity.");
			}
		}
	}
}
