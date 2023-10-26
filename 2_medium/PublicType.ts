/*
  28333 - Public Type
  -------
  by KaiKai (@kaikaibenkai) #medium #object-keys

  ### Question

  Remove the key starting with `_` from given type `T`.

  > View on GitHub: https://tsch.js.org/28333
*/


import type { Equal, Expect } from "../utils";

type PublicType<T extends object> = {
    [Key in keyof T as Key extends `_${string}` ? never : Key] : T[Key]
}


    type cases = [
    Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
    Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
    Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
    Expect<Equal<PublicType<{ d: string; _e: string }>, { d: string }>>,
    Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
    Expect<Equal<PublicType<{ g: '_g' }>, { g: '_g' }>>,
    Expect<Equal<PublicType<{ __h: number; i: unknown }>, { i: unknown }>>,
]