'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Search, CreditCard, CheckCircle, Clock, Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'エナジードリンク クラシック',
    price: 250,
    image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    category: 'ドリンク',
    description: '伝統的なエナジードリンクの味わい'
  },
  {
    id: 2,
    name: 'プロテインバー チョコレート',
    price: 380,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    category: 'スナック',
    description: '高タンパク質のエネルギーバー'
  },
  {
    id: 3,
    name: 'スポーツウェア Tシャツ',
    price: 2980,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    category: 'アパレル',
    description: '通気性抜群のスポーツTシャツ'
  },
  {
    id: 4,
    name: 'ビタミンドリンク',
    price: 320,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    category: 'ドリンク',
    description: '必須ビタミン配合のヘルシードリンク'
  },
  {
    id: 5,
    name: 'フィットネス キャップ',
    price: 1580,
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.4,
    category: 'アクセサリー',
    description: 'スタイリッシュなスポーツキャップ'
  },
  {
    id: 6,
    name: 'エナジードリンク シュガーフリー',
    price: 280,
    image: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    category: 'ドリンク',
    description: 'カロリーゼロのエナジードリンク'
  }
];

const menuItems = [
  {
    title: '商品検索',
    path: '/commerce/search_item',
    icon: Search,
    color: 'text-purple-600'
  },
  {
    title: '決済',
    path: '/commerce/order',
    icon: CreditCard,
    color: 'text-orange-600'
  },
  {
    title: '購入完了',
    path: '/commerce/thankyou',
    icon: CheckCircle,
    color: 'text-teal-600'
  },
  {
    title: '購入履歴',
    path: '/commerce/history',
    icon: Clock,
    color: 'text-indigo-600'
  }
];

export default function CommercePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/" className="text-white/80 hover:text-white mb-2 inline-block transition-colors">
                ← 戻る
              </Link>
              <h1 className="text-4xl font-bold">お買い物エージェント</h1>
              <p className="text-red-100">AI powered shopping experience</p>
            </div>
            <Link href="/commerce/user">
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <User className="w-4 h-4 mr-2" />
                ユーザー情報
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar Menu */}
          <div className="w-[30%]">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900">メニュー</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link key={index} href={item.path} className="block">
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start h-12 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        <Icon className={`w-5 h-5 mr-3 ${item.color}`} />
                        {item.title}
                      </Button>
                    </Link>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Products */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">商品一覧</h2>
              <p className="text-slate-600">エネルギッシュなライフスタイルをサポート</p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/commerce/item/${product.id}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 cursor-pointer">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                          {product.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-slate-600">{product.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                        {product.name}
                      </CardTitle>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-red-600">
                          ¥{product.price.toLocaleString()}
                        </span>
                        <Button 
                          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            // カート追加処理をここに実装
                          }}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          カート
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Category Navigation */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">カテゴリー</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['すべて', 'ドリンク', 'スナック', 'アパレル', 'アクセサリー'].map((category) => (
                  <Button
                    key={category}
                    variant={category === 'すべて' ? 'default' : 'outline'}
                    className={category === 'すべて' 
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
                      : 'hover:bg-red-50 hover:border-red-200'
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}