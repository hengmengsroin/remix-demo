import { HStack } from "@chakra-ui/react";
import type { ActionArgs } from "@remix-run/node";
export async function action({ request }: ActionArgs) {
  console.log("call action in /admin");
}
export default function Index() {
  return <HStack width={"100%"} height="100%"></HStack>;
}
