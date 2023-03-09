import {hasValue, NullableType, NullUnionType, OptionalType} from "@digital-magic/ts-common-utils";

export const windowString = (name: string): string | undefined => {
  if (typeof window === 'undefined' || !Object.prototype.hasOwnProperty.call(window, name)) {
    return undefined
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const prop: unknown = window[name]
  return typeof prop === 'string' ? prop : undefined
}

export const windowBoolean = (name: string): boolean | undefined => {
  if (typeof window === 'undefined' || !Object.prototype.hasOwnProperty.call(window, name)) {
    return undefined
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const prop: unknown = window[name]
  return typeof prop === 'boolean' ? prop : undefined
}

export const fmap: <A,B>(f: (a: A) => B) => (v: OptionalType<A>) => OptionalType<B> = (f) => (v) => v !== undefined ? f(v) : undefined
export const optional: <A>(value: OptionalType<A> | NullableType<A> | NullUnionType<A>) => OptionalType<A> = (value) => hasValue(value) ? value : undefined
export const flatMap: <A,B>(value: OptionalType<A> | NullableType<A> | NullUnionType<A>, f: (a: A) => B) => OptionalType<B> = (value, f) => fmap(f)(optional(value))
