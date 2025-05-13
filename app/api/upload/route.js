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
    const image = formData.get('image');

    console.log('📦 Podaci iz forme:', { title, description, image });

    if (!image) {
      return NextResponse.json({ error: 'Nema slike' }, { status: 400 });
    }

    const fileName = `${Date.now()}_${image.name}`;
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log('📤 Upload slike na Supabase Storage:', fileName);

    const { data: imageData, error: uploadError } = await supabase.storage
      .from('product-images')
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

    const { error: dbError } = await supabase
      .from('products')
      .insert([
        {
          title,
          description,
          image_url: imageUrl,
        },
      ]);

    if (dbError) {
      console.error('❌ Greška prilikom upisa u bazu:', dbError.message);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    console.log('✅ Podatak upisan u bazu');

    return NextResponse.json({ message: 'Proizvod uspješno dodan! i bit ce vidljiv za 10 min', imageUrl });

  } catch (err) {
    console.error('❗ Server error:', err);
    return NextResponse.json({ error: 'Greška na serveru' }, { status: 500 });
  }
}
 */
/* 
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
    const grad = formData.get('grad'); // 🆕 Dodato
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
      .from('product-images')
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

    const { error: dbError } = await supabase
      .from('ads')
      .insert([
        {
          title,
          description,
          grad, // 🆕 Dodato
          image_url: imageUrl,
        },
      ]);

    if (dbError) {
      console.error('❌ Greška prilikom upisa u bazu:', dbError.message);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    console.log('✅ Podatak upisan u bazu');

    return NextResponse.json({ message: 'Proizvod uspješno dodan! i bit će vidljiv za 10 min', imageUrl });

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
      .from('product-images')
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

    // Dobijanje trenutnog korisnika
    const user = await supabase.auth.getUser();
    const userId = user.data?.user?.id;

    if (!userId) {
      return NextResponse.json({ error: 'Korisnik nije prijavljen' }, { status: 401 });
    }

    const { error: dbError } = await supabase
      .from('ads')
      .insert([
        {
          title,
          description,
          grad,
          user_id: userId,  // Upisivanje pravog user_id
          image_url: imageUrl,
        },
      ]);

    if (dbError) {
      console.error('❌ Greška prilikom upisa u bazu:', dbError.message);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    console.log('✅ Podatak upisan u bazu');

    return NextResponse.json({ message: 'Proizvod uspješno dodan! i bit će vidljiv za 10 min', imageUrl });

  } catch (err) {
    console.error('❗ Server error:', err);
    return NextResponse.json({ error: 'Greška na serveru' }, { status: 500 });
  }
}
