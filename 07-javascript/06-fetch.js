const url = "https://anapioficeandfire.com/api/books/";
const app = document.querySelector("#books");
const loading = document.getElementById("loading");

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const books = await res.json();

    // Remove loading indicator
    loading.remove();

    books.forEach((book) => {
      const bookEl = document.createElement("div");
      bookEl.style.marginBottom = "1.5rem";

      const title = document.createElement("h2");
      title.textContent = book.name;

      const author = document.createElement("p");
      author.style.fontSize = "0.9rem";
      author.style.margin = "0.25rem 0";
      author.textContent = `by ${book.authors.join(", ")}`;

      const year = document.createElement("p");
      year.style.fontSize = "0.9rem";
      year.style.margin = "0.25rem 0";
      year.textContent = new Date(book.released).getFullYear();

      const pages = document.createElement("p");
      pages.style.fontSize = "0.9rem";
      pages.style.margin = "0.25rem 0";
      pages.textContent = `${book.numberOfPages} pages`;

      bookEl.appendChild(title);
      bookEl.appendChild(author);
      bookEl.appendChild(year);
      bookEl.appendChild(pages);
      app.appendChild(bookEl);
    });
  } catch (err) {
    loading.textContent = "Error loading books";
    console.error(err);
  }
};

fetchData(url);
