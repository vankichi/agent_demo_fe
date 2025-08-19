import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Package, CheckCircle } from 'lucide-react';

const orderHistory = [
  {
    id: 'ORD-2025-001234',
    date: '2025-01-15',
    status: '配送中',
    statusColor: 'bg-blue-500',
    total: 4110,
    items: [
      { name: 'エナジードリンク クラシック', price: 250, quantity: 2 },
      { name: 'プロテインバー チョコレート', price: 380, quantity: 1 },
      { name: 'スポーツウェア Tシャツ', price: 2980, quantity: 1 }
    ]
  },
  {
    id: 'ORD-2025-001189',
    date: '2025-01-10',
    status: '配送完了',
    statusColor: 'bg-green-500',
    total: 1320,
    items: [
      { name: 'ビタミンドリンク', price: 320, quantity: 2 },
      { name: 'フィットネス キャップ', price: 1580, quantity: 1 }
    ]
  },
  {
    id: 'ORD-2025-001156',
    date: '2025-01-05',
    status: '配送完了',
    statusColor: 'bg-green-500',
    total: 880,
    items: [
      { name: 'エナジードリンク シュガーフリー', price: 280, quantity: 2 },
      { name: 'プロテインバー チョコレート', price: 380, quantity: 1 }
    ]
  }
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Link href="/commerce" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          お買い物エージェントに戻る
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4">購入履歴</h1>
            <p className="text-xl text-slate-600">過去のご注文履歴を確認できます</p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-blue-800 mb-2">総注文数</h3>
                <p className="text-3xl font-bold text-blue-600">{orderHistory.length}件</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-green-800 mb-2">総購入金額</h3>
                <p className="text-3xl font-bold text-green-600">
                  ¥{orderHistory.reduce((sum, order) => sum + order.total, 0).toLocaleString()}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-purple-800 mb-2">今月の注文</h3>
                <p className="text-3xl font-bold text-purple-600">
                  {orderHistory.filter(order => 
                    new Date(order.date).getMonth() === new Date().getMonth()
                  ).length}件
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Order History */}
          <div className="space-y-6">
            {orderHistory.map((order) => (
              <Card key={order.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                        注文番号: {order.id}
                      </CardTitle>
                      <p className="text-slate-600">注文日: {new Date(order.date).toLocaleDateString('ja-JP')}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={`${order.statusColor} text-white mb-2`}>
                        {order.status === '配送中' && <Package className="w-4 h-4 mr-1" />}
                        {order.status === '配送完了' && <CheckCircle className="w-4 h-4 mr-1" />}
                        {order.status}
                      </Badge>
                      <p className="text-2xl font-bold text-indigo-600">
                        ¥{order.total.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{item.name} × {item.quantity}</span>
                        <span>¥{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      詳細を見る
                    </Button>
                    <Button variant="outline" size="sm">
                      再注文
                    </Button>
                    {order.status === '配送中' && (
                      <Button variant="outline" size="sm">
                        配送状況を確認
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8">
              さらに読み込む
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}