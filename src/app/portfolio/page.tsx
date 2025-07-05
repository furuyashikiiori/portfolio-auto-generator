'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import SimpleTemplate from '@/components/templates/SimpleTemplate';
import NeonTemplate from '@/components/templates/NeonTemplate';
import CoolTemplate from '@/components/templates/CoolTemplate';
import YuttariTemplate from '@/components/templates/YuttariTemplate';
import TechBlueTemplate from '@/components/templates/TechBlueTemplate';
import AnimalTemplate from '@/components/templates/AnimalTemplate';
import '../globals.css';

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
  template: string;
}

function PortfolioContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!id) return;
      
      try {
        const response = await fetch(`/api/portfolio/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPortfolioData(data);
        }
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">読み込み中...</div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">ポートフォリオが見つかりません</div>
      </div>
    );
  }

  const renderTemplate = () => {
    switch (portfolioData.template) {
      case 'simple':
        return <SimpleTemplate data={portfolioData} />;
      case 'neon':
        return <NeonTemplate data={portfolioData} />;
      case 'cool':
        return <CoolTemplate data={portfolioData} />;
      case 'yuttari':
        return <YuttariTemplate data={portfolioData} />;
      case 'techblue':
        return <TechBlueTemplate data={portfolioData} />;
      case 'animal':
        return <AnimalTemplate data={portfolioData} />;
      default:
        return <SimpleTemplate data={portfolioData} />;
    }
  };

  return renderTemplate();
}

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}