import { Box, VStack } from "@chakra-ui/react";
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import AppBar from "~/components/AppBar";
import NavBar from "~/components/NavBar";
import { authenticator } from "~/services/auth.server";
import { destroySession, getSession } from "~/sessions";
export async function action({ request }: ActionArgs) {
  console.log("call action here layout admin");
  const session = await getSession(request.headers.get("Cookie"));
  return await authenticator.logout(request, { redirectTo: "/login" });
}
export default function Index() {
  return (
    <Box
      width={"100%"}
      height="100%"
      display={"flex"}
      flexDir="row"
      alignItems={"flex-start"}
      justifyContent="flex-start"
    >
      <NavBar />
      <VStack width={"100%"} height="100%">
        <AppBar />
        <Outlet />
      </VStack>
    </Box>
  );
}
