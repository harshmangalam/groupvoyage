"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Minimize2, Move } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface Position {
  x: number;
  y: number;
}

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  // Initialize position at bottom-right with safe margins
  const [position, setPosition] = useState<Position>({ x: 24, y: 24 });
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const [wasDragged, setWasDragged] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Play click sound - using Web Audio API for better sound
  const playClickSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Louder, more noticeable notification sound
      oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1);
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.5, audioContext.currentTime); // Louder volume
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
      // Fallback to HTML audio if Web Audio API fails
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 0.6; // Louder volume
        audioRef.current.play().catch(console.warn);
      }
    }
  };

  // Initialize greeting message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetingMessage: Message = {
        id: "greeting",
        content: "👋 Hello! I'm GroupVoyageAI, your personal travel assistant!\n\n🌟 I can help you with:\n• Finding trips to specific destinations\n• Getting detailed itinerary information\n• Comparing prices across organizers\n• Discovering budget-friendly options\n• Connecting with travel organizers\n\n📝 Want to know about a specific trip's itinerary? Just ask me about any destination or trip, and I'll share the complete details including day-by-day plans, inclusions, and how to book!\n\nHow can I help you today?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([greetingMessage]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle window resize - keep chatbot within viewport
  useEffect(() => {
    const handleResize = () => {
      const width = isOpen ? 384 : 64;
      const height = isOpen && !isMinimized ? 500 : 64;
      const maxX = window.innerWidth - width - 24;
      const maxY = window.innerHeight - height - 24;
      
      setPosition(prev => ({
        x: Math.max(24, Math.min(prev.x, maxX)),
        y: Math.max(24, Math.min(prev.y, maxY)),
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, isMinimized]);

  // Ensure chatbot is visible when opened/expanded
  useEffect(() => {
    if (isOpen) {
      const width = 384; // w-96
      const height = isMinimized ? 64 : 500;
      const maxX = window.innerWidth - width - 24;
      const maxY = window.innerHeight - height - 24;
      
      setPosition(prev => ({
        x: Math.max(24, Math.min(prev.x, maxX)),
        y: Math.max(24, Math.min(prev.y, maxY)),
      }));
    }
  }, [isOpen, isMinimized]);

  // Dragging functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.drag-handle')) {
      e.preventDefault(); // Prevent text selection
      setIsDragging(true);
      setWasDragged(false); // Reset drag flag
      setDragStart({
        x: window.innerWidth - e.clientX - position.x,
        y: window.innerHeight - e.clientY - position.y,
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setWasDragged(true); // Mark that we're dragging
        
        // Calculate new position from right and bottom
        const newX = window.innerWidth - e.clientX - dragStart.x;
        const newY = window.innerHeight - e.clientY - dragStart.y;
        
        // Get dimensions based on current state
        const width = isOpen ? 384 : 64; // 384px = w-96, 64px = button width
        const height = isOpen && !isMinimized ? 500 : 64; // 500px = chat height
        
        // Constrain to viewport with padding (min 24px from edges)
        const maxX = window.innerWidth - width - 24;
        const maxY = window.innerHeight - height - 24;
        
        setPosition({
          x: Math.max(24, Math.min(newX, maxX)),
          y: Math.max(24, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, isOpen, isMinimized]);

  const handleToggleChat = () => {
    // Only toggle if we didn't just drag
    if (!wasDragged) {
      playClickSound();
      if (!isOpen) {
        setIsOpen(true);
        setIsMinimized(false);
      } else {
        setIsOpen(false);
        setIsMinimized(false);
      }
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const simulateBotResponse = async (userMessage: string): Promise<string> => {
    // Call our API route which fetches database data and uses Gemini AI
    try {
      console.log("🚀 Calling chatbot API with message:", userMessage);
      
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("✅ Chatbot API Response:", data);
        if (data.message) {
          console.log("💬 Using Gemini AI response with database data");
          console.log("📊 Data used:", data.dataUsed);
          return data.message;
        } else {
          console.warn("⚠️ No message in API response");
        }
      } else {
        const errorText = await response.text();
        console.error("❌ Chatbot API HTTP error:", response.status, errorText);
      }
    } catch (error) {
      console.error("❌ Chatbot API error:", error);
    }

    // Fallback to keyword-based responses if API fails
    console.log("📝 Using fallback keyword-based response");
    const responses = {
      about: [
        "GroupVoyage is India's leading trip comparison platform! 🌟 We aggregate trips from 156+ travel organizers including Bhatakna Tours (156 trips), EnLive (50 trips), and Bangalore Mountaineering Club (43 trips). Compare & book your perfect adventure! 🗺️",
        "Welcome to GroupVoyage! 🎉 We help you discover trips to 10 amazing locations like Gokarna, Hampi, Coorg, Dandeli & more from trusted organizers. Think 'trip aggregator' for adventure travel! ✈️",
      ],
      price: [
        "Budget traveler? 💰 Day trips start from ₹500-₹1,500 (Lepakshi, Gudibande), weekend treks ₹2,000-₹3,000 (AMK Trek), and 2N/3D packages ₹3,000-₹6,000 (Gokarna, Dandeli)! All under ₹10K! 🎯",
        "Great deals available! 🌊 1-Day trips (₹500-₹1,500), 1N/2D treks (₹2K-₹3K), 2N/3D beach/adventure trips (₹3K-₹6K). Perfect for every budget! ✨",
      ],
      under10k: [
        "Awesome choice! 🎒 Under ₹10K options: Day trips to Lepakshi/Gudibande (₹500-₹1,500), AMK Trek 1N/2D (₹2K-₹3K), Gokarna/Dandeli 2N/3D (₹3K-₹6K), or Udaipur long weekend (₹4K-₹8K)! 💫",
        "Budget-friendly adventures! ⛰️ Try 1-day temple tours (₹500-₹1,500), weekend treks (₹2,000-₹3,000), or 3-day Dandeli-Gokarna combo (₹3,000-₹6,000). All amazing under ₹10,000! 🏖️",
      ],
      location: [
        "We cover 10 fantastic locations! 📍 Beaches: Gokarna 🏖️ | Hills: Ooty, Coorg, Chikmagalur, Coonoor ⛰️ | Heritage: Hampi 🏛️ | Adventure: Dandeli 🚣 | Treks: Kalsubai, Harishchandragad 🥾 | Cities: Pune 🌆",
        "From beaches to mountains! 🗺️ Visit Gokarna (beach paradise), Hampi (UNESCO site), Coorg (coffee estates), Dandeli (adventure), Ooty/Coonoor (hill stations), or trek Kalsubai/Harishchandragad! 🏞️",
      ],
      groups: [
        "Top organizers on our platform: 🏢 Bhatakna Tours (156 trips!), EnLive Trip Experiences (50 trips), Bangalore Mountaineering Club (43), Trekfit Adventures (40), Namma Trip (36), Weekendyaari (29), and 4 more! 🌟",
      ],
      destinations: [
        "Popular packages: 🎯 Gokarna-Honnavar-Murudeshwar, Dandeli-Gokarna-Jog Falls-Yana Caves, Udaipur-Kumbhalgarh-Chittorgarh, Talakadu-Somanathpura Temple, Gudibande-Isha-Lepakshi! Pick your adventure! ✨",
      ],
      booking: [
        "Easy booking! 📋 Browse trips, compare prices from 156+ organizers, then book directly through their WhatsApp/email. We help you find the best option, they handle the booking! 📱",
      ],
      weekend: [
        "Weekend getaway time! 🎒 Try Gokarna (2N/3D), Dandeli adventure (2N/3D), Udaipur heritage (2N/3D), or AMK Trek (1N/2D). Perfect short escapes from ₹2,000-₹8,000! 🌟",
      ],
      instagram: [
        "Follow these Instagram communities: 📱 Hyderabad Adventure Club, Treks and Trails India, The HTC, Go Adventure, Weekend Yaari, BCF Backpackers, Trekhievers, The Trippers & more! 🎉",
      ],
      help: [
        "I can help with: destinations (10 locations), trip prices (₹500-₹10K+), organizers (156+ groups), packages, or booking! 🤝 What would you like to know? 💬",
      ],
      thanks: [
        "You're welcome! Happy travels! 😊✈️ Follow us for new trips!",
        "My pleasure! Adventure awaits! 🌟🎒",
      ],
      default: [
        "GroupVoyage connects you with 156+ travel organizers! 🌟 We have 10 destinations, day trips from ₹500, weekend packages ₹2K-₹8K. Ask me about locations, prices, or specific trips! 💡",
        "Need help? 💬 Try: 'What trips under ₹10,000?' or 'Tell me about Gokarna' or 'Show me day trips' or 'Best trekking options?' 🎯",
      ],
    };

    const lowerMessage = userMessage.toLowerCase();
    
    // Check for website/about questions
    if (lowerMessage.includes("what is") || lowerMessage.includes("about") || lowerMessage.includes("website") || lowerMessage.includes("platform") || lowerMessage.includes("groupvoyage") || lowerMessage.includes("this site")) {
      return responses.about[Math.floor(Math.random() * responses.about.length)];
    }
    // Check for budget/under 10k questions
    if (lowerMessage.includes("10000") || lowerMessage.includes("10,000") || lowerMessage.includes("10k") || lowerMessage.includes("under 10") || lowerMessage.includes("cheapest") || lowerMessage.includes("budget trip")) {
      return responses.under10k[Math.floor(Math.random() * responses.under10k.length)];
    }
    // Check for specific locations
    if (lowerMessage.includes("gokarna") || lowerMessage.includes("hampi") || lowerMessage.includes("coorg") || lowerMessage.includes("dandeli") || lowerMessage.includes("ooty") || lowerMessage.includes("chikmagalur") || lowerMessage.includes("coonoor") || lowerMessage.includes("kalsubai") || lowerMessage.includes("harishchandragad") || lowerMessage.includes("pune")) {
      return responses.location[Math.floor(Math.random() * responses.location.length)];
    }
    // Check for price/cost questions
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("deal") || lowerMessage.includes("cheap") || lowerMessage.includes("budget") || lowerMessage.includes("affordable") || lowerMessage.includes("how much")) {
      return responses.price[Math.floor(Math.random() * responses.price.length)];
    }
    // Check for location/destination general
    if (lowerMessage.includes("where") || lowerMessage.includes("location") || lowerMessage.includes("destination") || lowerMessage.includes("place") || lowerMessage.includes("which place")) {
      return responses.location[Math.floor(Math.random() * responses.location.length)];
    }
    // Check for groups/organizers
    if (lowerMessage.includes("group") || lowerMessage.includes("organizer") || lowerMessage.includes("company") || lowerMessage.includes("bhatakna") || lowerMessage.includes("enlive") || lowerMessage.includes("namma trip")) {
      return responses.groups[0];
    }
    // Check for destinations/packages
    if (lowerMessage.includes("destination") || lowerMessage.includes("package") || lowerMessage.includes("tour") || lowerMessage.includes("trip package")) {
      return responses.destinations[0];
    }
    // Check for booking
    if (lowerMessage.includes("book") || lowerMessage.includes("reserve") || lowerMessage.includes("how to book") || lowerMessage.includes("contact")) {
      return responses.booking[0];
    }
    // Check for weekend trips
    if (lowerMessage.includes("weekend") || lowerMessage.includes("short trip") || lowerMessage.includes("quick") || lowerMessage.includes("2 day") || lowerMessage.includes("3 day")) {
      return responses.weekend[0];
    }
    // Check for Instagram/social media
    if (lowerMessage.includes("instagram") || lowerMessage.includes("insta") || lowerMessage.includes("social") || lowerMessage.includes("follow")) {
      return responses.instagram[0];
    }
    // Check for help
    if (lowerMessage.includes("help") || lowerMessage.includes("assist") || lowerMessage.includes("support") || lowerMessage.includes("guide")) {
      return responses.help[0];
    }
    // Check for thanks
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks") || lowerMessage.includes("appreciate")) {
      return responses.thanks[Math.floor(Math.random() * responses.thanks.length)];
    }
    
    return responses.default[Math.floor(Math.random() * responses.default.length)];
  };

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || inputValue;
    if (!messageToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setShowQuickActions(false);

    // Get AI response from Gemini API
    const botResponseText = await simulateBotResponse(messageToSend);
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: botResponseText,
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const quickActions = [
    { text: "❓ What is GroupVoyage?", message: "What is this website about?" },
    { text: "💰 Budget Trips under ₹10K", message: "Show me cheapest trips under 10000" },
    { text: "📍 Popular Destinations", message: "What locations do you cover?" },
    { text: "🏢 Travel Organizers", message: "Tell me about travel groups" },
  ];

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendClick = () => {
    handleSendMessage();
  };

  const handleQuickAction = (message: string) => {
    handleSendMessage(message);
  };

  return (
    <>
      {/* Click Sound Audio */}
      <audio ref={audioRef} preload="auto">
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMbBDCKztuy2Sc=" type="audio/wav" />
      </audio>

      {/* Floating Chat Button */}
      {!isOpen && (
        <div 
          ref={buttonRef}
          className="fixed z-50"
          style={{
            right: `${position.x}px`,
            bottom: `${position.y}px`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onMouseDown={handleMouseDown}
        >
          {/* Pulse ring animation */}
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-primary/30 animate-ping"></div>
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-primary/20 animate-pulse"></div>
          
          <Button
            onClick={handleToggleChat}
            className="relative w-16 h-16 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110 group drag-handle"
            size="icon"
          >
            <Bot className="w-8 h-8 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card 
          ref={chatWindowRef}
          className={`fixed shadow-2xl z-50 transition-all duration-300 ${
            isMinimized ? "h-16 w-80" : "h-[500px] w-96"
          }`}
          style={{
            right: `${position.x}px`,
            bottom: `${position.y}px`,
          }}
          onMouseDown={handleMouseDown}
        >
          {/* Header */}
          <CardHeader className="pb-3 bg-primary text-primary-foreground rounded-t-lg drag-handle cursor-move">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Move className="w-5 h-5 opacity-70" />
                <Bot className="w-6 h-6" />
                GroupVoyageAI
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </CardTitle>
              <div className="flex gap-1">
                <Button
                  onClick={handleMinimize}
                  size="icon"
                  variant="ghost"
                  className="w-8 h-8 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  onClick={handleClose}
                  size="icon"
                  variant="ghost"
                  className="w-8 h-8 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Chat Content */}
          {!isMinimized && (
            <CardContent className="p-0 flex flex-col" style={{ height: "calc(500px - 64px)" }}>
              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <span className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">Analyzing database with Gemini AI...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Quick Actions */}
                  {showQuickActions && messages.length === 1 && (
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground mb-3">Quick actions to get started:</p>
                      <div className="grid grid-cols-1 gap-2">
                        {quickActions.map((action, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="justify-start text-left h-auto p-3 hover:bg-primary/10"
                            onClick={() => handleQuickAction(action.message)}
                          >
                            {action.text}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about trips, pricing, or destinations..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendClick}
                    size="icon"
                    disabled={!inputValue.trim() || isTyping}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  );
}