// @ts-check

/**
 * @fileoverview response.helper.js, agregamos metodos de respuesta personalizadas al parámetro "res" de express
 * @version     1.0
 * @author      David Sandoval <ing.david1993@gmail.com>
 *
 * History
 * v1.0     -   creación del archivo
 */

const responseCodes = {
  created: 201,
  deleted: 200,
  updated: 200,
  no_content: 204,
  invalidRequest: 400,
  unsupportedResponseType: 400,
  invalidScope: 400,
  invalidGrant: 400,
  invalidCredentials: 400,
  invalidRefresh: 400,
  noData: 400,
  invalidData: 400,
  accessDenied: 401,
  unauthorized: 401,
  invalidClient: 401,
  forbidden: 403,
  resourceNotFound: 404,
  notAcceptable: 406,
  resourceExists: 409,
  conflict: 409,
  resourceGone: 410,
  payloadTooLarge: 413,
  unsupportedMediaType: 415,
  tooManyRequests: 429,
  serverError: 500,
  unsupportedGrantType: 501,
  notImplemented: 501,
  temporarilyUnavailable: 503
}

const responseHelper = (req, res, next = null) => {
  res.respond = ({ data = null, status = 200, message = '' }) => {
    res.statusCode = status

    if (data === null) {
      return res.json(message)
    } else {
      return res.json({ code: status, data })
    }
  }

  res.fail = ({ description, status = 400, errors = null }) => {
    const message = {
      status,
      description,
      errors
    }

    res.respond({ message })
  }

  res.respondCreated = ({ data = null, message = '' }) => {
    res.respond({ data, status: responseCodes.created, message })
  }

  res.respondDeleted = ({ data = null, message = '' }) => {
    res.respond({ data, status: responseCodes.deleted, message })
  }

  res.respondUpdated = ({ data = null, message = '' }) => {
    res.respond({ data, status: responseCodes.updated, message })
  }

  res.respondNoContent = () => {
    res.respond({ data: null, status: responseCodes.no_content })
  }

  res.failUnauthorized = ({ description = 'Unauthorized', code = null }) => {
    res.fail({ description, status: responseCodes.unauthorized, code })
  }

  res.failForbidden = ({ description = 'Forbidden', code = null }) => {
    res.fail({ description, status: responseCodes.forbidden, code })
  }

  res.failNotFound = ({ description = 'Not Found', code = null }) => {
    res.fail({ description, status: responseCodes.resourceNotFound, code })
  }

  res.failValidationError = ({ description = 'Bad Request', errors = [] }) => {
    res.fail({ description, status: responseCodes.invalidData, errors })
  }

  res.failServerError = ({ description = 'Internal Server Error', code = null }) => {
    res.fail({ description, status: responseCodes.serverError, code })
  }

  if (next !== null) { next() }
}

export {
  responseHelper,
  responseCodes
}
