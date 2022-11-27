import { Box } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <Box height={"100%"}>
      <Link to={"/login"}>Login</Link>
    </Box>
  );
}
