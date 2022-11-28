// app/routes/login.tsx
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Logo } from "~/components/Logo";
import { authenticator } from "~/services/auth.server";
import { commitSession, destroySession, getSession } from "~/sessions";

// First we create our UI with the form doing a POST and the inputs with the
// names we are going to use in the strategy
export default function Screen() {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Log in to your account
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Form method="post">
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input name="email" type="email" required />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup>
                    <Input
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      required
                    />
                  </InputGroup>
                </FormControl>
              </Stack>
            </Stack>

            <Stack spacing="6" mt={6}>
              <Button colorScheme="blue" type="submit">
                Sign in
              </Button>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Container>
  );
}

// Second, we need to export an action function, here we will use the
// `authenticator.authenticate method`
export async function action({ request }: ActionArgs) {
  // we call the method with the name of the strategy we want to use and the
  // request object, optionally we pass an object with the URLs we want the user
  // to be redirected to after a success or a failure
  let result = await authenticator.authenticate("user-pass", request);
  const session = await getSession(request.headers.get("Cookie"));
  if (result) {
    session.set("access_token", result.token);
    session.set("user_id", result.user._id);

    return redirect("/admin", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } else {
    session.flash("error", "Invalid username/password");
    return redirect("/login", {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    });
  }
}

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not
export async function loader({ request }: LoaderArgs) {
  // If the user is already authenticated redirect to /dashboard directly
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/admin",
  });
}
