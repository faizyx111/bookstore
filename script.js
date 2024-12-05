class Books {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  getAvailablitity = () => {
    if (this.numCopies === 0) {
      console.log("out of stock");
    } else if (this.numCopies <= 10) {
      console.log("low stock");
    } else {
      console.log("in stock");
    }
  };

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
    console.log(
      `Sold copies:${numCopiesSold} \n books left: ${this.numCopies}`
    );
  }

  restock(numCopiesRestocked = 5) {
    this.numCopies += numCopiesRestocked;
    console.log(`Restocked Books:${this.numCopies}`);
  }
}

const book1 = new Books("THE LEGEND OF OZ", "ELEZ", 332, 100);
