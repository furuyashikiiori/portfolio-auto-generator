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

interface TechBlueTemplateProps {
  data: PortfolioData;
}

export default function TechBlueTemplate({ data }: TechBlueTemplateProps) {
  const renderStars = (level: number) => {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          {data.icon_path && (
            <Image 
              src={data.icon_path} 
              alt="アイコン" 
              width={120}
              height={120}
              className="w-30 h-30 rounded-full mx-auto mb-8 object-cover border-4 border-blue-300 shadow-2xl"
            />
          )}
          <h1 className="text-5xl font-bold mb-4 tracking-tight">{data.name}</h1>
          {data.title && (
            <p className="text-2xl text-blue-200 mb-4 font-medium">{data.title}</p>
          )}
          <div className="text-blue-200 space-y-1 text-lg">
            <p>{data.university} {data.year}</p>
            <p>卒業予定: {data.graduation_year}</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* 自己紹介 */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-1 h-8 bg-blue-500 mr-4"></div>
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <div className="bg-slate-800 border-l-4 border-blue-500 rounded-r-lg p-8 shadow-xl">
            <p className="text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
              {data.self_intro}
            </p>
          </div>
        </section>

        {/* スキル */}
        {data.skills.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-1 h-8 bg-blue-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-white">Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.skills.map((skill, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-blue-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-white text-lg">{skill.name}</span>
                    <span className="text-yellow-400 text-lg">{renderStars(skill.level)}</span>
                  </div>
                  <div className="bg-slate-600 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
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
            <div className="flex items-center mb-8">
              <div className="w-1 h-8 bg-blue-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-white">Achievements</h2>
            </div>
            <div className="bg-slate-800 border-l-4 border-blue-500 rounded-r-lg p-8 shadow-xl">
              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
                {data.achievements}
              </p>
            </div>
          </section>
        )}

        {/* 資格 */}
        {data.certifications && (
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-1 h-8 bg-blue-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>
            <div className="bg-slate-800 border-l-4 border-blue-500 rounded-r-lg p-8 shadow-xl">
              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
                {data.certifications}
              </p>
            </div>
          </section>
        )}

        {/* 制作物 */}
        {data.projects.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-1 h-8 bg-blue-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-white">Projects</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {data.projects.map((project, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-blue-500 group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-3 h-3 bg-blue-500 rounded-full opacity-60"></div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  {project.tech.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-600 text-blue-100 text-sm rounded-md font-mono"
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
                      <span className="mr-2">View Project</span>
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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
            <div className="flex items-center mb-8">
              <div className="w-1 h-8 bg-blue-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-white">Contact</h2>
            </div>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.contact_email && (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">EMAIL</p>
                    <a href={`mailto:${data.contact_email}`} className="text-blue-400 hover:text-blue-300 transition-colors break-all">
                      {data.contact_email}
                    </a>
                  </div>
                )}
                {data.contact_github && (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">GITHUB</p>
                    <a href={data.contact_github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors break-all">
                      {data.contact_github}
                    </a>
                  </div>
                )}
                {data.sns_links.length > 0 && (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">SOCIAL</p>
                    <div className="space-y-2">
                      {data.sns_links.map((link, index) => (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-400 hover:text-blue-300 transition-colors break-all"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}