/* import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    console.log('➡️ API upload ruta pozvana');

    const formData = await req.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    const grad = formData.get('grad');
    const image = formData.get('image');

    console.log('📦 Podaci iz forme:', { title, description, grad, image });

    if (!image) {
      return NextResponse.json({ error: 'Nema slike' }, { status: 400 });
    }

    const fileName = `${Date.now()}_${image.name}`;
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log('📤 Upload slike na Supabase Storage:', fileName);

    const { data: imageData, error: uploadError } = await supabase.storage
      .from('usluge-images')
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
      .from('usluge-images')
      .getPublicUrl(fileName);

    const imageUrl = publicUrlData.publicUrl;

    console.log('✅ Slika uploadovana. Javna adresa:', imageUrl);

    const { error: dbError } = await supabase
      .from('usluge-images')
      .insert([
        {
          title,
          description,
          grad,
          image_url: imageUrl,
        },
      ]);

    if (dbError) {
      console.error('❌ Greška prilikom upisa u bazu:', dbError.message);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    console.log('✅ Podatak upisan u bazu');

    return NextResponse.json({ message: 'Usluga uspješno dodana!, i bit ce vidljiv za 10 min', imageUrl });

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
    console.log('➡️ API upload ruta pozvana');

    const formData = await req.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    const grad = formData.get('grad');
    const image = formData.get('image');

    console.log('📦 Podaci iz forme:', { title, description, grad, image });

    if (!image) {
      return NextResponse.json({ error: 'Nema slike' }, { status: 400 });
    }

    const fileName = `${Date.now()}_${image.name}`;
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log('📤 Upload slike na Supabase Storage:', fileName);

    const { data: imageData, error: uploadError } = await supabase.storage
      .from('usluge-images')
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
      .from('usluge-images')
      .getPublicUrl(fileName);

    const imageUrl = publicUrlData.publicUrl;

    console.log('✅ Slika uploadovana. Javna adresa:', imageUrl);

    // ✅ Ispravljeno ime tabele ovdje
    const { error: dbError } = await supabase
      .from('usluge')
      .insert([
        {
          title,
          description,
          grad,
          image_url: imageUrl,
        },
      ]);

    if (dbError) {
      console.error('❌ Greška prilikom upisa u bazu:', dbError.message);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    console.log('✅ Podatak upisan u bazu');

    return NextResponse.json({ message: 'Usluga uspješno dodana!, i bit ce vidljiv za 10 min', imageUrl });

  } catch (err) {
    console.error('❗ Server error:', err);
    return NextResponse.json({ error: 'Greška na serveru' }, { status: 500 });
  }
}
