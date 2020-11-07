export const noOp = () => {}

export const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const isNotEmptyArray = (arr: string[] | any) =>
  Array.isArray(arr) && arr.length > 0

export const splitString = (text: string, divider: string) =>
  text.split(divider).join(' ')
