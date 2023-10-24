/*
  59 - Get Optional
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer

  ### Question

  Implement the advanced util type `GetOptional<T>`, which remains all the optional fields

  For example

  ```ts
  type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
  ```

  > View on GitHub: https://tsch.js.org/59
*/

import type { Equal, Expect } from "../utils";

type A = { foo: number | undefined; bar?: undefined };
type B = A["bar"];

type GetOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};

type cases = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<
    Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>
  >
];
