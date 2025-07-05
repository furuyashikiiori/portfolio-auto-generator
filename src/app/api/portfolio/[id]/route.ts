import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import { getPortfolio } from '@/lib/storage';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Portfolio ID is required' },
        { status: 400 }
      );
    }
    
    // まずメモリストレージから確認
    const portfolioData = getPortfolio(id);
    if (portfolioData) {
      return NextResponse.json(portfolioData);
    }
    
    // フォールバック: ファイルシステムから読み取り（開発環境用）
    if (process.env.NODE_ENV !== 'production') {
      try {
        const dataDir = path.join(process.cwd(), 'data');
        const dataFile = path.join(dataDir, `${id}.json`);
        const fileContent = await readFile(dataFile, 'utf-8');
        const fileData = JSON.parse(fileContent);
        return NextResponse.json(fileData);
      } catch {
        // ファイル読み取り失敗は無視
      }
    }
    
    return NextResponse.json(
      { error: 'Portfolio not found' },
      { status: 404 }
    );
    
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}