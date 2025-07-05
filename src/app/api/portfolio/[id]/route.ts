import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

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
    
    const dataDir = path.join(process.cwd(), 'data');
    const dataFile = path.join(dataDir, `${id}.json`);
    
    try {
      const fileContent = await readFile(dataFile, 'utf-8');
      const portfolioData = JSON.parse(fileContent);
      
      return NextResponse.json(portfolioData);
    } catch {
      return NextResponse.json(
        { error: 'Portfolio not found' },
        { status: 404 }
      );
    }
    
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}