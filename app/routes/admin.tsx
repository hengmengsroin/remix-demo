import { Box, Center, HStack, VStack } from "@chakra-ui/react";
import { ActionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import AppBar from "~/components/AppBar";
import NavBar from "~/components/NavBar";
import { authenticator } from "~/services/auth.server";
import { getSession } from "~/services/session.server";
export async function action({ request }: ActionArgs) {
  await authenticator.logout(request, { redirectTo: "/login" });
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
