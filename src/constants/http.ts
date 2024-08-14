/** The request could not be understood by the server due to malformed syntax. */
export const BAD_REQUEST = 400;

/** Authentication is required and has failed or has not yet been provided. */
export const UNAUTHORIZED = 401;

/** The requested resource could not be found but may be available in the future. */
export const NOT_FOUND = 404;

/** The server understands the request, but it refuses to authorize it. */
export const FORBIDDEN = 403;

/** The request was valid, but the server is refusing action due to client errors. */
export const UNPROCESSABLE_ENTITY = 422;

/** The server encountered an unexpected condition that prevented it from fulfilling the request. */
export const INTERNAL_SERVER_ERROR = 500;

/** The server does not support the functionality required to fulfill the request. */
export const NOT_IMPLEMENTED = 501;

/** The server is currently unable to handle the request due to temporary overloading or maintenance. */
export const SERVICE_UNAVAILABLE = 503;

/** The client must take additional action to complete the request (e.g., redirection). */
export const MULTIPLE_CHOICES = 300;

/** The resource has been permanently moved to a new location. */
export const MOVED_PERMANENTLY = 301;

/** The request method is not allowed on the resource. */
export const METHOD_NOT_ALLOWED = 405;

/** The request is larger than the server is willing or able to process. */
export const PAYLOAD_TOO_LARGE = 413;

/** The requested resource is no longer available and has no forwarding address. */
export const GONE = 410;

/** The request could not be completed due to a conflict with the current state of the resource. */
export const CONFLICT = 409;

/** The user has sent too many requests in a given amount of time. */
export const TOO_MANY_REQUESTS = 429;

/** The client needs to upgrade to a different protocol. */
export const UPGRADE_REQUIRED = 426;

/** The server is refusing to process a request because the request entity is in a format not supported by the requested resource. */
export const UNSUPPORTED_MEDIA_TYPE = 415;

/** The server timed out waiting for the request. */
export const REQUEST_TIMEOUT = 408;

/** The request was successful, and the server responded with the requested resource. */
export const OK = 200;

/** The request was successful, and the server has created a new resource. */
export const CREATED = 201;

/** The request was successful, but there is no content to send in the response. */
export const NO_CONTENT = 204;

/** The request was successful, and the server has fulfilled the request but does not need to return any data. */
export const RESET_CONTENT = 205;

/** The request was successful, and the server is providing information to the client to update or refresh the resource. */
export const PARTIAL_CONTENT = 206;

/** The server successfully processed the request, but the response includes additional information. */
export const ACCEPTED = 202;

/** The request requires proxy authentication. */
export const PROXY_AUTHENTICATION_REQUIRED = 407;
