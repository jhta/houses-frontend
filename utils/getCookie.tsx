export function parseCookies(request) {
  const list = {},
    rc = request.headers.cookie;

  rc &&
    rc.split(';').forEach((cookie) => {
      var parts = cookie.split('=');
      list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

  return list;
}

export function getTokenFromRequest(req) {
  const cookies = parseCookies(req);
  return cookies['token'];
}
