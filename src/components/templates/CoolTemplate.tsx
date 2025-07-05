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

interface CoolTemplateProps {
  data: PortfolioData;
}

export default function CoolTemplate({ data }: CoolTemplateProps) {
  const renderStars = (level: number) => {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-8">
      <div className="max-w-4xl mx-auto p-8">
        {/* ヘッダー */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
          <div className="relative">
            {data.icon_path && (
              <Image 
                src={data.icon_path} 
                alt="アイコン" 
                width={120}
                height={120}
                className="w-30 h-30 rounded-full mx-auto mb-8 object-cover border-4 border-blue-500 shadow-xl"
              />
            )}
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              {data.name}
            </h1>
            {data.title && (
              <p className="text-2xl text-gray-300 mb-4 font-medium">{data.title}</p>
            )}
            <div className="text-gray-400 space-y-2">
              <p className="text-lg">{data.university} {data.year}</p>
              <p className="text-lg">卒業予定: {data.graduation_year}</p>
            </div>
          </div>
        </div>

        {/* 自己紹介 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 mr-4"></span>
            自己紹介
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 shadow-2xl">
            <p className="text-gray-100 leading-relaxed whitespace-pre-wrap text-lg">
              {data.self_intro}
            </p>
          </div>
        </section>

        {/* スキル */}
        {data.skills.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 mr-4"></span>
              スキル
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.skills.map((skill, index) => (
                <div key={index} className="group bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-100 text-lg">{skill.name}</span>
                    <span className="text-yellow-400 text-xl">{renderStars(skill.level)}</span>
                  </div>
                  <div className="mt-3 bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:from-blue-400 group-hover:to-purple-400"
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
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 mr-4"></span>
              実績
            </h2>
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 shadow-2xl">
              <p className="text-gray-100 leading-relaxed whitespace-pre-wrap text-lg">
                {data.achievements}
              </p>
            </div>
          </section>
        )}

        {/* 資格 */}
        {data.certifications && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 mr-4"></span>
              資格
            </h2>
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 shadow-2xl">
              <p className="text-gray-100 leading-relaxed whitespace-pre-wrap text-lg">
                {data.certifications}
              </p>
            </div>
          </section>
        )}

        {/* 制作物 */}
        {data.projects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 mr-4"></span>
              制作物
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.projects.map((project, index) => (
                <div key={index} className="group bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">{project.description}</p>
                  {project.tech.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-purple-400 mb-3">技術スタック:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg font-medium shadow-lg"
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
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group/link"
                    >
                      プロジェクトを見る 
                      <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 連絡先 */}
        {(data.contact_email || data.contact_github || data.sns_links.length > 0) && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 mr-4"></span>
              連絡先
            </h2>
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 shadow-2xl space-y-4">
              {data.contact_email && (
                <p className="text-gray-200 text-lg">
                  <span className="font-semibold text-blue-400">メール: </span>
                  <a href={`mailto:${data.contact_email}`} className="text-purple-400 hover:text-purple-300 transition-colors">
                    {data.contact_email}
                  </a>
                </p>
              )}
              {data.contact_github && (
                <p className="text-gray-200 text-lg">
                  <span className="font-semibold text-blue-400">GitHub: </span>
                  <a href={data.contact_github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                    {data.contact_github}
                  </a>
                </p>
              )}
              {data.sns_links.length > 0 && (
                <div>
                  <span className="font-semibold text-blue-400 text-lg">SNS: </span>
                  <div className="flex flex-wrap gap-4 mt-3">
                    {data.sns_links.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
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