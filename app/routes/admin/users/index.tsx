import {
  Avatar,
  Badge,
  Box,
  HStack,
  IconButton,
  Kbd,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import type { LoaderFunction } from "@remix-run/node";
import TimeAgo from "react-timeago";
import type { UserRes } from "~/models/user.server";
import { getUsers } from "~/models/user.server";
import { AiOutlineEye } from "react-icons/ai";
import { MdDelete, MdEdit } from "react-icons/md";
import { Helper } from "~/utils/helper";
import { useLoaderData } from "@remix-run/react";
type LoaderData = {
  userData: UserRes;
};
export function ErrorBoundary({ error }: any) {
  console.error(error);
  return <Box>error</Box>;
}
export const loader: LoaderFunction = async () => {
  return {
    userData: await getUsers(),
  };
};

export default function Index() {
  let { userData } = useLoaderData() as LoaderData;

  return (
    <Box
      border={"1px gray solid"}
      boxShadow={"md"}
      flex="1"
      flexDir={"column"}
      display={"flex"}
      w="100%"
    >
      <Box bg={"blue.100"} flex={1} h="80%" overflowY={"auto"}>
        <Table size="sm">
          <Thead bg={"gray.100"}>
            <Tr height="40px">
              <Th>No</Th>
              <Th>Name</Th>
              <Th>EMail</Th>
              <Th>Username</Th>
              <Th>Role</Th>
              <Th>Status</Th>
              <Th>Created At</Th>
              <Th>Updated At</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <UserListTableBody data={userData.data} />
        </Table>
      </Box>
    </Box>
  );
}

const UserListTableBody = ({
  data,
  error,
  isLoading,
  onOpenDeleteDialog,
  setDeletingUser,
}: any) => {
  // if (isLoading) {
  //   return (
  //     <Tbody bg={"white"} w="100%">
  //       <Tr>
  //         <td colSpan={9}>
  //           <HStack p={"10px"} justifyContent="center" justifyItems={"center"}>
  //             <CircularProgress size={"20px"} isIndeterminate color="red.300" />
  //             <Text>Loading...</Text>
  //           </HStack>
  //         </td>
  //       </Tr>
  //     </Tbody>
  //   );
  // }

  // if (error) {
  //   console.log(error);

  //   return (
  //     <Tbody bg={"white"} w="100%">
  //       <Tr>
  //         <td colSpan={9}>
  //           <HStack
  //             p={"10px"}
  //             color="red.400"
  //             justifyContent="center"
  //             justifyItems={"center"}
  //           >
  //             <Icon as={MdError} />
  //             <Text> {error ?? "error"}</Text>
  //           </HStack>
  //         </td>
  //       </Tr>
  //     </Tbody>
  //   );
  // }

  if (data) {
    const onDelete = (id: string, name: string) => {};

    const onEdit = (id: string) => {
      console.log(id);
    };

    const onView = (id: string) => {
      console.log(id);
    };

    return (
      <Tbody bg={"white"}>
        {data.map((user: any, index: number) => {
          return (
            <Tr key={user._id}>
              <Td>{index + 1}</Td>
              <Td>
                <HStack>
                  <Avatar
                    src={Helper.toImageUrl(user.profile)}
                    size="sm"
                    name={user.first_name}
                    colorScheme="telegram"
                  />
                  <Text>{user.first_name + " " + user.last_name}</Text>
                </HStack>
              </Td>
              <Td>{user.email}</Td>
              <Td>
                <Kbd>{user.username}</Kbd>
              </Td>
              <Td>
                <Badge colorScheme="blue">{user.role}</Badge>
              </Td>
              <Td>
                <Badge colorScheme={user.status == "active" ? "green" : "red"}>
                  {user.status}
                </Badge>
              </Td>
              <Td>
                <TimeAgo date={user.createdAt} />
              </Td>
              <Td>
                <TimeAgo date={user.updatedAt} />
              </Td>

              <Td>
                <HStack>
                  <IconButton
                    aria-label="refresh"
                    icon={<AiOutlineEye />}
                    size="sm"
                    rounded={0}
                    colorScheme="telegram"
                    onClick={() => onView(user._id)}
                  />
                  <IconButton
                    aria-label="refresh"
                    icon={<MdEdit />}
                    size="sm"
                    rounded={0}
                    colorScheme="orange"
                    onClick={() => onEdit(user._id)}
                  />
                  <IconButton
                    aria-label="refresh"
                    icon={<MdDelete />}
                    size="sm"
                    rounded={0}
                    colorScheme="red"
                    onClick={() =>
                      onDelete(user._id, user.first_name + " " + user.last_name)
                    }
                  />
                </HStack>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    );
  }

  return <Box></Box>;
};
