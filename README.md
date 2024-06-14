# ob-scan-ts

Nested object to typescript interface

## Installation

```bash
npm install ob-scan-ts
```

## Usage
```ts
import { DotNestedKeys } from "ob-scan-ts";

const obj = { foo: { bar: 123, baz: 456 } };
type NestedKeys = DotNestedKeys<typeof obj>; // "foo.bar" | "foo.baz"
```

## API
### ```DotNestedKeys<T>```

Generates a union of string literals that represent nested keys of an object. Each key is separated by a dot.

#### Type Parameters
- `T` - The type of the input object.
#### Returns
The union type of keys in the object.
#### Example

```ts
const obj = { foo: { bar: 123, baz: 456 } };
type NestedKeys = DotNestedKeys<typeof obj>; // "foo.bar" | "foo.baz"
```

## Contributing

Contributions are welcome! If you find any issues or have any suggestions, please open an issue or submit a pull request.


## License

This project is licensed under the ISC License. See the LICENSE file for details.

