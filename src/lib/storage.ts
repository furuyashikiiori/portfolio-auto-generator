// メモリ内のポートフォリオデータストレージ
// 本番環境では適切なデータベースを使用することを推奨

interface PortfolioData {
  id: string;
  name: string;
  university: string;
  year: string;
  graduation_year: string;
  self_intro: string;
  skills: Array<{ name: string; level: number }>;
  title?: string;
  achievements?: string;
  certifications?: string;
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
    url: string | null;
  }>;
  contact_email?: string;
  sns_links: string[];
  contact_github?: string;
  icon_path?: string | null;
  template: string;
  created_at: string;
}

// メモリ内ストレージ（本番環境では永続化されない）
const portfolioStorage = new Map<string, PortfolioData>();

export function savePortfolio(id: string, data: Omit<PortfolioData, 'id' | 'created_at'>): PortfolioData {
  const portfolioData: PortfolioData = {
    ...data,
    id,
    created_at: new Date().toISOString(),
  };
  
  portfolioStorage.set(id, portfolioData);
  return portfolioData;
}

export function getPortfolio(id: string): PortfolioData | null {
  return portfolioStorage.get(id) || null;
}

export function getAllPortfolios(): PortfolioData[] {
  return Array.from(portfolioStorage.values());
}

export function deletePortfolio(id: string): boolean {
  return portfolioStorage.delete(id);
}
