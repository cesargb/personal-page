export default defineEventHandler((event) => {
  return {
    works: true,
    headers: event.node.req.headers,
    url: event.node.req.url,
  }
})