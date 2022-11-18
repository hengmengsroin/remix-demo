import { Box, Button, HStack, IconButton, Spacer } from "@chakra-ui/react";

export default function AppBar() {
  return (
    <Box
      height={"50px"}
      bg="blue.50"
      w={"100%"}
      display="flex"
      flexDir={"row"}
      px="10px"
      alignItems={"center"}
      justifyItems={"center"}
    >
      <Spacer />
      <form method="post">
        <IconButton type={"submit"} name={"btn"} aria-label="logout">
          Logout
        </IconButton>
      </form>
    </Box>
  );
}
