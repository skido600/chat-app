import { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import Input_search from "../components/ui/Input_search";
type User = {
  id: number;
  name: string;
  messages: string[];
  image: string;
};
import RequestC from "../components/ui/RequestC";
import Empty from "../components/ui/Empty";

const usersList: User[] = [
  {
    id: 1,
    name: "Bakrin olasupo",
    messages: [""],
    image: "/icons/image_ts.avif",
  },
  {
    id: 2,
    name: "Leo wave",
    messages: [
      "Dear Doctor, I am 20 years old and experiencing much back pain since 5 months back. Especially when I sit or lie down. Please can I book an appointment",
    ],
    image: "/icons/prof2.png",
  },
  {
    id: 3,
    name: "saka",
    messages: ["Yo!", "Let's play a game."],
    image: "/icons/Rectangle 4537.png",
  },
  {
    id: 4,
    name: "Jenny Wilson",
    messages: ["Yo!", "Let's play a game."],
    image: "/icons/Rectangle 4537.png",
  },
  {
    id: 5,
    name: "mbappe",
    messages: ["Yo!", "Let's play a game."],
    image: "/icons/Rectangle 4537.png",
  },
  {
    id: 6,
    name: "sky",
    messages: ["Yo!", "Let's play a game."],
    image: "/icons/Rectangle 4537.png",
  },
  {
    id: 7,
    name: "xyz",
    messages: ["Yo!", "Let's play a game."],
    image: "/icons/Rectangle 4537.png",
  },
  {
    id: 8,
    name: "xyz",
    messages: ["Yo!", "Let's play a game."],
    image: "/icons/Rectangle 4537.png",
  },
  {
    id: 9,
    name: "xyz",
    messages: ["Yo!", "Let's play a game."],
    image: "/icons/Rectangle 4537.png",
  },
  {
    id: 10,
    name: "xyz",
    messages: ["Yo!", "Let's play a game."],
    image: "/icons/Rectangle 4537.png",
  },
  {
    id: 67,
    name: "xyz",
    messages: ["Yo!", "Let's play a game."],
    image: "/icons/Rectangle 4537.png",
  },
  {
    id: 74,
    name: "xyz",
    messages: ["Yo!", "Let's play a game."],
    image: "/icons/Rectangle 4537.png",
  },
  {
    id: 7,
    name: "xyz",
    messages: ["Yo!", "Let's play a game."],
    image: "/icons/Rectangle 4537.png",
  },
];

const Dms = () => {
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [newMessage, setNewMessage] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleUserClick = (user: User) => {
    setActiveUser(user);
  };

  const goBack = () => {
    setActiveUser(null);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeUser) return;

    const updatedUsers = usersList.map((user) =>
      user.id === activeUser.id
        ? { ...user, messages: [...user.messages, newMessage.trim()] }
        : user
    );

    const updatedActive = updatedUsers.find((u) => u.id === activeUser.id)!;
    setActiveUser(updatedActive);
    setNewMessage("");
  };

  return (
    <main>
      <section className="grid md:grid-cols-3 bg-[#1E2126] min-h-screen  grid-cols-1 md:mt-0 ">
        {/* Users List */}
        {!isMobile || !activeUser ? (
          <div className="bg-[#1E2126]  h-[90vh] overflow-y-auto pt-10 md:pt-2   text-white ">
            <article>
              <RequestC />
              <Input_search />
            </article>
            {usersList.map((user) => (
              <div
                key={user.id}
                onClick={() => handleUserClick(user)}
                className={`p-2 cursor-pointer flex  items-center gap-x-4 rounded ${
                  activeUser?.id === user.id
                    ? "bg-[#1f2937]"
                    : "hover:bg-[#1a1f24]"
                }`}>
                <img
                  src={user.image}
                  alt={user.name}
                  className="rounded-full w-14 h-14 object-cover"
                />
                <div>
                  <p className="text-[#E2E2E2]">{user.name}</p>
                  <p className="mt-2 text-[#A4A2A2] text-sm">
                    {user.messages[0]
                      ? user.messages[user.messages.length - 1].slice(0, 30) +
                        (user.messages[user.messages.length - 1].length > 30
                          ? "..."
                          : "")
                      : "No message yet"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {/* Chat Window */}
        {(activeUser || !isMobile) && (
          <article className="bg-[#0f1114] pt-12 min-h-screen col-span-2 text-white flex flex-col">
            {activeUser && (
              <div className="flex items-center gap-4 px-4 my-8 md:my-0 pb-2 border-b border-[#2a2a2a]">
                {isMobile && (
                  <button onClick={goBack} className="text-white">
                    <IoMdArrowRoundBack size={24} />
                  </button>
                )}
                <div className="relative">
                  <img
                    src={activeUser.image}
                    alt={activeUser.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0f1114] rounded-full"></span>
                </div>
                <div>
                  <p className="text-sm font-medium">{activeUser.name}</p>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {activeUser?.messages.filter(Boolean).length ? (
                activeUser.messages.map(
                  (msg, idx) =>
                    msg && (
                      <div
                        key={idx}
                        className="bg-[#1a1f24] p-2 rounded max-w-xs">
                        {msg}
                      </div>
                    )
                )
              ) : (
                <Empty />
              )}
            </div>

            {/* Input Field */}
            {activeUser && (
              <div className="p-4 border-t border-[#2a2a2a] bg-[#0f1114] flex items-center gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 p-2 rounded bg-[#1a1f24] text-white outline-none"
                  placeholder="Type your message..."
                />
                <button
                  onClick={handleSendMessage}
                  className="text-white hover:text-blue-400">
                  <FiSend size={20} />
                </button>
              </div>
            )}
          </article>
        )}
      </section>
    </main>
  );
};

export default Dms;
