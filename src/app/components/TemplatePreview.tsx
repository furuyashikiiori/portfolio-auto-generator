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
            container: "p-6 rounded-lg shadow-sm bg-white border border-gray-200",
            header: "border-b border-gray-200 pb-4 text-center",
            avatar: "w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4",
            name: "text-2xl font-light text-gray-900 mb-2",
            title: "text-gray-600 font-normal text-lg mb-2",
            university: "text-gray-500 text-sm",
            skillBadge: "px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium"
          };
        case "yuttari":
          return {
            container: "p-8 rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm border border-amber-200",
            header: "text-center mb-8",
            avatar: "w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6",
            name: "text-3xl font-serif text-amber-900 mb-4",
            title: "text-amber-700 font-light text-xl mb-4",
            university: "text-amber-600 text-lg",
            skillBadge: "px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium border border-amber-300"
          };
        case "neon":
          return {
            container: "p-6 rounded-lg shadow-2xl bg-gray-900 border-2 border-cyan-400",
            header: "text-center mb-8",
            avatar: "w-16 h-16 rounded-full bg-cyan-400/20 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-400/50",
            name: "text-2xl font-bold text-cyan-400 mb-2",
            title: "text-pink-400 font-medium text-lg mb-2",
            university: "text-cyan-300 text-sm",
            skillBadge: "px-3 py-1 bg-gray-700 text-cyan-300 rounded text-sm border border-cyan-500"
          };
        case "cool":
          return {
            container: "p-8 rounded-xl shadow-2xl bg-gray-800/50 backdrop-blur-lg border border-gray-700",
            header: "text-center mb-12 relative",
            avatar: "w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-6",
            name: "text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2",
            title: "text-gray-300 font-medium text-xl mb-2",
            university: "text-gray-400 text-lg",
            skillBadge: "px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium"
          };
        case "techblue":
          return {
            container: "p-8 rounded-lg shadow-xl bg-slate-800 border border-slate-700",
            header: "text-center mb-8 bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg",
            avatar: "w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center mx-auto mb-4",
            name: "text-2xl font-bold text-white mb-2",
            title: "text-blue-200 font-medium text-lg mb-2",
            university: "text-blue-200 text-sm",
            skillBadge: "px-3 py-1 bg-blue-600 text-blue-100 rounded text-sm font-mono"
          };
        case "animal":
          return {
            container: "p-8 rounded-3xl shadow-lg bg-white/90 backdrop-blur-sm border-4 border-green-200",
            header: "text-center mb-12 relative",
            avatar: "w-20 h-20 rounded-full bg-green-200 flex items-center justify-center mx-auto mb-6 border-4 border-green-300",
            name: "text-3xl font-bold text-green-800 mb-4",
            title: "text-green-700 font-medium text-xl mb-4",
            university: "text-green-600 text-lg",
            skillBadge: "px-4 py-2 bg-green-200 text-green-800 rounded-full text-sm font-bold border-2 border-green-300"
          };
        case "koukyuu":
          return {
            container: "p-12 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20",
            header: "text-center mb-16 relative",
            avatar: "w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-8 border-4 border-white/30",
            name: "text-4xl font-serif text-white mb-6 tracking-wider",
            title: "text-white/90 font-light text-2xl mb-6 italic",
            university: "text-white/80 text-xl",
            skillBadge: "px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 text-white rounded-full text-sm font-medium border border-white/30"
          };
        case "clear":
          return {
            container: "p-10 rounded-3xl shadow-xl bg-white/60 backdrop-blur-md border border-white/50",
            header: "text-center mb-16 relative",
            avatar: "w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-6 border-4 border-white/80",
            name: "text-4xl font-light text-blue-900 mb-6 tracking-wide",
            title: "text-blue-700 font-light text-2xl mb-6",
            university: "text-blue-600 text-lg",
            skillBadge: "px-4 py-2 bg-white/50 text-blue-800 rounded-full text-sm font-light border border-white/60"
          };
        default:
          return {
            container: "p-6 rounded-lg shadow-lg",
            header: "border-b border-current/20 pb-4",
            avatar: "w-16 h-16 rounded-full bg-current/20 flex items-center justify-center",
            name: "text-2xl font-bold",
            title: "opacity-80",
            university: "opacity-70 text-sm",
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
    
    // Get template background and text styles
    const getTemplateColorScheme = (templateId: string) => {
      switch (templateId) {
        case "simple":
          return { background: '#ffffff', color: '#111827' };
        case "yuttari":
          return { background: 'linear-gradient(to bottom right, #fffbeb, #fff7ed, #fef2f2)', color: '#92400e' };
        case "neon":
          return { background: '#000000', color: '#ffffff' };
        case "cool":
          return { background: 'linear-gradient(to bottom right, #0f172a, #111827, #000000)', color: '#ffffff' };
        case "techblue":
          return { background: '#0f172a', color: '#ffffff' };
        case "animal":
          return { background: 'linear-gradient(to bottom right, #dcfce7, #d1fae5, #ccfbf1)', color: '#065f46' };
        case "koukyuu":
          return { background: 'linear-gradient(to bottom right, #581c87, #312e81, #1e3a8a)', color: '#ffffff' };
        case "clear":
          return { background: 'linear-gradient(to bottom right, #eff6ff, #ecfeff)', color: '#1e40af' };
        default:
          return { background: '#ffffff', color: '#000000' };
      }
    };
    
    const colorScheme = getTemplateColorScheme(template.id);
    
    return (
      <div className={`${styles.container} min-h-96`} style={colorScheme}>
        <div className="space-y-6">
          {/* Header */}
          <div className={styles.header}>
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
              <h2 className={styles.name}>
                {template.id === "animal" && "🌿 "}
                {template.id === "koukyuu" && <span className="relative z-10">{displayName}</span>}
                {template.id !== "koukyuu" && displayName}
                {template.id === "animal" && " 🌿"}
              </h2>
              {displayTitle && (
                <p className={styles.title}>
                  {template.id === "animal" && "🍃 "}
                  {displayTitle}
                  {template.id === "animal" && " 🍃"}
                </p>
              )}
              {displayUniversity && (
                <p className={styles.university}>
                  {template.id === "animal" && "🏫 "}{displayUniversity} {displayYear}
                </p>
              )}
            </div>
          </div>

          {/* About */}
          <div className="space-y-3">
            <h3 className={`text-lg font-semibold ${
              template.id === "animal" ? "flex items-center gap-2" :
              template.id === "koukyuu" ? "text-white text-center" :
              template.id === "clear" ? "text-blue-900 text-center" :
              ""
            }`}>
              {template.id === "animal" && "🌺"}
              {template.id === "koukyuu" && <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">自己紹介</span>}
              {template.id === "clear" && <span className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3">自己紹介</span>}
              {!template.id.match(/animal|koukyuu|clear/) && "自己紹介"}
              {template.id === "animal" && " 🌺"}
            </h3>
            <div className={`p-4 rounded-lg ${
              template.id === "simple" ? "bg-gray-50" :
              template.id === "yuttari" ? "bg-white/60 rounded-3xl" :
              template.id === "neon" ? "bg-gray-800 border border-cyan-400" :
              template.id === "cool" ? "bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl" :
              template.id === "techblue" ? "bg-slate-800 border-l-4 border-blue-500" :
              template.id === "animal" ? "bg-white/80 border-4 border-green-200 rounded-3xl relative" :
              template.id === "koukyuu" ? "bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 relative overflow-hidden" :
              template.id === "clear" ? "bg-white/60 backdrop-blur-md rounded-3xl border border-white/50 relative overflow-hidden" :
              "bg-gray-50"
            }`}>
              {template.id === "animal" && (
                <>
                  <div className="absolute -top-2 left-4"><span className="text-xl">🦋</span></div>
                  <div className="absolute -bottom-2 right-4"><span className="text-xl">🐝</span></div>
                </>
              )}
              {template.id === "koukyuu" && (
                <>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
                </>
              )}
              {template.id === "clear" && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 pointer-events-none"></div>
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-xl"></div>
                </>
              )}
              <p className={`text-sm ${
                template.id === "yuttari" ? "leading-relaxed text-center font-light" :
                template.id === "neon" ? "text-gray-100" :
                template.id === "cool" ? "text-gray-100" :
                template.id === "techblue" ? "text-gray-300" :
                template.id === "animal" ? "text-center font-medium" :
                template.id === "koukyuu" ? "text-white leading-loose text-center font-light relative z-10" :
                template.id === "clear" ? "text-blue-800 leading-loose text-center font-light relative z-10" :
                "opacity-80"
              }`}>
                {displaySelfIntro}
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h3 className={`text-lg font-semibold ${
              template.id === "animal" ? "flex items-center gap-2" :
              template.id === "koukyuu" ? "text-white text-center" :
              template.id === "clear" ? "text-blue-900 text-center" :
              ""
            }`}>
              {template.id === "animal" && "🎯"}
              {template.id === "koukyuu" && <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">スキル</span>}
              {template.id === "clear" && <span className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3">スキル</span>}
              {!template.id.match(/animal|koukyuu|clear/) && "スキル"}
              {template.id === "animal" && " 🎯"}
            </h3>
            <div className={`flex flex-wrap gap-2`}>
              {displaySkills.map((skill, index) => (
                <span 
                  key={index}
                  className={styles.skillBadge}
                >
                  {template.id === "animal" && "🌱 "}{skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h3 className={`text-lg font-semibold ${
              template.id === "animal" ? "flex items-center gap-2" :
              template.id === "koukyuu" ? "text-white text-center" :
              template.id === "clear" ? "text-blue-900 text-center" :
              ""
            }`}>
              {template.id === "animal" && "🛠️"}
              {template.id === "koukyuu" && <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">制作物</span>}
              {template.id === "clear" && <span className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3">制作物</span>}
              {!template.id.match(/animal|koukyuu|clear/) && "制作物"}
              {template.id === "animal" && " 🛠️"}
            </h3>
            <div className="space-y-2">
              {displayProjects.slice(0, 1).map((project, index) => (
                <div key={index} className={`p-3 rounded ${
                  template.id === "simple" ? "bg-gray-50" :
                  template.id === "yuttari" ? "bg-white/60 rounded-2xl" :
                  template.id === "neon" ? "bg-gray-800 border border-cyan-400" :
                  template.id === "cool" ? "bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl" :
                  template.id === "techblue" ? "bg-slate-800 rounded-lg border border-slate-700" :
                  template.id === "animal" ? "bg-white/80 border-4 border-green-200 rounded-3xl relative" :
                  "bg-current/10"
                } relative`}>
                  {template.id === "animal" && (
                    <div className="absolute -top-2 -right-2"><span className="text-2xl">🎨</span></div>
                  )}
                  <h4 className={`font-medium ${
                    template.id === "neon" ? "text-cyan-400" :
                    template.id === "cool" ? "text-blue-400" :
                    template.id === "techblue" ? "text-blue-400" :
                    template.id === "animal" ? "text-green-900 flex items-center gap-2" :
                    ""
                  }`}>
                    {template.id === "animal" && "🌟 "}{project.title}
                  </h4>
                  <p className={`text-sm ${
                    template.id === "yuttari" ? "font-light" :
                    template.id === "neon" ? "text-gray-200" :
                    template.id === "cool" ? "text-gray-200" :
                    template.id === "techblue" ? "text-gray-300" :
                    template.id === "animal" ? "font-medium" :
                    "opacity-80"
                  }`}>
                    {project.description}
                  </p>
                  {project.tech && (
                    <p className={`text-xs mt-1 ${
                      template.id === "neon" ? "text-pink-400" :
                      template.id === "cool" ? "text-purple-400" :
                      template.id === "techblue" ? "text-blue-400" :
                      template.id === "animal" ? "text-green-700 font-bold" :
                      "opacity-60"
                    }`}>
                      {template.id === "animal" && "🔧 "}
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