export const sampleChats = [
  {
    avatar: [
      "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
    ],
    name: "John Doe",
    _id: "1",
    groupChat: true,
    members: ["1", "2"],
  },

  {
    avatar: [
      "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
    ],
    name: "John Boi",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar:
      "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",

    name: "John Doe",
    _id: "1",
  },

  {
    avatar:
      "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",

    name: "John Boi",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar:
        "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",

      name: "John Doe",
    },
    _id: "1",
  },

  {
    sender: {
      avatar:
        "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",

      name: "John Doe",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "Kunal ka message h",
    _id: "hgfdhgfhgfdhfetyryt",
    sender: {
      _id: "user._id",
      name: "Manish",
    },
    chat: "chatId",
    createdAt: "2024-06-08T08:24:51.577Z",
  },

  {
    attachments: [
      {
        public_id: "gfhgjhgdgd",
        url: "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
      },
    ],
    content: "",
    _id: "hgfdhgfhggfhgfdhfetyryt",
    sender: {
      _id: "jhgdsgdjghjh",
      name: "Manish 2",
    },
    chat: "chatId 2",
    createdAt: "2024-06-08T08:24:51.577Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John Boi",
      avatar:
        "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",

      _id: "1",
      username: "john_boi",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Doe",
      avatar:
        "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",

      _id: "2",
      username: "john_doe",
      friends: 25,
      groups: 4,
    },
  ],

  chats: [
    {
      name: "Friends Group",
      avatar: [
        "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
      ],
      _id: "1",
      groupChat: false,
      members: [
        {
          _id: "1",
          avatar:
            "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
        },
        {
          _id: "1",
          avatar:
            "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar:
          "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
      },
    },
    {
      name: "Adda Group",
      avatar: [
        "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
      ],
      _id: "2",
      groupChat: false,
      members: [
        {
          _id: "1",
          avatar:
            "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
        },
        {
          _id: "1",
          avatar:
            "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
        },
      ],
      totalMembers: 2,
      totalMessages: 25,
      creator: {
        name: "John Boi",
        avatar:
          "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "Kunal ka message h",
      _id: "hgfdhgfhgfdhfetyryt",
      sender: {
        avatar:
          "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
        name: "Manish",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-06-08T08:24:51.577Z",
    },

    {
      attachments: [
        {
          public_id: "gfhgjhgdgd",
          url: "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
        },
      ],
      content: "",
      _id: "hgfdhgfhggfhgfdhfetyryt",
      sender: {
        avatar:
          "https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png",
        name: "Manish 2",
      },
      chat: "chatId 2",
      groupChat: true,
      createdAt: "2024-06-08T08:24:51.577Z",
    },
  ],
};
