/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/auth/Login`; params?: Router.UnknownInputParams; } | { pathname: `/auth/Signup`; params?: Router.UnknownInputParams; } | { pathname: `/auth/ForgotPassword`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/Login`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/Signup`; params?: Router.UnknownOutputParams; } | { pathname: `/auth/ForgotPassword`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/auth/Login${`?${string}` | `#${string}` | ''}` | `/auth/Signup${`?${string}` | `#${string}` | ''}` | `/auth/ForgotPassword${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/auth/Login`; params?: Router.UnknownInputParams; } | { pathname: `/auth/Signup`; params?: Router.UnknownInputParams; } | { pathname: `/auth/ForgotPassword`; params?: Router.UnknownInputParams; };
    }
  }
}
