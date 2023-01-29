import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChatState } from "../Context/ChatProvider";
import { SideDrawer } from "../components/miscellaneous/SideDrawer";
import { Box, Flex } from "@chakra-ui/react";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";

export const Chatpage = (props) => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        <Box w="30%" h="100%">
          {user && <MyChats fetchAgain={fetchAgain} />}
        </Box>
        <Box w={{ base: "100%", md: "68%" }}>
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </Flex>
    </div>
  );
};
