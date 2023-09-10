"use strict";

// 11.  Write a program that models social network connections and performs actions like adding friends and finding mutual friends..

// Sample Input:

//   const users = [

//   { id: 1, name: "Alice", friends: [2, 3] },

//   { id: 2, name: "Bob", friends: [1, 3, 4] },

//   { id: 3, name: "Charlie", friends: [1, 2, 4] },

//   { id: 4, name: "David", friends: [2, 3] }

// ];

// Sample Output: Common Friends of Alice and Charlie: ["Bob"]
// const users = [
//   { id: 1, name: "Alice", friends: [2, 3] },
//   { id: 2, name: "Bob", friends: [1, 3, 4] },
//   { id: 3, name: "Charlie", friends: [1, 2, 4] },
//   { id: 4, name: "David", friends: [2, 3] },
// ];

// function findCommonFriends(users, userId1, userId2) {
//   const user1 = users.find((user) => user.id === userId1);
//   const user2 = users.find((user) => user.id === userId2);

//   if (!user1 || !user2) {
//     return [];
//   }

//   const commonFriends = user1.friends.filter((friendId) =>
//     user2.friends.includes(friendId)
//   );
//   return commonFriends.map(
//     (friendId) => users.find((user) => user.id === friendId).name
//   );
// }

// const userId1 = 1;
// const userId3 = 3;

// const commonFriends = findCommonFriends(users, userId1, userId3);
// console.log(
//   `Common Friends of ${users.find((user) => user.id === userId1).name} and ${
//     users.find((user) => user.id === userId3).name
//   }: ${commonFriends}`
// );

// 12. Write a program that manages product listings, user accounts, and transaction history for an online marketplace.

// Sample Input:

//   const products = [

//   { id: 1, name: "Laptop", price: 1000 },

//   { id: 2, name: "Phone", price: 500 },

//   { id: 3, name: "Tablet", price: 300 }

// ];

// const users = [

//   { id: 1, name: "Alice", balance: 1500 },

//   { id: 2, name: "Bob", balance: 1000 }

// ];

// Sample Output:

// Alice's Remaining Balance after Buying Laptop: 500

// Bob's Transaction History: [{ product: "Phone", price: 500 }]
// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
//   { id: 3, name: "Tablet", price: 300 },
// ];

// const users = [
//   { id: 1, name: "Alice", balance: 1500, transactionHistory: [] },
//   { id: 2, name: "Bob", balance: 1000, transactionHistory: [] },
// ];

// // Function to buy a product for a user
// function buyProduct(userId, productId) {
//   const user = users.find((user) => user.id === userId);
//   const product = products.find((product) => product.id === productId);

//   if (!user || !product) {
//     console.log("User or product not found.");
//     return;
//   }

//   if (user.balance >= product.price) {
//     user.balance -= product.price;
//     user.transactionHistory.push({
//       product: product.name,
//       price: product.price,
//     });
//     console.log(
//       `${user.name}'s Remaining Balance after Buying ${product.name}: ${user.balance}`
//     );
//   } else {
//     console.log(
//       `${user.name} does not have enough balance to buy ${product.name}.`
//     );
//   }
// }

// // Example usage:
// buyProduct(1, 1); // Alice's Remaining Balance after Buying Laptop: 500
// buyProduct(2, 2); // Bob's Remaining Balance after Buying Phone: 500

// console.log(
//   "Bob's Transaction History:",
//   users.find((user) => user.id === 2).transactionHistory
// );

// 13. Write a program that implements a stack using recursion and provides basic stack operations (push, pop, peek).

// Sample Output:

// Stack: [1, 2, 3]

// Pop: 3

// Peek: 2

// Stack after Pop: [1, 2]

// 14. Write a program that converts a time in 12-hour format to 24-hour format.

// Sample Input:   const time12Hour = "03:45 PM";

// Sample Output: Time in 24-Hour Format: "15:45"
// function convert12HourTo24Hour(time12Hour) {
//   const match = time12Hour.match(/(\d{2}):(\d{2}) (AM|PM)/);

//   if (!match) {
//     return "Invalid input format";
//   }

//   let hours = parseInt(match[1], 10);
//   const minutes = match[2];
//   const period = match[3];

//   if (period === "PM" && hours !== 12) {
//     hours += 12;
//   } else if (period === "AM" && hours === 12) {
//     hours = 0;
//   }

//   const time24Hour = `${hours.toString().padStart(2, "0")}:${minutes}`;

//   return `Time in 24-Hour Format: "${time24Hour}"`;
// }

// const time12Hour = "03:45 PM";

// const result = convert12HourTo24Hour(time12Hour);
// console.log(result);

// 15. Write a program that takes an arbitrary number of arguments and calculates their average using a rest parameter.

// Sample Input:   const avg = (10, 20, 30, 40, 50);

// Sample Output: Average: 30
// function calculateAverage(...numbers) {
//   if (numbers.length === 0) {
//     return "No numbers provided";
//   }

//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   const average = sum / numbers.length;

//   return `Average: ${average}`;
// }

// const avg = calculateAverage(10, 20, 30, 40, 50);

// console.log(avg);

// 16 Write a program that takes an arbitrary number of numbers and calculates their product using a rest parameter.

// Sample Input:  const product = (2, 3, 4, 5);

// Sample Output: Product: 120

// function calculateProduct(...numbers) {
//   if (numbers.length === 0) {
//     return "No numbers provided";
//   }

//   const product = numbers.reduce((acc, num) => acc * num, 1);

//   return `Product: ${product}`;
// }

// const result = calculateProduct(2, 3, 4, 5);

// console.log(result);

// 17. Write a program that takes multiple objects and merges them into a single object using the spread syntax.

// Sample Input:

// const obj1 = { a: 1, b: 2 };

// const obj2 = { c: 3, d: 4 };

// const obj3 = { e: 5, f: 6 };

// Sample Output:  Merged Object: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// function mergeObjects(...objects) {
//   let mergedObject = {};

//   objects.forEach((obj) => {
//     mergedObject = { ...mergedObject, ...obj };
//   });

//   return mergedObject;
// }

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { e: 5, f: 6 };

// const mergedResult = mergeObjects(obj1, obj2, obj3);

// console.log("Merged Object:", mergedResult);

// 18. Write a program that takes an object, creates a copy of it, and extends it with new properties using the spread syntax.

// Sample Input:

// const original = { name: "John", age: 30 };

// const extended = { ...original, city: "New York", profession: "Engineer" };

// Sample Output: Extended Object: { name: "John", age: 30, city: "New York", profession: "Engineer" }

// function extendObject(original, newProperties) {
//   const extendedObject = { ...original };

//   return { ...extendedObject, ...newProperties };
// }

// const original = { name: "John", age: 30 };
// const newProperties = { city: "New York", profession: "Engineer" };

// const extendedObject = extendObject(original, newProperties);

// console.log("Extended Object:", extendedObject);

// 19. Write a program that validates user input and provides feedback or defaults..

// Sample Input:

//  const userInput = "   ";

// Sample Output:

// Processed Input: "No valid input provided."
// function processUserInput(userInput) {
//   userInput = userInput.trim();

//   if (userInput === "") {
//     return "Processed Input: No valid input provided.";
//   }

//   return `Processed Input: "${userInput}"`;
// }

// const userInput = "   ";

// const processedInput = processUserInput(userInput);

// console.log(processedInput);

// 20. Write a program that sorts a list of contacts based on their names.

// Sample Input: const contacts = [

//   { name: "Alice", phone: "123-456-7890" },

//   { name: "Bob", phone: "987-654-3210" },

//   { name: "Charlie", phone: "555-123-4567" }

// ];

// Sample Output:

// Sorted Contacts:

// - Alice: 123-456-7890

// - Bob: 987-654-3210

// - Charlie: 555-123-4567

function sortContactsByName(contacts) {
  contacts.sort((a, b) => a.name.localeCompare(b.name));

  const sortedContacts = contacts
    .map((contact) => `- ${contact.name}: ${contact.phone}`)
    .join("\n");

  return `Sorted Contacts:\n${sortedContacts}`;
}

const contacts = [
  { name: "Alice", phone: "123-456-7890" },
  { name: "Bob", phone: "987-654-3210" },
  { name: "Charlie", phone: "555-123-4567" },
];

const sortedContacts = sortContactsByName(contacts);
console.log(sortedContacts);
