// 'use client';

import Link from 'next/link';
// import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Minus, Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'エナジードリンク クラシック',
    price: 250,
    image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.8,
    category: 'ドリンク',
    description: '伝統的なエナジードリンクの味わい。カフェイン、タウリン、ビタミンB群を配合し、エネルギッシュな毎日をサポートします。',
    features: ['カフェイン 80mg', 'タウリン 1000mg', 'ビタミンB群配合', '250ml缶'],
    inStock: true,
    reviews: 124
  },
  {
    id: 2,
    name: 'プロテインバー チョコレート',
    price: 380,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.6,
    category: 'スナック',
    description: '高タンパク質のエネルギーバー。運動後の栄養補給に最適で、美味しいチョコレート味で満足感も抜群です。',
    features: ['プロテイン 20g', 'カロリー 200kcal', 'チョコレート味', '個包装'],
    inStock: true,
    reviews: 89
  },
  {
    id: 3,
    name: 'スポーツウェア Tシャツ',
    price: 2980,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.7,
    category: 'アパレル',
    description: '通気性抜群のスポーツTシャツ。吸汗速乾素材を使用し、激しい運動でも快適さを保ちます。',
    features: ['吸汗速乾素材', 'UVカット機能', 'サイズ：S-XL', '洗濯機対応'],
    inStock: true,
    reviews: 156
  },
  {
    id: 4,
    name: 'ビタミンドリンク',
    price: 320,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.5,
    category: 'ドリンク',
    description: '必須ビタミン配合のヘルシードリンク。毎日の健康維持をサポートする栄養機能食品です。',
    features: ['ビタミンC 1000mg', 'ビタミンB群', 'ノンカフェイン', '500ml'],
    inStock: true,
    reviews: 67
  },
  {
    id: 5,
    name: 'フィットネス キャップ',
    price: 1580,
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.4,
    category: 'アクセサリー',
    description: 'スタイリッシュなスポーツキャップ。軽量で通気性に優れ、長時間の着用でも快適です。',
    features: ['軽量設計', '通気性メッシュ', 'サイズ調整可能', 'UVカット'],
    inStock: false,
    reviews: 43
  },
  {
    id: 6,
    name: 'エナジードリンク シュガーフリー',
    price: 280,
    image: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4.9,
    category: 'ドリンク',
    description: 'カロリーゼロのエナジードリンク。糖質を気にする方にも安心してお楽しみいただけます。',
    features: ['カロリーゼロ', 'シュガーフリー', 'カフェイン 80mg', '250ml缶'],
    inStock: true,
    reviews: 201
  }
];

export default async function ProductDetailPage({
    params
}: {
    params: Promise<{ id: string}>
}) {
  // const [quantity, setQuantity] = useState(1);
  const { id } = await params
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-slate-100 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">商品が見つかりません</h1>
          <Link href="/commerce">
            <Button>商品一覧に戻る</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-4">
          <Link href="/commerce" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            商品一覧に戻る
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                <Badge className="absolute top-6 left-6 bg-red-600 text-white text-lg px-4 py-2">
                  {product.category}
                </Badge>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge className="bg-red-600 text-white text-xl px-6 py-3">
                      在庫切れ
                    </Badge>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-lg font-semibold">{product.rating}</span>
                    <span className="ml-2 text-slate-600">({product.reviews}件のレビュー)</span>
                  </div>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">商品特徴</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Price and Purchase */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-red-600">
                      ¥{product.price.toLocaleString()}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        // onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={!product.inStock}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-12 text-center font-semibold text-lg">1</span>
                      <Button
                        size="sm"
                        variant="outline"
                        // onClick={() => setQuantity(quantity + 1)}
                        disabled={!product.inStock}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-lg py-3"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {product.inStock ? 'カートに追加' : '在庫切れ'}
                    </Button>

                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        <Heart className="w-4 h-4 mr-2" />
                        お気に入り
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share2 className="w-4 h-4 mr-2" />
                        シェア
                      </Button>
                    </div>
                  </div>

                  {product.inStock && (
                    <p className="text-green-600 text-sm mt-4 text-center">
                      ✓ 在庫あり - 通常1-2日で発送
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">関連商品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products
                .filter(p => p.id !== productId && p.category === product.category)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/commerce/item/${relatedProduct.id}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0">
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-xl font-bold text-red-600">
                          ¥{relatedProduct.price.toLocaleString()}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
    return [{ id: "1"}, { id: "2"}]
}
