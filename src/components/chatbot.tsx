import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  onCategoryClick?: (category: string) => void;
}

export default function EnhancedChatbot({ onCategoryClick }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your Nimi Store shopping assistant. I can help you find authentic African & Caribbean groceries, answer questions about our products, store information, delivery options, and much more. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickResponses = [
    "Show me fresh produce",
    "What ethnic foods do you have?",
    "Frozen proteins available?",
    "Store location & hours",
    "Delivery information",
    "Popular African spices"
  ];

  // Enhanced product information
  const productInfo = {
    'fresh produce': {
      items: ['Fresh Plantain', 'Yam Tuber', 'Scotch Bonnet Peppers', 'Ginger Root', 'Green Beans'],
      description: "We stock the freshest African and Caribbean produce including plantains, yams, scotch bonnet peppers, fresh ginger, and seasonal vegetables. All sourced from trusted suppliers to ensure authenticity and quality."
    },
    'ethnic foods': {
      items: ['Jollof Rice Seasoning', 'Curry Goat Seasoning', 'Ogbono Seeds', 'Locust Beans (Iru)', 'Tamarind Paste', 'African Pepper Soup Spice'],
      description: "Our ethnic foods section features authentic seasonings and ingredients from West Africa and the Caribbean. Perfect for making traditional dishes like jollof rice, curry goat, egusi soup, and pepper soup."
    },
    'frozen proteins': {
      items: ['Frozen Goat Meat', 'Cassava Leaves', 'Chicken Wings', 'Prawns', 'Smoked Fish'],
      description: "Premium frozen proteins including goat meat, chicken wings, prawns, and traditional smoked fish. All properly frozen and packaged to maintain freshness and authentic flavors."
    },
    'meat fish': {
      items: ['Fresh Tilapia', 'Dried Stockfish', 'Beef Short Ribs', 'Free Range Chicken', 'Lamb Shoulder'],
      description: "Fresh and preserved meats and fish essential for African and Caribbean cooking. From fresh tilapia to traditional dried stockfish and premium cuts of beef and lamb."
    },
    'beauty': {
      items: ['African Black Soap', 'Shea Butter', 'Coconut Oil', 'Cocoa Butter Lotion', 'Argan Oil Hair Serum'],
      description: "Natural African beauty products including pure shea butter, black soap, coconut oil, and argan oil. Traditional remedies for healthy skin and hair care."
    },
    'drinks': {
      items: ['Malta Guinness', 'Milo Chocolate Drink', 'African Soft Drinks', 'Fruit Wines'],
      description: "Popular African and Caribbean beverages including Malta Guinness, Milo, and various soft drinks. Perfect for authentic dining experiences."
    },
    'spices': {
      items: ['Palm Oil', 'Egusi Seeds', 'Maggi Cubes', 'Fufu Flour', 'Plantain Flour'],
      description: "Essential African cooking ingredients including red palm oil, ground egusi seeds, seasoning cubes, and various flours for traditional preparations."
    }
  };

  const getEnhancedResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Product categories with detailed information
    if (message.includes('fresh') || message.includes('produce') || message.includes('vegetable') || message.includes('plantain') || message.includes('yam')) {
      const info = productInfo['fresh produce'];
      return `🥬 **Fresh Produce Available:**\n\n${info.description}\n\n**Popular items:** ${info.items.join(', ')}\n\nWould you like me to show you our fresh produce section?`;
    }
    
    if (message.includes('ethnic') || message.includes('spice') || message.includes('seasoning') || message.includes('jollof') || message.includes('curry')) {
      const info = productInfo['ethnic foods'];
      return `🌶️ **Ethnic Foods & Seasonings:**\n\n${info.description}\n\n**Featured items:** ${info.items.join(', ')}\n\nPerfect for authentic African and Caribbean cooking! Need help finding something specific?`;
    }
    
    if (message.includes('frozen') || message.includes('protein') || message.includes('goat') || message.includes('meat')) {
      const info = productInfo['frozen proteins'];
      return `🥩 **Frozen Proteins:**\n\n${info.description}\n\n**Available items:** ${info.items.join(', ')}\n\nAll items are properly frozen and ready for traditional cooking. Want to see our frozen section?`;
    }
    
    if (message.includes('fish') || message.includes('tilapia') || message.includes('stockfish') || message.includes('seafood')) {
      const info = productInfo['meat fish'];
      return `🐟 **Fresh & Preserved Fish/Meat:**\n\n${info.description}\n\n**Selection includes:** ${info.items.join(', ')}\n\nFresh deliveries weekly! Looking for something specific?`;
    }
    
    if (message.includes('beauty') || message.includes('shea') || message.includes('soap') || message.includes('skin') || message.includes('hair')) {
      const info = productInfo['beauty'];
      return `✨ **African Beauty & Personal Care:**\n\n${info.description}\n\n**Products include:** ${info.items.join(', ')}\n\nAll natural, traditional African beauty solutions. Need recommendations?`;
    }
    
    if (message.includes('drink') || message.includes('malta') || message.includes('milo') || message.includes('beverage')) {
      const info = productInfo['drinks'];
      return `🥤 **African & Caribbean Beverages:**\n\n${info.description}\n\n**Popular drinks:** ${info.items.join(', ')}\n\nRefreshing authentic flavors from home! Want to explore our drinks section?`;
    }

    if (message.includes('palm oil') || message.includes('egusi') || message.includes('maggi') || message.includes('flour')) {
      const info = productInfo['spices'];
      return `🧂 **Essential Cooking Ingredients:**\n\n${info.description}\n\n**Must-haves:** ${info.items.join(', ')}\n\nEverything you need for authentic African cuisine!`;
    }
    
    // Store information - enhanced
    if (message.includes('location') || message.includes('address') || message.includes('where') || message.includes('find')) {
      return `📍 **Store Location:**\n\nNimi Store\nUnit 6F S10 Morelands Trading Estate\nGL1 5SA, Gloucester\n\n**Contact:**\n📞 07563007938\n✉️ Nimistores2025@gmail.com\n\nEasy parking available and conveniently located! Need directions?`;
    }
    
    if (message.includes('hours') || message.includes('open') || message.includes('close') || message.includes('time')) {
      return `🕐 **Store Hours:**\n\nMonday - Sunday: 8:00 AM - 10:00 PM\n\n✅ Open 7 days a week\n✅ Extended weekend hours\n✅ Holiday hours may vary\n\nWe're here when you need us! Planning a visit today?`;
    }
    
    if (message.includes('delivery') || message.includes('shipping') || message.includes('order') || message.includes('online')) {
      return `🚚 **Delivery Service:**\n\n✅ Same-day delivery available\n✅ FREE delivery on orders over £35\n✅ Delivery within 5-mile radius\n✅ Curbside pickup option\n✅ Order tracking available\n\n**Payment:** We accept Visa, Mastercard, and cash\n\nReady to place an order?`;
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('discount') || message.includes('sale') || message.includes('offer')) {
      return `💰 **Pricing & Offers:**\n\n✅ Competitive prices on authentic products\n✅ Daily deals and weekly specials\n✅ Bulk buying discounts available\n✅ Loyalty program for regular customers\n✅ Student discounts available\n\nCheck our promotional section for current deals! Looking for something specific on sale?`;
    }

    // Specific product queries
    if (message.includes('plantain')) {
      return `🍌 **Fresh Plantain (per bunch) - £3.99**\n\nFresh green plantains perfect for:\n• Boiled plantain\n• Fried plantain (dodo)\n• Plantain porridge\n• Baked plantain dishes\n\nWeight: ~1kg per bunch\nAlways fresh and ready for cooking!`;
    }

    if (message.includes('palm oil')) {
      return `🔴 **Palm Oil (Red Oil) 1L - £8.99**\n\nAuthentic African red palm oil essential for:\n• Jollof rice\n• Palm nut soup\n• Traditional stews\n• Authentic flavoring\n\n100% pure and traditional quality!`;
    }

    if (message.includes('fufu') || message.includes('cassava')) {
      return `🍚 **Fufu & Cassava Products:**\n\n• Fufu Flour (Cassava) 1kg - £6.99\n• Cassava Leaves 500g - £7.99\n• Plantain Flour 1kg - £8.99\n\nPerfect for traditional West African meals! Need cooking instructions?`;
    }

    // Categories and navigation
    if (message.includes('categories') || message.includes('sections') || message.includes('browse')) {
      return `🛒 **Shop by Category:**\n\n🥬 Fresh Farm Produce\n🌾 Dry Goods & Spices\n🥩 Frozen Proteins\n🐟 Meat, Fish & Poultry\n🥤 African Soft Drinks\n🍷 Fruit Wine\n🍿 Snacks\n✨ Health & Beauty\n🧽 Household Items\n\nWhich category interests you most?`;
    }
    
    // General greetings and help
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good morning') || message.includes('good afternoon')) {
      return `👋 Hello and welcome to Nimi Store! \n\nI'm here to help you find authentic African and Caribbean groceries. Whether you're looking for fresh produce, traditional spices, or specialty items, I can guide you to exactly what you need.\n\nWhat can I help you find today?`;
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return `🙏 You're very welcome! I'm always here to help you find the best African and Caribbean products. \n\nFeel free to ask me about:\n• Product availability\n• Cooking suggestions\n• Store information\n• Delivery options\n\nAnything else I can assist you with?`;
    }
    
    if (message.includes('help') || message.includes('assist') || message.includes('support')) {
      return `🤝 **I'm here to help with:**\n\n✅ Finding specific products\n✅ Product recommendations\n✅ Cooking ingredient suggestions\n✅ Store hours and location\n✅ Delivery information\n✅ Pricing and offers\n✅ Category browsing\n\nWhat would you like to know more about?`;
    }

    // Cooking and recipe help
    if (message.includes('recipe') || message.includes('cook') || message.includes('ingredients') || message.includes('how to make')) {
      return `👨‍🍳 **Cooking Help:**\n\nI can suggest ingredients for popular dishes like:\n• Jollof Rice\n• Egusi Soup\n• Pepper Soup\n• Fufu and Soup\n• Curry Goat\n• Fried Plantain\n\nWhat dish are you planning to make? I'll help you find all the ingredients!`;
    }

    // About the store
    if (message.includes('about') || message.includes('story') || message.includes('why choose')) {
      return `🏪 **About Nimi Store:**\n\nThe UK's premier destination for authentic African & Caribbean groceries! We specialize in:\n\n✅ Fresh, quality products\n✅ Authentic traditional ingredients\n✅ Competitive pricing\n✅ Excellent customer service\n✅ Wide product selection\n✅ Convenient location\n\nBringing the taste of home to your kitchen! 🏠`;
    }
    
    // Default enhanced response
    return `I'd love to help you find what you're looking for! 😊\n\n**Popular categories:**\n🥬 Fresh Farm Produce\n🌶️ Ethnic Foods & Spices\n🥩 Frozen Proteins\n🥤 African Drinks\n\n**Quick actions:**\n• Browse our full catalog\n• Check store hours\n• Learn about delivery\n• Get product recommendations\n\nWhat interests you most?`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getEnhancedResponse(currentInput),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickResponse = (response: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: response,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getEnhancedResponse(response),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button - Fixed z-index issue */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 rounded-full shadow-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window - Fixed z-index and positioning */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9998] w-96 h-[600px] bg-white rounded-lg shadow-2xl border flex flex-col overflow-hidden max-w-[calc(100vw-3rem)] max-h-[calc(100vh-8rem)]">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 flex items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-semibold">Nimi Store Assistant</h3>
              <p className="text-xs opacity-90">Online • Ready to help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-end space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                    message.isUser 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {message.isUser ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-amber-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line break-words">{message.text}</div>
                    <p className={`text-xs mt-2 ${
                      message.isUser ? 'text-amber-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2 max-w-[85%]">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0">
                    <Bot size={12} />
                  </div>
                  <div className="bg-white p-3 rounded-lg rounded-bl-none shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          {messages.length <= 2 && (
            <div className="p-3 bg-white border-t flex-shrink-0">
              <p className="text-xs text-gray-600 mb-2">Quick options:</p>
              <div className="flex flex-wrap gap-2">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-amber-100 rounded-full transition-colors border hover:border-amber-300"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t flex-shrink-0">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about our products..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-base"
                style={{ fontSize: '16px' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="p-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}