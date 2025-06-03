$(document).ready(function () {
  const url = "https://anapioficeandfire.com/api/books/";

  $.get(url, function (data) {
    // Remove loader
    $("#loading").remove();

    data.forEach((book) => {
      const bookBlock = $(`
        <div style="text-align: center; margin-bottom: 2rem;">
          <h2 style="margin-bottom: 0.25rem;">${book.name}</h2>
          <p style="margin: 0; font-size: 0.9rem; color: #555;">by ${book.authors.join(
            ", "
          )}</p>
          <p style="margin: 0.4rem 0 0 0;">${new Date(
            book.released
          ).getFullYear()}</p>
          <p style="margin: 0;">${book.numberOfPages} pages</p>
        </div>
      `);

      $("#books").append(bookBlock);
    });
  });
});
