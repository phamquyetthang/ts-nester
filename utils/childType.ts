/**
 * The type of the child item.
 *
 * @template T - The type of the parent object.
 * @template key - The key of the child item.
 * @returns The type of the child item. If the child item is an array, the type of its elements is returned.

 * @example
 * // Example usage
 * interface Obj {
 *   foo: string[];
 *   bar: { baz: number };
 *   baz: Array<{id: number, name: string}>;
 * }
 *
 * type FooItem = ChildItemType<Obj, "foo"> // string
 * type BarItem = ChildItemType<Obj, "bar"> // { baz: number }
 * type BazItem = ChildItemType<Obj, "baz"> // { id: number, name: string }
 */
export type ChildItemType<T, key extends keyof T> = T[key] extends Array<any> ? T[key][number] : T[key];



/**
 * The type of the child.
 *
 * @template T - The type of the parent object.
 * @template key - The key of the child item.
 * @returns The type of the child item. If the child item is an array, the type of its elements is returned.
 * @example
 * // Example usage
 * interface Obj {
 *   foo: string[];
 *   bar: { baz: number };
 * }
 *
 * type FooItem = ChildType<Obj, "foo"> // string[]
 * type BarItem = ChildType<Obj, "bar"> // { baz: number }
 */
export type ChildType<T, key extends keyof T> = T[key];

