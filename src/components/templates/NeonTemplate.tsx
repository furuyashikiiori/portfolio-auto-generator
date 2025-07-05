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

interface NeonTemplateProps {
  data: PortfolioData;
}

export default function NeonTemplate({ data }: NeonTemplateProps) {
  const renderStars = (level: number) => {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  };

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-4xl mx-auto p-8 bg-gray-900 border-2 border-cyan-400 rounded-lg shadow-2xl shadow-cyan-400/20">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          {data.icon_path && (
            <Image 
              src={data.icon_path} 
              alt="アイコン" 
              width={120}
              height={120}
              className="w-30 h-30 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-400/50"
            />
          )}
          <h1 className="text-5xl font-bold text-cyan-400 mb-3 glow-text">{data.name}</h1>
          {data.title && (
            <p className="text-xl text-pink-400 mb-3 font-medium glow-text-pink">{data.title}</p>
          )}
          <div className="text-gray-300 space-y-1">
            <p className="text-cyan-300">{data.university} {data.year}</p>
            <p className="text-cyan-300">卒業予定: {data.graduation_year}</p>
          </div>
        </div>

        {/* 自己紹介 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-pink-400 mb-6 border-b-2 border-pink-400 pb-2 glow-text-pink">自己紹介</h2>
          <div className="p-6 bg-gray-800 border border-cyan-400 rounded-lg shadow-lg shadow-cyan-400/10">
            <p className="text-gray-100 leading-relaxed whitespace-pre-wrap text-lg">
              {data.self_intro}
            </p>
          </div>
        </section>

        {/* スキル */}
        {data.skills.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink-400 mb-6 border-b-2 border-pink-400 pb-2 glow-text-pink">スキル</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-800 border border-cyan-400 rounded hover:shadow-lg hover:shadow-cyan-400/20 transition-all">
                  <span className="font-medium text-cyan-300">{skill.name}</span>
                  <span className="text-yellow-400 text-lg">{renderStars(skill.level)}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 実績 */}
        {data.achievements && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink-400 mb-6 border-b-2 border-pink-400 pb-2 glow-text-pink">実績</h2>
            <div className="p-6 bg-gray-800 border border-cyan-400 rounded-lg shadow-lg shadow-cyan-400/10">
              <p className="text-gray-100 leading-relaxed whitespace-pre-wrap text-lg">
                {data.achievements}
              </p>
            </div>
          </section>
        )}

        {/* 資格 */}
        {data.certifications && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink-400 mb-6 border-b-2 border-pink-400 pb-2 glow-text-pink">資格</h2>
            <div className="p-6 bg-gray-800 border border-cyan-400 rounded-lg shadow-lg shadow-cyan-400/10">
              <p className="text-gray-100 leading-relaxed whitespace-pre-wrap text-lg">
                {data.certifications}
              </p>
            </div>
          </section>
        )}

        {/* 制作物 */}
        {data.projects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink-400 mb-6 border-b-2 border-pink-400 pb-2 glow-text-pink">制作物</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.projects.map((project, index) => (
                <div key={index} className="p-6 bg-gray-800 border border-cyan-400 rounded-lg hover:shadow-lg hover:shadow-cyan-400/20 transition-all">
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                  {project.tech.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-pink-400 mb-2">技術スタック:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700 text-cyan-300 text-sm rounded border border-cyan-500"
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
                      className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors"
                    >
                      プロジェクトを見る →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 連絡先 */}
        {(data.contact_email || data.contact_github || data.sns_links.length > 0) && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pink-400 mb-6 border-b-2 border-pink-400 pb-2 glow-text-pink">連絡先</h2>
            <div className="p-6 bg-gray-800 border border-cyan-400 rounded-lg space-y-3">
              {data.contact_email && (
                <p className="text-gray-200">
                  <span className="font-medium text-cyan-400">メール: </span>
                  <a href={`mailto:${data.contact_email}`} className="text-pink-400 hover:text-pink-300 transition-colors">
                    {data.contact_email}
                  </a>
                </p>
              )}
              {data.contact_github && (
                <p className="text-gray-200">
                  <span className="font-medium text-cyan-400">GitHub: </span>
                  <a href={data.contact_github} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                    {data.contact_github}
                  </a>
                </p>
              )}
              {data.sns_links.length > 0 && (
                <div>
                  <span className="font-medium text-cyan-400">SNS: </span>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {data.sns_links.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-pink-300 transition-colors"
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

        <style jsx>{`
          .glow-text {
            text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor;
          }
          .glow-text-pink {
            text-shadow: 0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 40px #ec4899;
          }
        `}</style>
      </div>
    </div>
  );
}