import { Heading, VStack } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <VStack width={"100%"} height="100%" alignItems={"flex-start"} p="20px">
      <Heading>Users</Heading>
      <Outlet />
    </VStack>
  );
}
