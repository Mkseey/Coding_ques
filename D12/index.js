function sortBooksByGenre(books) {
    // Sort the books array based on the genre (the third element in each book details)  
    books.sort((a, b) => {
        // If genres are the same, maintain the original order        
        if (a[2] === b[2]) {
            return 0;
        } else {
            return a[2].localeCompare(b[2]);

            // Sort genres alphabetically     
        }
    }); // Extract and return only the titles of the sorted books   
    return books.map(book => book[0]);
} // Example usage:
const books = [["The Great Gatsby", "F. Scott Fitzgerald", "fiction"],
["The Diary of a Young Girl", "Anne Frank", "non-fiction"],
["Harry Potter and the Philosophers Stone", "J.K. Rowling", "children"],
["The Catcher in the Rye", "J.D. Salinger", "fiction"]];
const sortedTitles = sortBooksByGenre(books);

console.log(sortedTitles);