import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Helper } from './helper';

export function requireAuth(gssp: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    // if (Helper.isBrowser) {
    //   let isLoggedIn = Helper.isAuth();
    //   if (!isLoggedIn) {
    //     return {
    //       redirect: {
    //         destination: "/login",
    //         permanent: false,
    //       },
    //     };
    //   }
    // } else {
    //   return {
    //     redirect: {
    //       destination: "/login",
    //       permanent: false,
    //     },
    //   };
    // }

    return await gssp(ctx);
  };
}
