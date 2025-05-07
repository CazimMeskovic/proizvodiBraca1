/* import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    console.log('➡️ API upload ruta poklanjamUpload pozvana');

    const formData = await req.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    const image = formData.get('image');
    const grad = formData.get('grad');  // Novo polje grad

    console.log('📦 Podaci iz forme:', { title, description, image, grad });

    if (!image) {
      return NextResponse.json({ error: 'Nema slike' }, { status: 400 });
    }

    const fileName = `${Date.now()}_${image.name}`;
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log('📤 Upload slike na Supabase Storage:', fileName);

    const { data: imageData, error: uploadError } = await supabase.storage
      .from('poklanjam-buket')
      .upload(fileName, buffer, {
        contentType: image.type,
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      console.error('❌ Greška prilikom upload-a:', uploadError.message);
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    const { data: publicUrlData } = supabase.storage
      .from('poklanjam-buket')
      .getPublicUrl(fileName);

    const imageUrl = publicUrlData.publicUrl;

    console.log('✅ Slika uploadovana. Javna adresa:', imageUrl);

    const { error: dbError } = await supabase
      .from('poklanjam')
      .insert([
        {
          title,
          description,
          image_url: imageUrl,
          city,  // Dodavanje grada u bazu
        },
      ]);

    if (dbError) {
      console.error('❌ Greška prilikom upisa u bazu:', dbError.message);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    console.log('✅ Podatak upisan u bazu');

    return NextResponse.json({ message: 'Proizvod uspješno dodan i bit ce vidljiv za 10 min', imageUrl });

  } catch (err) {
    console.error('❗ Server error:', err);
    return NextResponse.json({ error: 'Greška na serveru' }, { status: 500 });
  }
}
 */

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    console.log('➡️ API ruta poklanjam pozvana');

    const formData = await req.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    const image = formData.get('image');
    const grad = formData.get('grad');  // Polje grad

    console.log('📦 Podaci iz forme:', { title, description, image, grad });

    if (!image) {
      return NextResponse.json({ error: 'Nema slike' }, { status: 400 });
    }

    const fileName = `${Date.now()}_${image.name}`;
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log('📤 Upload slike na Supabase Storage:', fileName);

    const { data: imageData, error: uploadError } = await supabase.storage
      .from('product-images')  // Korišćenje odgovarajućeg bucket-a
      .upload(fileName, buffer, {
        contentType: image.type,
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      console.error('❌ Greška prilikom upload-a:', uploadError.message);
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    const { data: publicUrlData } = supabase.storage
      .from('product-images')
      .getPublicUrl(fileName);

    const imageUrl = publicUrlData.publicUrl;

    console.log('✅ Slika uploadovana. Javna adresa:', imageUrl);

    // Upisivanje u odgovarajuću tabelu 'poklanjam'
    const { error: dbError } = await supabase
      .from('usluge')  // Tabela poklanjam
      .insert([
        {
          title,
          description,
          image_url: imageUrl,
          grad,  // Dodavanje grada u bazu
        },
      ]);

    if (dbError) {
      console.error('❌ Greška prilikom upisa u bazu:', dbError.message);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    console.log('✅ Podatak upisan u bazu');

    return NextResponse.json({ message: 'Proizvod uspješno dodan i bit će vidljiv za 10 min', imageUrl });

  } catch (err) {
    console.error('❗ Server error:', err);
    return NextResponse.json({ error: 'Greška na serveru' }, { status: 500 });
  }
}
