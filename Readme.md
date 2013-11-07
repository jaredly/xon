
Example:

```
var x = require('xon')

var fixture = {
  people: x.some(3, 10, {
    id: x.ObjectId(),
    type: 'person',
    age: x.randInt(21, 45),
    img: x.image(200, 200),
    name: x.fullName(),
    status: x.choice(['one', 'two', 'three']),
    location: x.city(),
    description: x.lipsum(100)
  })
}

var data = x(fixture)
```
