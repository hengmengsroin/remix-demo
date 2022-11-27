import { Box, Button, IconButton, Spacer } from "@chakra-ui/react";

export default function AppBar() {
  return (
    <Box
      height={"50px"}
      bg="blue.50"
      w={"100%"}
      display="flex"
      flexDir={"row"}
      p="10px"
      alignItems={"center"}
      justifyItems={"center"}
    >
      <Spacer />
      <form method="post">
        <Button type={"submit"} name={"btn"} aria-label="logout">
          Logout
        </Button>
      </form>
    </Box>
  );
}
