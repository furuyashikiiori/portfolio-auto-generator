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

interface YuttariTemplateProps {
  data: PortfolioData;
}

export default function YuttariTemplate({ data }: YuttariTemplateProps) {
  const renderStars = (level: number) => {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12">
      <div className="max-w-5xl mx-auto p-10">
        {/* ヘッダー */}
        <div className="text-center mb-20">
          {data.icon_path && (
            <div className="mb-8">
              <Image 
                src={data.icon_path} 
                alt="アイコン" 
                width={140}
                height={140}
                className="w-35 h-35 rounded-full mx-auto object-cover border-8 border-white shadow-xl"
              />
            </div>
          )}
          <h1 className="text-6xl font-serif text-amber-900 mb-6 tracking-wide">{data.name}</h1>
          {data.title && (
            <p className="text-2xl text-amber-700 mb-6 font-light italic">{data.title}</p>
          )}
          <div className="text-amber-600 space-y-2 text-lg font-light">
            <p>{data.university} {data.year}</p>
            <p>卒業予定: {data.graduation_year}</p>
          </div>
        </div>

        {/* 自己紹介 */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-amber-900 mb-10 text-center">自己紹介</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-amber-200">
            <p className="text-amber-800 leading-loose whitespace-pre-wrap text-xl font-light text-center">
              {data.self_intro}
            </p>
          </div>
        </section>

        {/* スキル */}
        {data.skills.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-serif text-amber-900 mb-10 text-center">スキル</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.skills.map((skill, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-amber-900 text-xl">{skill.name}</span>
                    <span className="text-yellow-600 text-2xl">{renderStars(skill.level)}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 実績 */}
        {data.achievements && (
          <section className="mb-20">
            <h2 className="text-3xl font-serif text-amber-900 mb-10 text-center">実績</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-amber-200">
              <p className="text-amber-800 leading-loose whitespace-pre-wrap text-xl font-light">
                {data.achievements}
              </p>
            </div>
          </section>
        )}

        {/* 資格 */}
        {data.certifications && (
          <section className="mb-20">
            <h2 className="text-3xl font-serif text-amber-900 mb-10 text-center">資格</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-amber-200">
              <p className="text-amber-800 leading-loose whitespace-pre-wrap text-xl font-light">
                {data.certifications}
              </p>
            </div>
          </section>
        )}

        {/* 制作物 */}
        {data.projects.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-serif text-amber-900 mb-10 text-center">制作物</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {data.projects.map((project, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-serif text-amber-900 mb-6">{project.title}</h3>
                  <p className="text-amber-800 mb-8 leading-relaxed text-lg font-light">{project.description}</p>
                  {project.tech.length > 0 && (
                    <div className="mb-8">
                      <p className="text-lg font-serif text-amber-700 mb-4">技術スタック:</p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-amber-100 text-amber-800 text-sm rounded-full font-medium border border-amber-300"
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
                      className="inline-block text-amber-700 hover:text-amber-600 font-serif text-lg underline decoration-amber-300 hover:decoration-amber-500 transition-colors"
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
          <section className="mb-20">
            <h2 className="text-3xl font-serif text-amber-900 mb-10 text-center">連絡先</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-amber-200 text-center space-y-6">
              {data.contact_email && (
                <p className="text-amber-800 text-xl">
                  <span className="font-serif text-amber-900">メール: </span>
                  <a href={`mailto:${data.contact_email}`} className="text-amber-700 hover:text-amber-600 underline decoration-amber-300 hover:decoration-amber-500 transition-colors">
                    {data.contact_email}
                  </a>
                </p>
              )}
              {data.contact_github && (
                <p className="text-amber-800 text-xl">
                  <span className="font-serif text-amber-900">GitHub: </span>
                  <a href={data.contact_github} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-amber-600 underline decoration-amber-300 hover:decoration-amber-500 transition-colors">
                    {data.contact_github}
                  </a>
                </p>
              )}
              {data.sns_links.length > 0 && (
                <div>
                  <span className="font-serif text-amber-900 text-xl">SNS: </span>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {data.sns_links.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:text-amber-600 text-lg underline decoration-amber-300 hover:decoration-amber-500 transition-colors"
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