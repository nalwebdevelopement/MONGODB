1  list all which as 
{ borough: "Brooklyn", cuisine: "Hamburgers" }

2 AND operrator - match both the query
{$and: [{ borough: "Brooklyn" }, { cuisine: "Hamburgers" }] }

3 OR operrator - match at leat one of many criteria
{ $or: [{ borough: "Brooklyn" }, { cuisine: "Hamburgers" }] }

4 NOR //show the document that do not match any of hte query
{$nor: [{ borough: "Brooklyn" }, { cuisine: "Hamburgers" }] }

5. NOT and REGx
{ name: { $not: /^i.*/ } }
show the  name field does not start with the letter "i".


 6. { name: /^A.*/ } 
 Shows all the name which starts with a

 7.The query { borough: { $ne: "Brooklyn" } } is a MongoDB query condition that means:
 
show the borough field is not equal to "Brooklyn".
 
 7.5 { name: { $ne: "le" } }

 shows all the name which dont have name le

 8. Sample weather data DB: sample_weatherdata
 { "wind.speed.quality": "1" }
Show all the data which has wind object, speed object quality of 1

9
{ "customer.age": { $gt: 30 } } // DB : sample_supplies

gets all the customer age is greater than 30

10. { $and :[{"customer.age": { $gt: 30 }}, {"customer.age": { $lt: 50 }}]}

 Fetch all the data customer age is greater than 30 and less than 50.


