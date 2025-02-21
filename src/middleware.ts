import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en|fr|hi|ar|de|it|ja|ko|pt|ru|zh)/:path*']
};