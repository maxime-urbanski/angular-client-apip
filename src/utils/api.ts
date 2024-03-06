export default async function (id: string, options: any = {}) {
  const ENTRYPOINT = 'https://localhost'

  if (typeof options.headers === 'undefined') {
    Object.assign(options, {headers: new Headers()});
  }

  // enable CORS for all requests
  Object.assign(options, {
    mode: "cors",
    // credentials: 'include', // when credentials needed
  });

  const Url = new URL(id, ENTRYPOINT);

  const response = await fetch(new URL(id, ENTRYPOINT), options)

  if (!response.ok) {
    const data = await response.json();
    const error = data["hydra:description"] || response.statusText;
    return error
  }

  return response
}
