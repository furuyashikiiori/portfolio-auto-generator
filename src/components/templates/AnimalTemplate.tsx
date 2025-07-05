import Image from 'next/image';

interface Skill {
  name: string;
  level: number;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string | null;
}

interface PortfolioData {
  name: string;
  university: string;
  year: string;
  graduation_year: string;
  self_intro: string;
  skills: Skill[];
  title?: string;
  achievements?: string;
  certifications?: string;
  projects: Project[];
  contact_email?: string;
  sns_links: string[];
  contact_github?: string;
  icon_path?: string;
}

interface AnimalTemplateProps {
  data: PortfolioData;
}

export default function AnimalTemplate({ data }: AnimalTemplateProps) {
  const renderStars = (level: number) => {
    return '🌟'.repeat(level) + '⭐'.repeat(5 - level);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 py-12" style={{ background: 'linear-gradient(to bottom right, #dcfce7, #d1fae5, #ccfbf1)', color: '#065f46' }}>
      <div className="max-w-5xl mx-auto p-10">
        {/* ヘッダー */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <span className="text-6xl">🌸</span>
          </div>
          {data.icon_path ? (
            <div className="mb-8 relative">
              <Image 
                src={data.icon_path} 
                alt="アイコン" 
                width={140}
                height={140}
                className="w-35 h-35 rounded-full mx-auto object-cover border-8 border-green-200 shadow-xl"
              />
              <div className="absolute -top-2 -right-2">
                <span className="text-4xl">🐱</span>
              </div>
            </div>
          ) : (
            <div className="mb-8">
              <div className="w-35 h-35 rounded-full mx-auto bg-green-200 border-8 border-green-300 shadow-xl flex items-center justify-center">
                <span className="text-6xl">🐱</span>
              </div>
            </div>
          )}
          <h1 className="text-6xl font-bold text-green-800 mb-6 tracking-wide flex items-center justify-center gap-4">
            🌿 {data.name} 🌿
          </h1>
          {data.title && (
            <p className="text-2xl text-green-700 mb-6 font-medium flex items-center justify-center gap-2">
              🍃 {data.title} 🍃
            </p>
          )}
          <div className="text-green-600 space-y-2 text-lg font-medium">
            <p className="flex items-center justify-center gap-2">
              🏫 {data.university} {data.year}
            </p>
            <p className="flex items-center justify-center gap-2">
              🎓 卒業予定: {data.graduation_year}
            </p>
          </div>
        </div>

        {/* 自己紹介 */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-green-800 mb-10 text-center flex items-center justify-center gap-3">
            🌺 自己紹介 🌺
          </h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-lg border-4 border-green-200 relative">
            <div className="absolute -top-4 left-8">
              <span className="text-3xl">🦋</span>
            </div>
            <div className="absolute -bottom-4 right-8">
              <span className="text-3xl">🐝</span>
            </div>
            <p className="text-green-800 leading-loose whitespace-pre-wrap text-xl font-medium text-center">
              {data.self_intro}
            </p>
          </div>
        </section>

        {/* スキル */}
        {data.skills.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-green-800 mb-10 text-center flex items-center justify-center gap-3">
              🎯 スキル 🎯
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.skills.map((skill, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-4 border-green-200 hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute -top-2 -right-2">
                    <span className="text-2xl">{index % 3 === 0 ? '🐻' : index % 3 === 1 ? '🐰' : '🦊'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-green-900 text-xl flex items-center gap-2">
                      🌱 {skill.name}
                    </span>
                    <span className="text-2xl">{renderStars(skill.level)}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 実績 */}
        {data.achievements && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-green-800 mb-10 text-center flex items-center justify-center gap-3">
              🏆 実績 🏆
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-lg border-4 border-green-200 relative">
              <div className="absolute -top-4 left-8">
                <span className="text-3xl">🌟</span>
              </div>
              <div className="absolute -bottom-4 right-8">
                <span className="text-3xl">🎉</span>
              </div>
              <p className="text-green-800 leading-loose whitespace-pre-wrap text-xl font-medium">
                {data.achievements}
              </p>
            </div>
          </section>
        )}

        {/* 資格 */}
        {data.certifications && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-green-800 mb-10 text-center flex items-center justify-center gap-3">
              📜 資格 📜
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-lg border-4 border-green-200 relative">
              <div className="absolute -top-4 left-8">
                <span className="text-3xl">🎓</span>
              </div>
              <div className="absolute -bottom-4 right-8">
                <span className="text-3xl">📚</span>
              </div>
              <p className="text-green-800 leading-loose whitespace-pre-wrap text-xl font-medium">
                {data.certifications}
              </p>
            </div>
          </section>
        )}

        {/* 制作物 */}
        {data.projects.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-green-800 mb-10 text-center flex items-center justify-center gap-3">
              🛠️ 制作物 🛠️
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {data.projects.map((project, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-lg border-4 border-green-200 hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute -top-4 -right-4">
                    <span className="text-4xl">{index % 4 === 0 ? '🎨' : index % 4 === 1 ? '💻' : index % 4 === 2 ? '🚀' : '⚡'}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
                    🌟 {project.title}
                  </h3>
                  <p className="text-green-800 mb-8 leading-relaxed text-lg font-medium">{project.description}</p>
                  {project.tech.length > 0 && (
                    <div className="mb-8">
                      <p className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                        🔧 技術スタック:
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-green-200 text-green-800 text-sm rounded-full font-bold border-2 border-green-300 flex items-center gap-1"
                          >
                            🌿 {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-700 hover:text-green-600 font-bold text-lg underline decoration-green-300 hover:decoration-green-500 transition-colors"
                    >
                      🔗 プロジェクトを見る 🔗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 連絡先 */}
        {(data.contact_email || data.contact_github || data.sns_links.length > 0) && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-green-800 mb-10 text-center flex items-center justify-center gap-3">
              📞 連絡先 📞
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-lg border-4 border-green-200 text-center space-y-6 relative">
              <div className="absolute -top-4 left-8">
                <span className="text-3xl">📧</span>
              </div>
              <div className="absolute -bottom-4 right-8">
                <span className="text-3xl">💌</span>
              </div>
              {data.contact_email && (
                <p className="text-green-800 text-xl flex items-center justify-center gap-2">
                  <span className="font-bold text-green-900">📮 メール:</span>
                  <a href={`mailto:${data.contact_email}`} className="text-green-700 hover:text-green-600 underline decoration-green-300 hover:decoration-green-500 transition-colors">
                    {data.contact_email}
                  </a>
                </p>
              )}
              {data.contact_github && (
                <p className="text-green-800 text-xl flex items-center justify-center gap-2">
                  <span className="font-bold text-green-900">🐙 GitHub:</span>
                  <a href={data.contact_github} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-600 underline decoration-green-300 hover:decoration-green-500 transition-colors">
                    {data.contact_github}
                  </a>
                </p>
              )}
              {data.sns_links.length > 0 && (
                <div>
                  <span className="font-bold text-green-900 text-xl flex items-center justify-center gap-2">
                    🌐 SNS:
                  </span>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {data.sns_links.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:text-green-600 text-lg underline decoration-green-300 hover:decoration-green-500 transition-colors flex items-center gap-1"
                      >
                        🔗 {link}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* フッター装飾 */}
        <div className="text-center pt-10">
          <div className="text-6xl space-x-4">
            🌸🦋🌿🐱🌺🐝🍃
          </div>
        </div>
      </div>
    </div>
  );
}