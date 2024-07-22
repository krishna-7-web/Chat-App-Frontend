/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";
import { bgGradiant } from "../../constants/color";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"}>
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;

        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        const isOnline = members?.some((member) =>
          onlineUsers.includes(member)
        );

        return (
          <ChatItem
            index={index}
            key={_id}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
