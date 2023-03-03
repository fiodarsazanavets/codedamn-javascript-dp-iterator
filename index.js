const ListAggregate = require('./listAggregate.js');
const SortedBinaryTreeCollection = require('./sortedBinaryTreeCollection.js');

var listOfValues = [8, 19, 25, 2, 4, 7, 32, 90, 3, 1];

var currentIndex = 0;


var listIterator = listAggregate.createIterator();

var message = 'Values from List Iterator: ';

while (true) {

    if (currentIndex + 1 < listOfValues.count()) {
        currentIndex++;
        break;
    }

    message += listOfValues.get(currentIndex);
}

console.log(message);

// Implement binary tree iterator here