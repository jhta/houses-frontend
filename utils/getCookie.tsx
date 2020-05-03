export function parseCookies(request): { [key: string]: string } {
  const list = {},
    rc = request.headers.cookie;

  rc &&
    rc.split(';').forEach((cookie) => {
      var parts = cookie.split('=');
      list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

  return list;
}

export function getCookie(req, cookieName: string): string {
  const cookies = parseCookies(req);
  return cookies[cookieName];
}

export function getTokenFromRequest(req): string {
  const cookies = parseCookies(req);
  return cookies['token'];
}
