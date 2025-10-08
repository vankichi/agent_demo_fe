'use client';

import { useState } from 'react';
import { Search, Send, Bot, Sparkles, Zap, Brain, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const demoApps = [
  {
    id: 1,
    title: 'Smart Assistant',
    description: 'AI-powered conversational agent for customer support and inquiries',
    icon: Bot,
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    id: 2,
    title: 'Data Analyzer',
    description: 'Intelligent data processing and insights generation with ML',
    icon: Brain,
    color: 'from-yellow-300 to-amber-500',
  },
  {
    id: 3,
    title: 'Content Generator',
    description: 'Advanced text generation for marketing and documentation',
    icon: Sparkles,
    color: 'from-amber-400 to-yellow-500',
  },
  {
    id: 4,
    title: 'Process Automation',
    description: 'Streamline workflows with intelligent automation agents',
    icon: Zap,
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 5,
    title: 'Insight Engine',
    description: 'Extract meaningful patterns from complex datasets',
    icon: MessageSquare,
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    id: 6,
    title: 'Voice Interface',
    description: 'Natural language understanding and voice command processing',
    icon: Bot,
    color: 'from-amber-400 to-yellow-600',
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m an AI assistant. How can I help you today?',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages([...messages, { role: 'user', content: inputMessage }]);
    setInputMessage('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'This is a demo response. In a real implementation, this would connect to an AI model.',
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center glow-ey">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <h1 className="text-xl font-bold text-gradient-ey">AI Agent Portfolio</h1>
          </div>

          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search demos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-700 focus:border-yellow-400"
              />
            </div>
          </div>

          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform glow-ey">
            <span className="text-black font-bold text-sm">EY</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16 text-center py-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-ey leading-tight">
            AI Agent Demonstrations
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our collection of intelligent agents showcasing the future of automation
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Demo Apps</h3>
              <p className="text-gray-400">Interactive AI agent demonstrations</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {demoApps
                .filter((app) =>
                  app.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((app) => {
                  const Icon = app.icon;
                  return (
                    <Card
                      key={app.id}
                      className="bg-gray-900/50 border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10 cursor-pointer group"
                    >
                      <CardHeader>
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-ey`}
                        >
                          <Icon className="w-8 h-8 text-black" />
                        </div>
                        <CardTitle className="text-white group-hover:text-yellow-400 transition-colors">
                          {app.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {app.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20 hover:bg-yellow-400/20">
                          Try Demo
                        </Badge>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-gray-900/50 border-gray-800 sticky top-24 h-[600px] flex flex-col">
              <CardHeader className="border-b border-gray-800">
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-yellow-400" />
                  Interactive Demo
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Chat with our AI assistant
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black'
                          : 'bg-gray-800 text-white border border-gray-700'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </CardContent>

              <div className="p-4 border-t border-gray-800">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="bg-gray-800 border-gray-700 focus:border-yellow-400 text-white"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <section className="py-16 border-t border-gray-800">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient-ey mb-4">
              Powered by Advanced AI
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Built with cutting-edge technology for enterprise-grade performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/30 border-gray-800 text-center hover:border-yellow-400/30 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <CardTitle className="text-white">Lightning Fast</CardTitle>
                <CardDescription className="text-gray-400">
                  Optimized for speed and efficiency
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800 text-center hover:border-yellow-400/30 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-yellow-400" />
                </div>
                <CardTitle className="text-white">Intelligent</CardTitle>
                <CardDescription className="text-gray-400">
                  Advanced machine learning models
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800 text-center hover:border-yellow-400/30 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </div>
                <CardTitle className="text-white">Innovative</CardTitle>
                <CardDescription className="text-gray-400">
                  Next-generation AI capabilities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>&copy; 2025 EY AI Agent Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
