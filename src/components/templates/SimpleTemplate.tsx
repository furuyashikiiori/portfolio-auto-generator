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

interface SimpleTemplateProps {
  data: PortfolioData;
}

export default function SimpleTemplate({ data }: SimpleTemplateProps) {
  const renderStars = (level: number) => {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  };

  return (
    <div className="min-h-screen bg-white py-8" style={{ backgroundColor: '#ffffff', color: '#111827' }}>
      <div className="max-w-4xl mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          {data.icon_path && (
            <Image 
              src={data.icon_path} 
              alt="アイコン" 
              width={120}
              height={120}
              className="w-30 h-30 rounded-full mx-auto mb-6 object-cover border-4 border-gray-100"
            />
          )}
          <h1 className="text-5xl font-light text-gray-900 mb-3">{data.name}</h1>
          {data.title && (
            <p className="text-xl text-gray-600 mb-3 font-light">{data.title}</p>
          )}
          <div className="text-gray-500 space-y-1">
            <p>{data.university} {data.year}</p>
            <p>卒業予定: {data.graduation_year}</p>
          </div>
        </div>

        {/* 自己紹介 */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-6 border-b border-gray-200 pb-2">自己紹介</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
            {data.self_intro}
          </p>
        </section>

        {/* スキル */}
        {data.skills.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-800 mb-6 border-b border-gray-200 pb-2">スキル</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.skills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded border">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-yellow-600 text-lg">{renderStars(skill.level)}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 実績 */}
        {data.achievements && (
          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-800 mb-6 border-b border-gray-200 pb-2">実績</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
              {data.achievements}
            </p>
          </section>
        )}

        {/* 資格 */}
        {data.certifications && (
          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-800 mb-6 border-b border-gray-200 pb-2">資格</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
              {data.certifications}
            </p>
          </section>
        )}

        {/* 制作物 */}
        {data.projects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-light text-gray-800 mb-6 border-b border-gray-200 pb-2">制作物</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.projects.map((project, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded bg-white">
                  <h3 className="text-xl font-medium mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  {project.tech.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-600 mb-2">技術スタック:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded border"
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
                      className="text-gray-600 hover:text-gray-800 text-sm underline"
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
            <h2 className="text-2xl font-light text-gray-800 mb-6 border-b border-gray-200 pb-2">連絡先</h2>
            <div className="space-y-3">
              {data.contact_email && (
                <p className="text-gray-700">
                  <span className="font-medium">メール: </span>
                  <a href={`mailto:${data.contact_email}`} className="text-gray-600 hover:text-gray-800 underline">
                    {data.contact_email}
                  </a>
                </p>
              )}
              {data.contact_github && (
                <p className="text-gray-700">
                  <span className="font-medium">GitHub: </span>
                  <a href={data.contact_github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 underline">
                    {data.contact_github}
                  </a>
                </p>
              )}
              {data.sns_links.length > 0 && (
                <div>
                  <span className="font-medium text-gray-700">SNS: </span>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {data.sns_links.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 underline"
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