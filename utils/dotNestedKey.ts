type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;


/**
 * Generates a union of string literals that represent nested keys of an object.
 * Each key is separated by a dot.
 *
 * @template T - The type of the input object.
 * @returns The union type of keys in the object.
 * @example
 * const obj = { foo: { bar: 123, baz: 456 } };
 * type NestedKeys = DotNestedKeys<typeof obj>; // "foo.bar" | "foo.baz"
 */
export type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
          DotNestedKeys<T[K]>
        >}`;
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;