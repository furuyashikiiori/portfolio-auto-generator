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
    colorScheme: "bg-white text-gray-900 border border-gray-200",
    features: ["読みやすいレイアウト", "モダンなデザイン", "モバイル対応"]
  },
  {
    id: "yuttari",
    name: "ゆったり",
    description: "余白を活かしたゆったりとしたデザイン",
    colorScheme: "bg-stone-50 text-stone-700",
    features: ["余白を活かしたデザイン", "視認性の高いレイアウト", "リラックス感"]
  },
  {
    id: "neon",
    name: "ネオン",
    description: "鮮やかなネオンカラーで印象的なデザイン",
    colorScheme: "bg-black text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    features: ["鮮やかなアクセント", "モダンな印象", "個性的なデザイン"]
  },
  {
    id: "cool",
    name: "クール",
    description: "洗練されたクールなビジネスデザイン",
    colorScheme: "bg-slate-900 text-slate-100 border border-slate-700",
    features: ["プロフェッショナル", "洗練された印象", "ビジネス向け"]
  },
  {
    id: "koukyuu",
    name: "高級",
    description: "上品で高級感のあるデザイン",
    colorScheme: "bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white shadow-xl",
    features: ["高級感", "上品な印象", "エレガント"]
  },
  {
    id: "clear",
    name: "透明感",
    description: "透明感のある爽やかなデザイン",
    colorScheme: "bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-800 backdrop-blur-sm",
    features: ["透明感", "爽やかな印象", "軽やかなデザイン"]
  },
  {
    id: "techblue",
    name: "テックブルー風",
    description: "テクノロジー感のあるブルーベースのデザイン",
    colorScheme: "bg-blue-900 text-blue-100 border border-blue-700",
    features: ["テクノロジー感", "信頼性の高い印象", "IT系に最適"]
  },
  {
    id: "animal",
    name: "Animal",
    description: "動物モチーフの可愛らしいデザイン",
    colorScheme: "bg-gradient-to-br from-green-100 to-emerald-100 text-green-800",
    features: ["可愛らしい印象", "親しみやすい", "ユニークなデザイン"]
  }
];

interface Skill {
  name: string;
  level: number;
}

interface Project {
  title: string;
  description: string;
  tech: string;
  url: string;
}

interface FormData {
  name: string;
  university: string;
  year: string;
  graduation_year: string;
  self_intro: string;
  title: string;
  achievements: string;
  certifications: string;
  contact_email: string;
  contact_sns: string;
  contact_github: string;
  template: string;
}

interface TemplatePreviewProps {
  selectedTemplate: string;
  onTemplateSelect: (templateId: string) => void;
  formData: FormData;
  skills: Skill[];
  projects: Project[];
  iconImage: File | null;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({
  selectedTemplate,
  onTemplateSelect,
  formData,
  skills,
  projects,
  iconImage
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
    const getTemplateSpecificStyles = (templateId: string) => {
      switch (templateId) {
        case "simple":
          return {
            container: "p-6 rounded-lg shadow-sm",
            header: "border-b border-gray-200 pb-4",
            avatar: "w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center",
            name: "text-2xl font-light text-gray-900",
            title: "text-gray-600 font-normal",
            skillBadge: "px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium"
          };
        case "yuttari":
          return {
            container: "p-8 rounded-xl shadow-sm",
            header: "border-b border-stone-200 pb-6 mb-6",
            avatar: "w-20 h-20 rounded-full bg-stone-200 flex items-center justify-center",
            name: "text-2xl font-light text-stone-800 mb-2",
            title: "text-stone-600 font-light text-lg",
            skillBadge: "px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm"
          };
        case "neon":
          return {
            container: "p-6 rounded-lg shadow-[0_0_30px_rgba(34,211,238,0.2)]",
            header: "border-b border-cyan-400/30 pb-4",
            avatar: "w-16 h-16 rounded-full bg-cyan-400/20 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]",
            name: "text-2xl font-bold text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]",
            title: "text-cyan-400 font-medium",
            skillBadge: "px-3 py-1 bg-cyan-400/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
          };
        case "cool":
          return {
            container: "p-6 rounded-lg shadow-lg",
            header: "border-b border-slate-700 pb-4",
            avatar: "w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center",
            name: "text-2xl font-semibold text-slate-100",
            title: "text-slate-300 font-medium",
            skillBadge: "px-3 py-1 bg-slate-700 text-slate-200 rounded text-sm border border-slate-600"
          };
        case "koukyuu":
          return {
            container: "p-8 rounded-xl shadow-2xl",
            header: "border-b border-white/20 pb-6",
            avatar: "w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm",
            name: "text-3xl font-serif text-white mb-2",
            title: "text-white/90 font-light text-lg",
            skillBadge: "px-4 py-2 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm border border-white/30"
          };
        case "clear":
          return {
            container: "p-6 rounded-xl shadow-lg backdrop-blur-md",
            header: "border-b border-blue-200/50 pb-4",
            avatar: "w-16 h-16 rounded-full bg-white/50 flex items-center justify-center backdrop-blur-sm",
            name: "text-2xl font-medium text-blue-900",
            title: "text-blue-700 font-light",
            skillBadge: "px-3 py-1 bg-white/50 text-blue-800 rounded-full text-sm backdrop-blur-sm"
          };
        case "techblue":
          return {
            container: "p-6 rounded-lg shadow-lg",
            header: "border-b border-blue-700 pb-4",
            avatar: "w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center",
            name: "text-2xl font-mono text-blue-100 font-bold",
            title: "text-blue-200 font-mono",
            skillBadge: "px-3 py-1 bg-blue-800 text-blue-100 rounded text-sm font-mono border border-blue-600"
          };
        case "animal":
          return {
            container: "p-6 rounded-2xl shadow-lg",
            header: "border-b border-green-200 pb-4",
            avatar: "w-16 h-16 rounded-full bg-green-200 flex items-center justify-center",
            name: "text-2xl font-bold text-green-800",
            title: "text-green-700 font-medium",
            skillBadge: "px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium"
          };
        default:
          return {
            container: "p-6 rounded-lg shadow-lg",
            header: "border-b border-current/20 pb-4",
            avatar: "w-16 h-16 rounded-full bg-current/20 flex items-center justify-center",
            name: "text-2xl font-bold",
            title: "opacity-80",
            skillBadge: "px-3 py-1 bg-current/20 rounded-full text-sm"
          };
      }
    };

    const styles = getTemplateSpecificStyles(template.id);
    
    // User input data or fallback to default
    const displayName = formData.name || "お名前";
    const displayTitle = formData.title || "肩書き";
    const displayUniversity = formData.university || "大学名";
    const displayYear = formData.year || "学年";
    const displaySelfIntro = formData.self_intro || "自己紹介をここに入力してください。";
    const displaySkills = skills.filter(skill => skill.name.trim()).length > 0 
      ? skills.filter(skill => skill.name.trim()) 
      : [{ name: "スキル1", level: 3 }, { name: "スキル2", level: 4 }];
    const displayProjects = projects.filter(project => project.title.trim()).length > 0 
      ? projects.filter(project => project.title.trim()) 
      : [{ title: "プロジェクト名", description: "プロジェクトの説明", tech: "React,TypeScript", url: "" }];
    
    const iconUrl = iconImage ? URL.createObjectURL(iconImage) : null;
    
    return (
      <div className={`${styles.container} ${template.colorScheme} min-h-96`}>
        <div className="space-y-4">
          {/* Header */}
          <div className={styles.header}>
            <div className="flex items-center space-x-4">
              <div className={styles.avatar}>
                {iconUrl ? (
                  <img 
                    src={iconUrl} 
                    alt="アイコン" 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-xl">
                    {template.id === "animal" ? "🐱" : "👤"}
                  </span>
                )}
              </div>
              <div>
                <h2 className={styles.name}>{displayName}</h2>
                {displayTitle && <p className={styles.title}>{displayTitle}</p>}
                {displayUniversity && (
                  <p className={`text-sm ${template.id === "neon" ? "text-cyan-400/80" : "opacity-70"}`}>
                    {displayUniversity} {displayYear}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* About */}
          <div className={template.id === "yuttari" ? "space-y-3" : "space-y-2"}>
            <h3 className="text-lg font-semibold mb-2">自己紹介</h3>
            <p className={`text-sm ${template.id === "yuttari" ? "leading-relaxed" : "opacity-80"}`}>
              {displaySelfIntro}
            </p>
          </div>

          {/* Skills */}
          <div className={template.id === "yuttari" ? "space-y-3" : "space-y-2"}>
            <h3 className="text-lg font-semibold mb-2">スキル</h3>
            <div className={`flex flex-wrap ${template.id === "yuttari" ? "gap-3" : "gap-2"}`}>
              {displaySkills.map((skill, index) => (
                <span 
                  key={index}
                  className={styles.skillBadge}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className={template.id === "yuttari" ? "space-y-3" : "space-y-2"}>
            <h3 className="text-lg font-semibold mb-2">制作物</h3>
            <div className="space-y-2">
              {displayProjects.map((project, index) => (
                <div key={index} className={`bg-current/10 p-3 rounded ${template.id === "koukyuu" ? "backdrop-blur-sm" : ""}`}>
                  <h4 className="font-medium">{project.title}</h4>
                  <p className="text-sm opacity-80">{project.description}</p>
                  {project.tech && (
                    <p className="text-xs opacity-60 mt-1">
                      {project.tech.split(',').map(tech => tech.trim()).join(', ')}
                    </p>
                  )}
                </div>
              ))}
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
              <div className={`w-full h-24 rounded ${template.colorScheme} flex items-center justify-center relative overflow-hidden`}>
                {template.id === "neon" && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 animate-pulse"></div>
                    <span className="text-xs text-cyan-300 font-mono relative z-10">NEON</span>
                  </>
                )}
                {template.id === "koukyuu" && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-purple-400/20"></div>
                    <span className="text-xs text-white font-serif relative z-10">LUXURY</span>
                  </>
                )}
                {template.id === "clear" && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 backdrop-blur-sm"></div>
                    <span className="text-xs text-blue-600 relative z-10">CLEAR</span>
                  </>
                )}
                {template.id === "techblue" && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20"></div>
                    <span className="text-xs text-blue-200 font-mono relative z-10">TECH</span>
                  </>
                )}
                {template.id === "animal" && (
                  <>
                    <span className="text-xl">🐱</span>
                    <span className="text-xs text-green-700 ml-2">Animal</span>
                  </>
                )}
                {template.id === "yuttari" && (
                  <span className="text-xs text-stone-600 font-light">ゆったり</span>
                )}
                {template.id === "simple" && (
                  <span className="text-xs text-gray-600">Simple</span>
                )}
                {template.id === "cool" && (
                  <span className="text-xs text-slate-300 font-semibold">COOL</span>
                )}
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