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

interface ClearTemplateProps {
  data: PortfolioData;
}

export default function ClearTemplate({ data }: ClearTemplateProps) {
  const renderStars = (level: number) => {
    return '⭐'.repeat(level) + '☆'.repeat(5 - level);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12" style={{ background: 'linear-gradient(to bottom right, #eff6ff, #ecfeff)', color: '#1e40af' }}>
      <div className="max-w-5xl mx-auto p-10">
        {/* ヘッダー */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 blur-3xl rounded-full"></div>
          <div className="relative">
            {data.icon_path && (
              <div className="mb-8">
                <Image 
                  src={data.icon_path} 
                  alt="アイコン" 
                  width={120}
                  height={120}
                  className="w-30 h-30 rounded-full mx-auto object-cover border-4 border-white/80 shadow-xl backdrop-blur-sm"
                />
              </div>
            )}
            <h1 className="text-6xl font-light text-blue-900 mb-6 tracking-wide relative">
              <span className="relative z-10">{data.name}</span>
              <div className="absolute inset-0 text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text opacity-60">
                {data.name}
              </div>
            </h1>
            {data.title && (
              <p className="text-2xl text-blue-700 mb-6 font-light tracking-wide">{data.title}</p>
            )}
            <div className="text-blue-600 space-y-2 text-lg font-light">
              <p className="bg-white/50 backdrop-blur-sm rounded-full px-6 py-2 inline-block mx-2">
                {data.university} {data.year}
              </p>
              <p className="bg-white/50 backdrop-blur-sm rounded-full px-6 py-2 inline-block mx-2">
                卒業予定: {data.graduation_year}
              </p>
            </div>
          </div>
        </div>

        {/* 自己紹介 */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-blue-900 mb-10 text-center relative">
            <span className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
              自己紹介
            </span>
          </h2>
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/30 to-cyan-100/30 pointer-events-none"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-2xl"></div>
            <p className="text-blue-800 leading-loose whitespace-pre-wrap text-xl font-light text-center relative z-10">
              {data.self_intro}
            </p>
          </div>
        </section>

        {/* スキル */}
        {data.skills.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-light text-blue-900 mb-10 text-center relative">
              <span className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
                スキル
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.skills.map((skill, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:bg-white/70 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex justify-between items-center mb-3 relative z-10">
                    <span className="font-light text-blue-900 text-lg tracking-wide">{skill.name}</span>
                    <span className="text-blue-500 text-lg">{renderStars(skill.level)}</span>
                  </div>
                  <div className="bg-white/40 rounded-full h-2 overflow-hidden relative z-10">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 group-hover:from-blue-300 group-hover:to-cyan-300"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 実績 */}
        {data.achievements && (
          <section className="mb-20">
            <h2 className="text-3xl font-light text-blue-900 mb-10 text-center relative">
              <span className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
                実績
              </span>
            </h2>
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 pointer-events-none"></div>
              <p className="text-blue-800 leading-loose whitespace-pre-wrap text-xl font-light relative z-10">
                {data.achievements}
              </p>
            </div>
          </section>
        )}

        {/* 資格 */}
        {data.certifications && (
          <section className="mb-20">
            <h2 className="text-3xl font-light text-blue-900 mb-10 text-center relative">
              <span className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
                資格
              </span>
            </h2>
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 pointer-events-none"></div>
              <p className="text-blue-800 leading-loose whitespace-pre-wrap text-xl font-light relative z-10">
                {data.certifications}
              </p>
            </div>
          </section>
        )}

        {/* 制作物 */}
        {data.projects.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-light text-blue-900 mb-10 text-center relative">
              <span className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
                制作物
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {data.projects.map((project, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50 hover:bg-white/70 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-xl"></div>
                  <h3 className="text-2xl font-light text-blue-900 mb-6 tracking-wide relative z-10 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-800 mb-6 leading-relaxed text-lg font-light relative z-10">{project.description}</p>
                  {project.tech.length > 0 && (
                    <div className="mb-6 relative z-10">
                      <p className="text-lg font-light text-blue-700 mb-4 tracking-wide">技術スタック:</p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-white/50 text-blue-800 text-sm rounded-full font-light backdrop-blur-sm border border-white/60 hover:bg-white/70 transition-all duration-300"
                          >
                            {tech}
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
                      className="inline-flex items-center text-blue-700 hover:text-blue-600 font-light text-lg tracking-wide transition-colors duration-300 relative z-10 group/link"
                    >
                      プロジェクトを見る
                      <span className="ml-3 transform group-hover/link:translate-x-1 transition-transform duration-300">→</span>
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
            <h2 className="text-3xl font-light text-blue-900 mb-10 text-center relative">
              <span className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
                連絡先
              </span>
            </h2>
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/50 text-center space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 pointer-events-none"></div>
              {data.contact_email && (
                <p className="text-blue-800 text-xl relative z-10">
                  <span className="font-light text-blue-900 tracking-wide">メール: </span>
                  <a href={`mailto:${data.contact_email}`} className="text-blue-700 hover:text-blue-600 transition-colors duration-300 underline decoration-blue-300/50 hover:decoration-blue-400">
                    {data.contact_email}
                  </a>
                </p>
              )}
              {data.contact_github && (
                <p className="text-blue-800 text-xl relative z-10">
                  <span className="font-light text-blue-900 tracking-wide">GitHub: </span>
                  <a href={data.contact_github} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600 transition-colors duration-300 underline decoration-blue-300/50 hover:decoration-blue-400">
                    {data.contact_github}
                  </a>
                </p>
              )}
              {data.sns_links.length > 0 && (
                <div className="relative z-10">
                  <span className="font-light text-blue-900 text-xl tracking-wide">SNS: </span>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {data.sns_links.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-600 text-lg transition-colors duration-300 underline decoration-blue-300/50 hover:decoration-blue-400"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}