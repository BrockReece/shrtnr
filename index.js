addEventListener("fetch", event => {
  if (event.request.method === 'POST') {
    event.respondWith(addRedirect(event.request))
  } else {
    event.respondWith(handleRequest(event.request))
  }
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const uri = url.pathname.replace('/', '')
  const value = await SHRTNR_KV.get(uri)

  if (value) {
    return Response.redirect(value, 301)
  } else {
    return new Response("Sorry, this link doesn't exist", {
      status: 404,
    })
  }
}

async function addRedirect(request) {
  const { key, value } = await request.json()
  
  const existing = await SHRTNR_KV.get(key)
  if (existing) {
    return new Response("Key already exists", {
      status: 500,
    })
  }

  await SHRTNR_KV.put(key, value)
  return new Response("Success", {
    status: 200,
  })
}