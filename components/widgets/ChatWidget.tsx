"use client";

import { useState, useRef, useEffect } from "react";
import { CHAT_CONFIG } from "@/lib/constants";
import type { ChatMessage } from "@/lib/types";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "greeting",
      text: CHAT_CONFIG.greeting,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [quickRepliesVisible, setQuickRepliesVisible] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (text: string, sender: "bot" | "user") => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${sender}-${Date.now()}`,
        text,
        sender,
        timestamp: new Date(),
      },
    ]);
  };

  const handleQuickReply = (replyId: string) => {
    const reply = CHAT_CONFIG.quickReplies.find((r) => r.id === replyId);
    if (!reply) return;

    addMessage(reply.label, "user");
    setQuickRepliesVisible(false);

    setTimeout(() => {
      addMessage(reply.response, "bot");
    }, 600);
  };

  const handleSend = () => {
    const text = inputText.trim();
    if (!text) return;

    addMessage(text, "user");
    setInputText("");
    setQuickRepliesVisible(false);

    setTimeout(() => {
      addMessage(CHAT_CONFIG.fallbackResponse, "bot");
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-avatar">🌿</div>
            <div className="chat-header-info">
              <h4>ZenFlow Assistant</h4>
              <p>Online · Odpovie okamžite</p>
            </div>
            <button
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Zavrieť chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {quickRepliesVisible && (
            <div className="chat-quick-replies">
              {CHAT_CONFIG.quickReplies.map((reply) => (
                <button
                  key={reply.id}
                  className="quick-reply"
                  onClick={() => handleQuickReply(reply.id)}
                >
                  {reply.label}
                </button>
              ))}
            </div>
          )}

          <div className="chat-input-row">
            <input
              className="chat-input"
              type="text"
              placeholder="Napíšte správu..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="chat-send"
              onClick={handleSend}
              aria-label="Odoslať"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <button
        className="chat-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Zavrieť chat" : "Otvoriť chat"}
      >
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}
