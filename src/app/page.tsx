"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TemplatePreview from "./components/TemplatePreview";

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

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    university: "",
    year: "",
    graduation_year: "",
    self_intro: "",
    title: "",
    achievements: "",
    certifications: "",
    contact_email: "",
    contact_sns: "",
    contact_github: "",
    template: "",
  });
  const [skills, setSkills] = useState<Skill[]>([{ name: "", level: 3 }]);
  const [projects, setProjects] = useState<Project[]>([
    { title: "", description: "", tech: "", url: "" },
  ]);
  const [iconImage, setIconImage] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTemplateSelect = (templateId: string) => {
    setFormData((prev) => ({
      ...prev,
      template: templateId,
    }));
  };

  const handleSkillChange = (
    index: number,
    field: keyof Skill,
    value: string | number
  ) => {
    const newSkills = [...skills];
    newSkills[index] = { ...newSkills[index], [field]: value };
    setSkills(newSkills);
  };

  const handleProjectChange = (
    index: number,
    field: keyof Project,
    value: string
  ) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setProjects(newProjects);
  };

  const addSkill = () => {
    setSkills([...skills, { name: "", level: 3 }]);
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { title: "", description: "", tech: "", url: "" },
    ]);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // 必須フィールド
    formDataToSend.append("name", formData.name);
    formDataToSend.append("university", formData.university);
    formDataToSend.append("year", formData.year);
    formDataToSend.append("graduation_year", formData.graduation_year);
    formDataToSend.append("self_intro", formData.self_intro);
    formDataToSend.append("template", formData.template);

    // スキル
    skills.forEach((skill) => {
      if (skill.name.trim()) {
        formDataToSend.append("skill_name", skill.name);
        formDataToSend.append("skill_level", skill.level.toString());
      }
    });

    // プロジェクト
    projects.forEach((project) => {
      if (project.title.trim()) {
        formDataToSend.append("project_title", project.title);
        formDataToSend.append("project_description", project.description);
        formDataToSend.append("project_tech", project.tech);
        formDataToSend.append("project_url", project.url);
      }
    });

    // 任意フィールド
    if (formData.title) formDataToSend.append("title", formData.title);
    if (formData.achievements)
      formDataToSend.append("achievements", formData.achievements);
    if (formData.certifications)
      formDataToSend.append("certifications", formData.certifications);
    if (formData.contact_email)
      formDataToSend.append("contact_email", formData.contact_email);
    if (formData.contact_sns)
      formDataToSend.append("contact_sns", formData.contact_sns);
    if (formData.contact_github)
      formDataToSend.append("contact_github", formData.contact_github);

    // アイコン画像
    if (iconImage) formDataToSend.append("icon_image", iconImage);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const result = await response.json();
        router.push(`/portfolio?id=${result.id}`);
      } else {
        console.error("Error generating portfolio");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>
          ポートフォリオ作成
        </h1>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* 必須フィールド */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                名前 *
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                大学・学部名 *
              </label>
              <input
                type='text'
                name='university'
                value={formData.university}
                onChange={handleInputChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                学年 *
              </label>
              <input
                type='text'
                name='year'
                value={formData.year}
                onChange={handleInputChange}
                placeholder='例）3年'
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                卒業予定年 *
              </label>
              <input
                type='text'
                name='graduation_year'
                value={formData.graduation_year}
                onChange={handleInputChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              自己PR *
            </label>
            <textarea
              name='self_intro'
              value={formData.self_intro}
              onChange={handleInputChange}
              required
              rows={4}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              アイコン画像
            </label>
            <input
              type='file'
              accept='image/*'
              onChange={(e) => setIconImage(e.target.files?.[0] || null)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
            />
          </div>

          {/* スキル */}
          <div>
            <h2 className='text-xl font-semibold mb-4'>スキル</h2>
            {skills.map((skill, index) => (
              <div key={index} className='flex items-center space-x-2 mb-2'>
                <input
                  type='text'
                  placeholder='例）Python'
                  value={skill.name}
                  onChange={(e) =>
                    handleSkillChange(index, "name", e.target.value)
                  }
                  className='flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                />
                <select
                  value={skill.level}
                  onChange={(e) =>
                    handleSkillChange(index, "level", parseInt(e.target.value))
                  }
                  className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                >
                  <option value={1}>★☆☆☆☆</option>
                  <option value={2}>★★☆☆☆</option>
                  <option value={3}>★★★☆☆</option>
                  <option value={4}>★★★★☆</option>
                  <option value={5}>★★★★★</option>
                </select>
                <button
                  type='button'
                  onClick={() => removeSkill(index)}
                  className='px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
                >
                  −
                </button>
              </div>
            ))}
            <button
              type='button'
              onClick={addSkill}
              className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
            >
              ＋ スキルを追加
            </button>
          </div>

          {/* 任意情報 */}
          <div className='border-t pt-6'>
            <h2 className='text-xl font-semibold mb-4'>任意情報</h2>

            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  肩書き
                </label>
                <input
                  type='text'
                  name='title'
                  value={formData.title}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  実績
                </label>
                <textarea
                  name='achievements'
                  value={formData.achievements}
                  onChange={handleInputChange}
                  rows={3}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  資格
                </label>
                <textarea
                  name='certifications'
                  value={formData.certifications}
                  onChange={handleInputChange}
                  rows={3}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                />
              </div>

              {/* 制作物 */}
              <div>
                <h3 className='text-lg font-semibold mb-2'>制作物</h3>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className='space-y-2 mb-4 p-4 border border-gray-200 rounded-md'
                  >
                    <input
                      type='text'
                      placeholder='タイトル'
                      value={project.title}
                      onChange={(e) =>
                        handleProjectChange(index, "title", e.target.value)
                      }
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                    />
                    <textarea
                      placeholder='概要'
                      value={project.description}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      rows={2}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                    />
                    <input
                      type='text'
                      placeholder='技術スタック（カンマ区切り）'
                      value={project.tech}
                      onChange={(e) =>
                        handleProjectChange(index, "tech", e.target.value)
                      }
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                    />
                    <input
                      type='url'
                      placeholder='URL（任意）'
                      value={project.url}
                      onChange={(e) =>
                        handleProjectChange(index, "url", e.target.value)
                      }
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                    />
                    <button
                      type='button'
                      onClick={() => removeProject(index)}
                      className='px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
                    >
                      −
                    </button>
                  </div>
                ))}
                <button
                  type='button'
                  onClick={addProject}
                  className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
                >
                  ＋ 制作物を追加
                </button>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    メール
                  </label>
                  <input
                    type='email'
                    name='contact_email'
                    value={formData.contact_email}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    SNS リンク（カンマ区切り）
                  </label>
                  <textarea
                    name='contact_sns'
                    value={formData.contact_sns}
                    onChange={handleInputChange}
                    rows={2}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    GitHub
                  </label>
                  <input
                    type='url'
                    name='contact_github'
                    value={formData.contact_github}
                    onChange={handleInputChange}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* テンプレート選択 */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-4'>
              テンプレート選択 *
            </label>
            <TemplatePreview 
              selectedTemplate={formData.template}
              onTemplateSelect={handleTemplateSelect}
              formData={formData}
              skills={skills}
              projects={projects}
              iconImage={iconImage}
            />
          </div>

          <button
            type='submit'
            className='w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            生成
          </button>
        </form>
      </div>
    </div>
  );
}
