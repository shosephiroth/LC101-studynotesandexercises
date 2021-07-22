// Define your Book class here:

class book {
  constructor(title, author, copyrightDate, iSBN, numOfPages, timesCheckedOut, checkOutLimit, discardedYN) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.iSBN = iSBN;
    this.numOfPages = numOfPages;
    this.timesCheckedOut = timesCheckedOut;
    this.checkOutLimit = checkOutLimit;
    this.discardedYN = discardedYN;
    
  }
  //define methods
  checkOutBook() {
    this.timesCheckedOut += 1;
    return this.timesCheckedOut;
  }
  shouldBeDiscarded() {
    if (this.timesCheckedOut > this.checkOutLimit) {
      this.discardedYN = true;
      return this.discardedYN;
    }
  }
}


// Define your Manual and Novel classes here:


// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here:
