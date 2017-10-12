import sinon from 'sinon'
import { SUCCESS_CODE } from 'constants/httpStatusConstants'

const server = sinon.fakeServer.create({
  autoRespond: true,
  autoRespondAfter: 1000,
})

server.xhr.useFilters = true

server.xhr.addFilter((method, url) => {
  return method !== 'PUT'
})

const CONTENT_TYPE = { 'Content-Type': 'application/json' }

server.respondWith('PUT', /(.*?)/, function (request) {
  const responseBody = `{"resource":[${request.requestBody}]}`

  request.respond(SUCCESS_CODE, CONTENT_TYPE, responseBody)
})
