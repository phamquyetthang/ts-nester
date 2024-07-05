# ob-scan-ts

> [!IMPORTANT]
> This package has been renamed to [`ts-nester`](https://www.npmjs.com/package/ts-nester) with more features


Nested object to typescript interface

## Installation

```bash
npm install ob-scan-ts
```

## Usage
### Nested object to typescript types
```ts
import { DotNestedKeys } from "ob-scan-ts";

const obj = { foo: { bar: 123, baz: 456 } };
type NestedKeys = DotNestedKeys<typeof obj>; // "foo.bar" | "foo.baz"
```

### JSON to typescript types ( i18n use case )
```ts
import * as en from "en.json"

type TranslateKey = DotNestedKeys<typeof en>


// use TranslateKey for create a custom hook
export const useAppTranslate = () => {
  const { t: tOrigin } = useTranslation();

  const t = (key: TranslationKeys) => tOrigin(key);
  return {
    t,
  };
};

export default i18n;
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

### ```ChildItemType<T, key>```
#### Example
```ts
  // Example usage
interface Obj {
  foo: string[];
  bar: { baz: number };
  baz: Array<{id: number, name: string}>;
}
type FooItem = ChildItemType<Obj, "foo"> // string
type BarItem = ChildItemType<Obj, "bar"> // { baz: number }
type BazItem = ChildItemType<Obj, "baz"> // { id: number, name: string }
```

### ```ChildType<T, key>```
#### Example
```ts
// Example usage
interface Obj {
  foo: string[];
  bar: { baz: number };
}
type FooItem = ChildType<Obj, "foo"> // string[]
type BarItem = ChildType<Obj, "bar"> // { baz: number }
```

## Contributing

Contributions are welcome! If you find any issues or have any suggestions, please open an issue or submit a pull request.


## License

This project is licensed under the ISC License. See the LICENSE file for details.

