import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileSpreadsheet, Workflow, ShoppingCart, PenTool } from 'lucide-react';

const useCases = [
  {
    title: '決算書作成',
    description: 'エクセルファイルから自動で決算書を生成',
    path: '/financial_statement',
    icon: FileSpreadsheet,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    title: 'ワークフロー自動化',
    description: '申請内容に応じた自動化処理',
    path: '/workflow',
    icon: Workflow,
    gradient: 'from-green-500 to-green-600'
  },
  {
    title: '買い物エージェント',
    description: 'AIによる最適な商品提案とお買い物サポート',
    path: '/commerce',
    icon: ShoppingCart,
    gradient: 'from-red-500 to-red-600'
  },
  {
    title: 'コンテンツ作成',
    description: 'AI支援によるコンテンツ自動生成',
    path: '/create_content',
    icon: PenTool,
    gradient: 'from-purple-500 to-purple-600'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Agent Demo
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            AI Agentを利用したデモです
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Link key={index} href={useCase.path} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      詳しく見る
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}