import { useState } from "react";

export default function Form() {
  const [messages, setMessages] = useState(["ab"]);

  let text;

  if (messages.length === 0) {
    text = "You are all caught up";
  } else if (messages.length === 1) {
    text = "You have 1 unread message";
  } else {
    text = `You have ${messages.length} unread messages`;
  }

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
