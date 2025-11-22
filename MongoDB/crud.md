# CRUD Operations

| Operation       | Code                                                              |
|-----------------|-------------------------------------------------------------------|
| Create one      | `await Model.create({ name: 'Alice' })`                           |
| Create many     | `await Model.insertMany([{...}, {...}])`                          |
| Find all        | `await Model.find()`                                              |
| Find with filter| `await Model.find({ role: 'admin' })`                             |
| Find one        | `await Model.findOne({ email: 'a@b.com' })`                       |
| Find by ID      | `await Model.findById(id)`                                        |
| Update one      | `await Model.findByIdAndUpdate(id, { name: 'New' }, { new: true })` |
| Update many     | `await Model.updateMany({ active: false }, { archived: true })`   |
| Delete one      | `await Model.findByIdAndDelete(id)`                               |
| Delete many     | `await Model.deleteMany({ archived: true })`                      |
| Count           | `await Model.countDocuments({ role: 'user' })`                    |
