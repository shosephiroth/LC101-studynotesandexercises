// Define your Book class here:

class book {
  constructor(title, author, copyrightDate, iSBN, numOfPages, timesCheckedOut, discardedYN) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.iSBN = iSBN;
    this.numOfPages = numOfPages;
    this.timesCheckedOut = timesCheckedOut;
    this.discardedYN = discardedYN;
    
  }
  //define methods
  checkOutBook(timesCheckedOut) {
    this.timesCheckedOut += 1;
    return this.timesCheckedOut;
  }
}


// Define your Manual and Novel classes here:


// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here:
