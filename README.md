# ts-nester
[![ESLint](https://github.com/phamquyetthang/ts-nester/actions/workflows/eslint.yml/badge.svg)](https://github.com/phamquyetthang/ts-nester/actions/workflows/eslint.yml)
[![NPM Version](https://img.shields.io/npm/v/ts-nester)](https://www.npmjs.com/package/ts-nester)

A TypeScript utility for converting nested JSON objects into TypeScript interfaces, optimized

## Features

- Generate TypeScript interfaces from nested JSON objects.
- Support for i18n applications.
- Lightweight and easy to integrate.

## Installation

Install `ts-nester`

```bash
npm install ts-nester
```

Or using yarn:

```bash
yarn add ts-nester
```
## Usage

### Converting Nested Objects to TypeScript Types

```ts
import { DotNestedKeys } from "ts-nester";

const obj = { foo: { bar: 123, baz: 456 } };
type NestedKeys = DotNestedKeys<typeof obj>; // "foo.bar" | "foo.baz"
```

### Leveraging for i18n Applications

```ts
import * as en from "en.json";

type TranslationKeys = DotNestedKeys<typeof en>;

// Example of creating a custom hook for translation
export const useAppTranslate = () => {
  const { t: tOrigin } = useTranslation();

  const t = (key: TranslationKeys) => tOrigin(key);
  return {
    t,
  };
};

export default i18n;
```

## API Reference

### `DotNestedKeys<T>`

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

### `FlattenedTypePaths<T>`

Generates a flattened representation of an object's type structure, mapping each nested path to its corresponding value type. This utility type iterates over each key generated by `DotNestedKeys<T>` and resolves the type of the value at each nested path. The resulting type is an object with keys in the format 'parent.child', each mapping to the type of the value at that path.

#### Type Parameters

- `T` - The input object type to be flattened.

#### Example

```ts
const example = { foo: { bar: 123, baz: 456 } };
type Result = FlattenedTypePaths<typeof example>;
// Expected type: {'foo.bar': number, 'foo.baz': number}
```

### `DeepFlattenedTypePaths<T, Depth>`

Recursively generates a flattened representation of an object's type structure, mapping each nested path to its corresponding value type up to a specified depth. This utility type iterates over each key in the object, and for objects at each level, it recursively applies itself to flatten the structure. The depth parameter controls how deep the type should recurse into the object's structure, allowing for selective depth flattening.

#### Type Parameters

- `T` - The input object type to be flattened.
- `Depth` - A numeric literal type that specifies the maximum depth to flatten the object. A depth of 1 means no recursion.

#### Example

```ts
const example = {
  b: {
    c: 1,
    d: 2,
    e: {
      f: 1,
      g: {
        k: 10,
        l: "22",
      },
    },
  },
};

// Flatten up to depth 2
type ResultDepth2 = DeepFlattenedTypePaths<typeof example, 2>;
// Expected type: { 'b.c': number, 'b.d': number, 'b.e': { f: number, g: { k: number, l: string } } }

// Flatten up to depth 3
type ResultDepth3 = DeepFlattenedTypePaths<typeof example, 3>;
// Expected type: { 'b.c': number, 'b.d': number, 'b.e.f': number, 'b.e.g.k': number, 'b.e.g.l': string }
```

### `ChildItemType<T, key>`

#### Example

```ts
// Example usage
interface Obj {
  foo: string[];
  bar: { baz: number };
  baz: Array<{ id: number; name: string }>;
}
type FooItem = ChildItemType<Obj, "foo">; // string
type BarItem = ChildItemType<Obj, "bar">; // { baz: number }
type BazItem = ChildItemType<Obj, "baz">; // { id: number, name: string }
```

### `ChildType<T, key>`

#### Example

```ts
// Example usage
interface Obj {
  foo: string[];
  bar: { baz: number };
}
type FooItem = ChildType<Obj, "foo">; // string[]
type BarItem = ChildType<Obj, "bar">; // { baz: number }
```

## Contributing

Contributions are welcome! If you find any issues or have any suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the ISC License. See the LICENSE file for details.
