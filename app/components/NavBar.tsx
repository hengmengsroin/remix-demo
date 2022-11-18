import { Box, Center, HStack, Icon } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import { IconType } from "react-icons";
import { MdHomeFilled, MdInfo, MdPeople, MdPhone } from "react-icons/md";
type MenuItemType = {
  name: string;
  href: string;
  icon: IconType;
};
const menuItems: MenuItemType[] = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: MdHomeFilled,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: MdPeople,
  },
  {
    name: "Contact",
    href: "/admin/contact",
    icon: MdPhone,
  },
];

const NavBar = () => {
  const navigate = useNavigate();
  const handleMenuClick = (item: string) => {
    navigate(item);
  };
  return (
    <Box w="300px" bg="blue.50" display={"flex"} flexDir="column" p="20px">
      <Center p="20px" fontWeight={"bold"} fontSize="3xl" color="orange.600">
        LOGO
      </Center>
      <Box>
        {menuItems.map((item) => (
          <HStack
            key={item.name}
            p="10px"
            my="10px"
            color={"blue.600"}
            cursor="pointer"
            _hover={{ bg: "blue.100" }}
            rounded="0px"
            onClick={() => handleMenuClick(item.href)}
          >
            <Icon as={item.icon} />
            <Box fontWeight={"medium"}>{item.name}</Box>
          </HStack>
        ))}
      </Box>
    </Box>
  );
};

export default NavBar;
