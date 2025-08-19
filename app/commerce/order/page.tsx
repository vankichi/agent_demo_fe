'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, CreditCard, Truck } from 'lucide-react';

export default function OrderPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [deliveryMethod, setDeliveryMethod] = useState('standard');

  const orderItems = [
    { name: 'エナジードリンク クラシック', price: 250, quantity: 2 },
    { name: 'プロテインバー チョコレート', price: 380, quantity: 1 },
    { name: 'スポーツウェア Tシャツ', price: 2980, quantity: 1 }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = deliveryMethod === 'express' ? 800 : 500;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Link href="/commerce/cart" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          カートに戻る
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">決済</h1>
            <p className="text-slate-600">注文情報を確認してお支払いを完了してください</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Form */}
            <div className="space-y-6">
              {/* Delivery Information */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="w-5 h-5 mr-2" />
                    配送情報
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前</Label>
                    <Input id="name" defaultValue="田中 太郎" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">配送先住所</Label>
                    <Input id="address" defaultValue="東京都渋谷区神南1-1-1" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号</Label>
                    <Input id="phone" defaultValue="090-1234-5678" className="bg-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <Label>配送方法</Label>
                    <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard">通常便（3-5日）- ¥500</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express">速達便（1-2日）- ¥800</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    お支払い方法
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit" id="credit" />
                      <Label htmlFor="credit">クレジットカード</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank">銀行振込</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod">代金引換</Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === 'credit' && (
                    <div className="space-y-4 pt-4 border-t">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">カード番号</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="bg-white" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">有効期限</Label>
                          <Input id="expiry" placeholder="MM/YY" className="bg-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">セキュリティコード</Label>
                          <Input id="cvv" placeholder="123" className="bg-white" />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl sticky top-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">注文確認</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderItems.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>¥{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                  <hr className="border-slate-200" />
                  <div className="flex justify-between">
                    <span className="text-slate-600">小計</span>
                    <span>¥{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">配送料</span>
                    <span>¥{shipping.toLocaleString()}</span>
                  </div>
                  <hr className="border-slate-200" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>合計</span>
                    <span className="text-orange-600">¥{total.toLocaleString()}</span>
                  </div>
                  <Link href="/commerce/thankyou" className="block">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg py-3">
                      注文を確定する
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}