const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  try {
    const response = await fetch(url);
    const books = await response.json();

    // Hide the loader
    const loader = document.querySelector("#loading");
    if (loader) loader.style.display = "none";

    // Loop through each book and display
    books.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.style.background = "white";
      bookCard.style.padding = "1rem";
      bookCard.style.margin = "1rem auto";
      bookCard.style.borderRadius = "8px";
      bookCard.style.maxWidth = "400px";
      bookCard.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
      bookCard.style.textAlign = "left";

      bookCard.innerHTML = `
          <h2>${book.name}</h2>
          <p><strong>Author:</strong> ${book.authors.join(", ")}</p>
          <p><strong>Published:</strong> ${new Date(
            book.released
          ).getFullYear()}</p>
          <p><strong>Pages:</strong> ${book.numberOfPages}</p>
        `;

      app.appendChild(bookCard);
    });
  } catch (error) {
    app.innerHTML = "<p style='color:white;'>Failed to load books.</p>";
    console.error("Fetch error:", error);
  }
};

// Call the function to fetch and display books
fetchData(url);
