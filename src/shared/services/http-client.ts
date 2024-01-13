const headerConfig = { 'Content-Type': 'application/json' }

enum HttpRequestMethods {
  POST = 'POST',
  GET = 'GET',
}

class HttpClient {
  static async get(url: string, headers?: Record<string, string>) {
    const request = await fetch(url, {
      method: HttpRequestMethods.GET,
      headers: {
        ...headerConfig,
        ...headers,
      },
    })
    const responseObject = await request.json()
    return responseObject
  }

  static async post<T>(url: string, body: T, headers?: Record<string, string>) {
    const request = await fetch(url, {
      method: HttpRequestMethods.POST,
      headers: {
        ...headerConfig,
        ...headers,
      },
      body: JSON.stringify(body),
    })
    const responseObject = await request.json()
    return responseObject
  }
}

export default HttpClient
