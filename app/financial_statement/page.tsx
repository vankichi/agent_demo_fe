import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileSpreadsheet, Upload } from 'lucide-react';

export default function FinancialStatement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          戻る
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileSpreadsheet className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">決算書作成ページ</h1>
        </div>

        {/* Demo Scenario */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-slate-900 mb-4">
                デモシナリオ
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                AI Agentを活用した決算書自動作成システム
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Upload className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      エクセルファイルから決算書を自動作成
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-base">
                      アップロードしたエクセルファイルの財務データを AI Agent が自動的に解析し、
                      標準的な決算書フォーマットに変換します。複雑な計算や勘定科目の分類も
                      自動で処理し、正確で読みやすい決算書を短時間で生成できます。
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">ファイルアップロード</h4>
                  <p className="text-sm text-slate-600">エクセルファイルを選択してアップロード</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">AI解析・処理</h4>
                  <p className="text-sm text-slate-600">データを自動解析して決算書を作成</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">完成・ダウンロード</h4>
                  <p className="text-sm text-slate-600">標準フォーマットの決算書を取得</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
