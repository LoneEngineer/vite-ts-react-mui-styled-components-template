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
