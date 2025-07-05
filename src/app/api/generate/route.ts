import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { savePortfolio } from '@/lib/storage';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // 必須フィールドの取得
    const name = formData.get('name') as string;
    const university = formData.get('university') as string;
    const year = formData.get('year') as string;
    const graduation_year = formData.get('graduation_year') as string;
    const self_intro = formData.get('self_intro') as string;
    const template = formData.get('template') as string;
    
    // スキルデータの処理
    const skillNames = formData.getAll('skill_name') as string[];
    const skillLevels = formData.getAll('skill_level') as string[];
    const skills = skillNames.map((name, index) => ({
      name: name.trim(),
      level: parseInt(skillLevels[index] || '3')
    })).filter(skill => skill.name);
    
    // プロジェクトデータの処理
    const projectTitles = formData.getAll('project_title') as string[];
    const projectDescriptions = formData.getAll('project_description') as string[];
    const projectTechs = formData.getAll('project_tech') as string[];
    const projectUrls = formData.getAll('project_url') as string[];
    
    const projects = projectTitles.map((title, index) => ({
      title: title.trim(),
      description: projectDescriptions[index]?.trim() || '',
      tech: projectTechs[index]?.split(',').map(t => t.trim()).filter(Boolean) || [],
      url: projectUrls[index]?.trim() || null
    })).filter(project => project.title);
    
    // 任意フィールドの取得
    const title = formData.get('title') as string || '';
    const achievements = formData.get('achievements') as string || '';
    const certifications = formData.get('certifications') as string || '';
    const contact_email = formData.get('contact_email') as string || '';
    const contact_sns = formData.get('contact_sns') as string || '';
    const contact_github = formData.get('contact_github') as string || '';
    
    // SNSリンクの処理
    const sns_links = contact_sns ? contact_sns.split(',').map(s => s.trim()).filter(Boolean) : [];
    
    // アイコン画像の処理
    let icon_path = null;
    const iconImage = formData.get('icon_image') as File;
    
    if (iconImage && iconImage.name && process.env.NODE_ENV !== 'production') {
      // 本番環境では画像アップロードを無効化（クラウドストレージの設定が必要）
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
      const fileExtension = path.extname(iconImage.name).toLowerCase();
      
      if (!allowedExtensions.includes(fileExtension)) {
        return NextResponse.json(
          { error: 'サポートされていない画像形式です' },
          { status: 400 }
        );
      }
      
      try {
        const uniqueFilename = `${uuidv4()}${fileExtension}`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        
        // アップロードディレクトリが存在しない場合は作成
        await mkdir(uploadDir, { recursive: true });
        
        const filePath = path.join(uploadDir, uniqueFilename);
        const bytes = await iconImage.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        await writeFile(filePath, buffer);
        icon_path = `/uploads/${uniqueFilename}`;
      } catch (uploadError) {
        console.warn('Image upload failed, continuing without image:', uploadError);
        // 画像アップロードが失敗してもエラーにしない
      }
    }
    
    // ポートフォリオデータの構築
    const portfolioData = {
      name,
      university,
      year,
      graduation_year,
      self_intro,
      skills,
      title,
      achievements,
      certifications,
      projects,
      contact_email,
      sns_links,
      contact_github,
      icon_path,
      template
    };
    
    // ポートフォリオIDの生成
    const portfolioId = uuidv4();
    
    // メモリストレージに保存（本番環境での一時的な解決策）
    const savedData = savePortfolio(portfolioId, portfolioData);
    
    // 従来のファイル保存も維持（開発環境用）
    if (process.env.NODE_ENV !== 'production') {
      try {
        const dataDir = path.join(process.cwd(), 'data');
        await mkdir(dataDir, { recursive: true });
        
        const dataFile = path.join(dataDir, `${portfolioId}.json`);
        await writeFile(dataFile, JSON.stringify(portfolioData, null, 2));
      } catch (fileError) {
        console.warn('File save failed, using memory storage only:', fileError);
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      id: portfolioId,
      message: 'ポートフォリオが正常に生成されました'
    });
    
  } catch (error) {
    console.error('Error generating portfolio:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
    return NextResponse.json(
      { 
        error: 'ポートフォリオの生成に失敗しました',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}