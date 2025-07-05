"use client";

import { useState, useEffect } from "react";

interface TemplateData {
  id: string;
  name: string;
  description: string;
  colorScheme: string;
  previewImage?: string;
  features: string[];
}

const templates: TemplateData[] = [
  {
    id: "simple",
    name: "シンプル",
    description: "清潔感のあるシンプルなデザイン",
    colorScheme: "bg-white text-gray-900",
    features: ["読みやすいレイアウト", "モダンなデザイン", "モバイル対応"]
  },
  {
    id: "yuttari",
    name: "ゆったり",
    description: "余白を活かしたゆったりとしたデザイン",
    colorScheme: "bg-gray-50 text-gray-800",
    features: ["余白を活かしたデザイン", "視認性の高いレイアウト", "リラックス感"]
  },
  {
    id: "neon",
    name: "ネオン",
    description: "鮮やかなネオンカラーで印象的なデザイン",
    colorScheme: "bg-black text-cyan-400",
    features: ["鮮やかなアクセント", "モダンな印象", "個性的なデザイン"]
  },
  {
    id: "cool",
    name: "クール",
    description: "洗練されたクールなビジネスデザイン",
    colorScheme: "bg-slate-900 text-white",
    features: ["プロフェッショナル", "洗練された印象", "ビジネス向け"]
  },
  {
    id: "koukyuu",
    name: "高級",
    description: "上品で高級感のあるデザイン",
    colorScheme: "bg-gradient-to-br from-purple-900 to-blue-900 text-white",
    features: ["高級感", "上品な印象", "エレガント"]
  },
  {
    id: "clear",
    name: "透明感",
    description: "透明感のある爽やかなデザイン",
    colorScheme: "bg-blue-50 text-blue-900",
    features: ["透明感", "爽やかな印象", "軽やかなデザイン"]
  },
  {
    id: "techblue",
    name: "テックブルー風",
    description: "テクノロジー感のあるブルーベースのデザイン",
    colorScheme: "bg-blue-900 text-white",
    features: ["テクノロジー感", "信頼性の高い印象", "IT系に最適"]
  },
  {
    id: "animal",
    name: "Animal",
    description: "動物モチーフの可愛らしいデザイン",
    colorScheme: "bg-green-100 text-green-900",
    features: ["可愛らしい印象", "親しみやすい", "ユニークなデザイン"]
  }
];

interface TemplatePreviewProps {
  selectedTemplate: string;
  onTemplateSelect: (templateId: string) => void;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  selectedTemplate,
  onTemplateSelect
}) => {
  const [previewData, setPreviewData] = useState<TemplateData | null>(null);

  useEffect(() => {
    if (selectedTemplate) {
      const template = templates.find(t => t.id === selectedTemplate);
      setPreviewData(template || null);
    } else {
      setPreviewData(null);
    }
  }, [selectedTemplate]);

  const renderMockPortfolio = (template: TemplateData) => {
    return (
      <div className={`p-6 rounded-lg shadow-lg ${template.colorScheme} min-h-96`}>
        <div className="space-y-4">
          {/* Header */}
          <div className="border-b border-current/20 pb-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-current/20 flex items-center justify-center">
                <span className="text-xl">👤</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">田中 太郎</h2>
                <p className="opacity-80">Webエンジニア</p>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-2">自己紹介</h3>
            <p className="text-sm opacity-80">
              プログラミングが好きな大学生です。WebアプリケーションやAIに興味があります。
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-2">スキル</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Python"].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-current/20 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-2">制作物</h3>
            <div className="bg-current/10 p-3 rounded">
              <h4 className="font-medium">ポートフォリオサイト</h4>
              <p className="text-sm opacity-80">React, TypeScriptで作成</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Template Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => onTemplateSelect(template.id)}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
              selectedTemplate === template.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="space-y-2">
              <div className={`w-full h-24 rounded ${template.colorScheme} flex items-center justify-center`}>
                <span className="text-xs opacity-70">プレビュー</span>
              </div>
              <h3 className="font-semibold text-gray-900">{template.name}</h3>
              <p className="text-sm text-gray-600">{template.description}</p>
              <div className="flex flex-wrap gap-1">
                {template.features.slice(0, 2).map((feature, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-gray-100 text-xs rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Section */}
      {previewData && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">
            プレビュー: {previewData.name}
          </h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            {renderMockPortfolio(previewData)}
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">特徴</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              {previewData.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplatePreview;