# Query Filters

| Operator | Description                    | Example                        |
|----------|--------------------------------|--------------------------------|
| $eq      | Equal to                       | { price: { $eq: 100 } }        |
| $ne      | Not equal to                   | { status: { $ne: 'deleted' } } |
| $gt      | Greater than                   | { price: { $gt: 50 } }         |
| $gte     | Greater than or equal          | { age: { $gte: 18 } }          |
| $lt      | Less than                      | { stock: { $lt: 10 } }         |
| $lte     | Less than or equal             | { rating: { $lte: 3 } }        |
| $in      | Value in array                 | { category: { $in: ['a','b'] }}|
| $nin     | Value not in array             | { status: { $nin: ['x','y'] }} |