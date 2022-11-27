export default defineEventHandler((event) => {
  return {
    headers: event.node.req.headers,
    url: event.node.req.url,
  }
})