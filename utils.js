

export async function loadBooks() {
  try {
    // Wait for the file to be fetched
    const response = await fetch('./books.json');
    
    if (!response.ok) {
      throw new Error("Failed to load file");
    }
    
    // Wait for the response to be parsed into a JSON array
    const booksArray = await response.json();
    
    // RETURN the array!
    return booksArray; 
    
  } catch (error) {
    console.error("Error:", error);
    return []; // Return an empty array if something breaks
  }
}
