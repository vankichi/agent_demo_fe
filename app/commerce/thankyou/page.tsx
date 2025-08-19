import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Clock, Mail } from 'lucide-react';

export default function ThankYouPage() {
  const orderNumber = 'ORD-2025-001234';
  const orderDate = new Date().toLocaleDateString('ja-JP');
  const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('ja-JP');

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          {/* Header */}
          <h1 className="text-5xl font-bold text-slate-900 mb-4">購入完了</h1>
          <p className="text-xl text-slate-600 mb-12">
            ご注文ありがとうございました！
          </p>

          {/* Order Details */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-900">注文詳細</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <Package className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-900 mb-1">注文番号</h3>
                  <p className="text-teal-600 font-mono">{orderNumber}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-900 mb-1">注文日</h3>
                  <p className="text-blue-600">{orderDate}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-green-800">確認メール送信済み</h3>
                </div>
                <p className="text-green-700 text-center">
                  注文確認メールを tanaka@example.com に送信いたしました。
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">配送予定日</h3>
                <p className="text-2xl font-bold text-teal-600">{estimatedDelivery}</p>
                <p className="text-slate-600 text-sm mt-1">配送状況は追跡番号でご確認いただけます</p>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900">次のステップ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span>1. 商品の準備・梱包</span>
                  <span className="text-green-600 font-semibold">完了</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span>2. 配送業者への引き渡し</span>
                  <span className="text-blue-600 font-semibold">処理中</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span>3. お届け</span>
                  <span className="text-slate-400">待機中</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link href="/commerce/history" className="block">
              <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-lg py-3">
                購入履歴を見る
              </Button>
            </Link>
            <Link href="/commerce/item" className="block">
              <Button variant="outline" className="w-full">
                他の商品を見る
              </Button>
            </Link>
            <Link href="/commerce" className="block">
              <Button variant="ghost" className="w-full">
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}