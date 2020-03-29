import Router from 'next/router';
import cookies from 'js-cookie';
import { NextPageContext } from 'next';

export async function handleAuthSSR(ctx: NextPageContext): Promise<void> {
  const token = cookies.get('token');

  // continue
  if (token) return undefined;

  // redirect
  if (ctx.res) {
    ctx.res.writeHead(302, {
      Location: '/',
    });
    ctx.res.end();
  } else {
    Router.push('/');
  }
}
