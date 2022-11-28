import { Heading, VStack } from "@chakra-ui/react";
import type { ActionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
export async function action({ request }: ActionArgs) {
  console.log("call action here layout users");
  return await authenticator.logout(request, { redirectTo: "/login" });
}
export default function Index() {
  return (
    <VStack width={"100%"} height="100%" alignItems={"flex-start"} p="20px">
      <Heading>Users</Heading>
      <Outlet />
    </VStack>
  );
}
