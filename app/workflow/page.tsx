import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Workflow, Zap } from 'lucide-react';

export default function WorkflowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          戻る
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Workflow className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">ワークフローページ</h1>
        </div>

        {/* Demo Scenario */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-slate-900 mb-4">
                デモシナリオ
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                AI Agentによるインテリジェントワークフロー自動化
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      申請したい内容に応じて自動で申請します
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-base">
                      AI Agent があなたの申請内容を理解し、適切な承認ルートを判断して
                      自動的に申請処理を実行します。従来の手動申請プロセスを大幅に効率化し、
                      承認待ち時間を短縮できます。複雑な組織構造にも対応し、
                      ルールベースでの自動振り分けが可能です。
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">申請内容入力</h4>
                  <p className="text-sm text-slate-600">自然言語で申請したい内容を入力</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">AI判断・ルーティング</h4>
                  <p className="text-sm text-slate-600">最適な承認ルートを自動選択</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">自動申請実行</h4>
                  <p className="text-sm text-slate-600">承認者への自動通知と進捗管理</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}