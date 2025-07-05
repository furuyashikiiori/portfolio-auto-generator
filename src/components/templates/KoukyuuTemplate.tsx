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

interface KoukyuuTemplateProps {
  data: PortfolioData;
}

export default function KoukyuuTemplate({ data }: KoukyuuTemplateProps) {
  const renderStars = (level: number) => {
    return '✦'.repeat(level) + '✧'.repeat(5 - level);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-12" style={{ background: 'linear-gradient(to bottom right, #581c87, #312e81, #1e3a8a)', color: '#ffffff' }}>
      <div className="max-w-6xl mx-auto p-12">
        {/* ヘッダー */}
        <div className="text-center mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-400/10 to-purple-400/10 blur-3xl"></div>
          <div className="relative">
            {data.icon_path && (
              <div className="mb-10">
                <Image 
                  src={data.icon_path} 
                  alt="アイコン" 
                  width={160}
                  height={160}
                  className="w-40 h-40 rounded-full mx-auto object-cover border-8 border-white/30 shadow-2xl backdrop-blur-sm"
                />
              </div>
            )}
            <h1 className="text-7xl font-serif text-white mb-8 tracking-wider relative">
              <span className="relative z-10">{data.name}</span>
              <div className="absolute inset-0 text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text opacity-80">
                {data.name}
              </div>
            </h1>
            {data.title && (
              <p className="text-3xl text-white/90 mb-8 font-light italic tracking-wide">{data.title}</p>
            )}
            <div className="text-white/80 space-y-3 text-xl font-light">
              <p className="border-l-4 border-gold-400 pl-4">{data.university} {data.year}</p>
              <p className="border-l-4 border-gold-400 pl-4">卒業予定: {data.graduation_year}</p>
            </div>
          </div>
        </div>

        {/* 自己紹介 */}
        <section className="mb-24">
          <h2 className="text-4xl font-serif text-white mb-12 text-center relative">
            <span className="border-b-4 border-gradient-to-r from-yellow-400 to-pink-400 pb-4">
              自己紹介
            </span>
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
            <p className="text-white leading-loose whitespace-pre-wrap text-2xl font-light text-center relative z-10">
              {data.self_intro}
            </p>
          </div>
        </section>

        {/* スキル */}
        {data.skills.length > 0 && (
          <section className="mb-24">
            <h2 className="text-4xl font-serif text-white mb-12 text-center relative">
              <span className="border-b-4 border-gradient-to-r from-yellow-400 to-pink-400 pb-4">
                スキル
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.skills.map((skill, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-serif text-white text-xl tracking-wide">{skill.name}</span>
                    <span className="text-yellow-300 text-2xl">{renderStars(skill.level)}</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 transition-all duration-1000 group-hover:from-yellow-300 group-hover:to-purple-300"
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
          <section className="mb-24">
            <h2 className="text-4xl font-serif text-white mb-12 text-center relative">
              <span className="border-b-4 border-gradient-to-r from-yellow-400 to-pink-400 pb-4">
                実績
              </span>
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
              <p className="text-white leading-loose whitespace-pre-wrap text-xl font-light">
                {data.achievements}
              </p>
            </div>
          </section>
        )}

        {/* 資格 */}
        {data.certifications && (
          <section className="mb-24">
            <h2 className="text-4xl font-serif text-white mb-12 text-center relative">
              <span className="border-b-4 border-gradient-to-r from-yellow-400 to-pink-400 pb-4">
                資格
              </span>
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
              <p className="text-white leading-loose whitespace-pre-wrap text-xl font-light">
                {data.certifications}
              </p>
            </div>
          </section>
        )}

        {/* 制作物 */}
        {data.projects.length > 0 && (
          <section className="mb-24">
            <h2 className="text-4xl font-serif text-white mb-12 text-center relative">
              <span className="border-b-4 border-gradient-to-r from-yellow-400 to-pink-400 pb-4">
                制作物
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {data.projects.map((project, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <h3 className="text-3xl font-serif text-white mb-8 tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/90 mb-8 leading-relaxed text-lg font-light">{project.description}</p>
                  {project.tech.length > 0 && (
                    <div className="mb-8">
                      <p className="text-lg font-serif text-yellow-300 mb-6 tracking-wide">技術スタック:</p>
                      <div className="flex flex-wrap gap-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 text-white rounded-full text-sm font-medium backdrop-blur-sm border border-white/30 hover:border-yellow-400/50 transition-all duration-300"
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
                      className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-serif text-lg tracking-wide transition-colors duration-300 group/link"
                    >
                      プロジェクトを見る
                      <span className="ml-3 transform group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 連絡先 */}
        {(data.contact_email || data.contact_github || data.sns_links.length > 0) && (
          <section className="mb-24">
            <h2 className="text-4xl font-serif text-white mb-12 text-center relative">
              <span className="border-b-4 border-gradient-to-r from-yellow-400 to-pink-400 pb-4">
                連絡先
              </span>
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 text-center space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
              {data.contact_email && (
                <p className="text-white text-2xl">
                  <span className="font-serif text-yellow-300 tracking-wide">メール: </span>
                  <a href={`mailto:${data.contact_email}`} className="text-white/90 hover:text-yellow-300 transition-colors duration-300 underline decoration-yellow-400/50 hover:decoration-yellow-400">
                    {data.contact_email}
                  </a>
                </p>
              )}
              {data.contact_github && (
                <p className="text-white text-2xl">
                  <span className="font-serif text-yellow-300 tracking-wide">GitHub: </span>
                  <a href={data.contact_github} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-yellow-300 transition-colors duration-300 underline decoration-yellow-400/50 hover:decoration-yellow-400">
                    {data.contact_github}
                  </a>
                </p>
              )}
              {data.sns_links.length > 0 && (
                <div>
                  <span className="font-serif text-yellow-300 text-2xl tracking-wide">SNS: </span>
                  <div className="flex flex-wrap justify-center gap-6 mt-6">
                    {data.sns_links.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/90 hover:text-yellow-300 text-lg transition-colors duration-300 underline decoration-yellow-400/50 hover:decoration-yellow-400"
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