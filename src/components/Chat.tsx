"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { FC } from "react";

interface ChatProps {}

const Chat: FC<ChatProps> = ({}) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <Card className="w-[450px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex gap-3 items-center text-slate-600 text-sm"
          >
            {message.role === "user" && (
              <Avatar>
                <AvatarFallback>GA</AvatarFallback>
                <AvatarImage src="https://github.com/gabriel300p.png" />
              </Avatar>
            )}
            {message.role === "assistant" && (
              <Avatar>
                <AvatarFallback>RS</AvatarFallback>
                <AvatarImage src="https://github.com/rocketseat.png" />
              </Avatar>
            )}
            <p>{message.content}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <form
          className="flex items-center gap-2 w-full"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default Chat;
