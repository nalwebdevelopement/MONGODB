
// 1  list all which as 
// { borough: "Brooklyn", cuisine: "Hamburgers" }

// 2 AND operrator - match both the query
// {$and: [{ borough: "Brooklyn" }, { cuisine: "Hamburgers" }] }

// 3 OR operrator - match at leat one of many criteria
// { $or: [{ borough: "Brooklyn" }, { cuisine: "Hamburgers" }] }

// 4 NOR //show the document that do not match any of hte query
// {$nor: [{ borough: "Brooklyn" }, { cuisine: "Hamburgers" }] }

// 5. NOT and REGx
// { name: { $not: /^i.*/ } }

// The expression { name: { $not: /^i.*/ } } is a MongoDB query condition that means:

// name: This refers to the field in the MongoDB documents being queried.
// $not: This is a MongoDB operator that negates the specified condition.
// /^i.*/: This is the regular expression that matches any string starting with the letter "i".
// Overall meaning:
// The query { name: { $not: /^i.*/ } } will return documents where the name field does not start with the letter "i".
//  For example, it would match names like "John", "Apple", and "cat", but not "item", "ice", or "index".

//  6. { name: /^A.*/ }
//  Shows all the name which starts with a

//  7.The query { borough: { $ne: "Brooklyn" } } is a MongoDB query condition that means:
 
// borough: This refers to the field in the MongoDB documents being queried.
// $ne: This is the MongoDB operator for "not equal". It matches documents where the field value is not equal to the specified value.
// Overall meaning:
// This query will return documents where the borough field is not equal to "Brooklyn".
//  Any document where borough is "Brooklyn" will be excluded from the result set.

//  { name: { $ne: "le" } }

//  shows all the name which dont have name le

//  8. Sample weather data DB: sample_weatherdata
//  { "wind.speed.quality": "1" }
// Show all the data which has wind object, speed object quality of 1

// 9{ "customer.age": { $gt: 30 } } // DB : sample_supplies

// gets all the customer age is greater than 30

// 10. { $and :[{"customer.age": { $gt: 30 }}, {"customer.age": { $lt: 50 }}]}

//  Fetch all the data customer age is greater than 30 and less than 50.







