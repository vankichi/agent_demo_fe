'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Search, Sparkles, Star, ShoppingCart } from 'lucide-react';

const searchResults = [
  {
    id: 1,
    name: 'エナジードリンク クラシック',
    price: 250,
    image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    category: 'ドリンク',
    relevance: 95
  },
  {
    id: 2,
    name: 'エナジードリンク シュガーフリー',
    price: 280,
    image: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    category: 'ドリンク',
    relevance: 92
  },
  {
    id: 3,
    name: 'プロテインバー チョコレート',
    price: 380,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    category: 'スナック',
    relevance: 88
  }
];

const aiSuggestions = [
  '運動後のエネルギー補給におすすめ',
  '朝の目覚めに最適なドリンク',
  'プロテイン系商品をチェック',
  '低カロリーオプションを探す'
];

export default function SearchItemPage() {
  const [searchQuery, setSearchQuery] = useState('エナジー');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate AI search delay
    setTimeout(() => setIsSearching(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Link href="/commerce" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          お買い物エージェントに戻る
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4">商品検索</h1>
            <p className="text-xl text-slate-600">AI による高度な商品検索</p>
          </div>

          {/* Search Bar */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8">
            <CardContent className="p-6">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Input
                    placeholder="自然言語で商品を検索してください（例：朝に飲むエネルギードリンク）"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="text-lg h-12 bg-white"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white h-12 px-8"
                >
                  {isSearching ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      AI検索
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* AI Suggestions */}
            <div className="lg:col-span-1">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                    AI提案
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {aiSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left justify-start h-auto p-3 hover:bg-purple-50"
                      onClick={() => setSearchQuery(suggestion)}
                    >
                      <span className="text-sm">{suggestion}</span>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Search Results */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  検索結果 - "{searchQuery}"
                </h2>
                <p className="text-slate-600">{searchResults.length}件の商品が見つかりました</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {searchResults.map((product) => (
                  <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 flex space-x-2">
                          <Badge className="bg-purple-600 text-white">
                            {product.category}
                          </Badge>
                          <Badge className="bg-green-600 text-white">
                            {product.relevance}% マッチ
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-slate-600">{product.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {product.name}
                      </CardTitle>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-purple-600">
                          ¥{product.price.toLocaleString()}
                        </span>
                        <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          カート
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* AI Insights */}
              <Card className="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                    AI による検索インサイト
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-slate-700">
                      <strong>検索意図の分析:</strong> エネルギー補給に関連する商品を検索されています
                    </p>
                    <p className="text-slate-700">
                      <strong>おすすめの時間帯:</strong> 朝食後または運動前の摂取が効果的です
                    </p>
                    <p className="text-slate-700">
                      <strong>関連商品:</strong> プロテインバーやビタミンドリンクもご検討ください
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}