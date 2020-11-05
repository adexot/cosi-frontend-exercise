const reqClient = (url: string, options?: Record<string, any>) =>
  fetch(url, options).then((res) => res.json())

export default reqClient
