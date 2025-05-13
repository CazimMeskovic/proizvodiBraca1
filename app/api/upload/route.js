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
}  */
/* 
  import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    console.log('➡️ API upload ruta pozvana');

    const supabase = createRouteHandlerClient({ cookies });

    // ✅ Dobij trenutno prijavljenog korisnika
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: 'Korisnik nije prijavljen' }, { status: 401 });
    }

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

    const { error: dbError } = await supabase
      .from('ads')
      .insert([
        {
          title,
          description,
          grad,
          user_id: user.id,
          image_url: imageUrl,
        },
      ]);

    if (dbError) {
      console.error('❌ Greška prilikom upisa u bazu:', dbError.message);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    console.log('✅ Podatak upisan u bazu');

    return NextResponse.json({
      message: 'Proizvod uspješno dodan! i bit će vidljiv za 10 min',
      imageUrl,
    });

  } catch (err) {
    console.error('❗ Server error:', err);
    return NextResponse.json({ error: 'Greška na serveru' }, { status: 500 });
  }
}
  */
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    console.log('➡️ API upload ruta pozvana');

    const supabase = createRouteHandlerClient({ cookies });

    // ✅ Provjeri da li korisnik ima aktivnu sesiju
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      console.error('❌ Korisnik nije prijavljen ili greška:', userError?.message);
      return NextResponse.json({ error: 'Niste prijavljeni' }, { status: 401 });
    }

    // ✅ Preuzmi podatke iz forme
    const formData = await req.formData();
    const title = formData.get('title');
    const description = formData.get('description');
    const grad = formData.get('grad');
    const image = formData.get('image');

    console.log('📦 Podaci iz forme:', { title, description, grad, image });

    if (!image || typeof image.name !== 'string') {
      return NextResponse.json({ error: 'Niste dodali sliku' }, { status: 400 });
    }

    const fileName = `${Date.now()}_${image.name}`;
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    console.log('📤 Upload slike na Supabase Storage:', fileName);

    // ✅ Upload slike u Supabase storage
    const { data: imageData, error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(fileName, buffer, {
        contentType: image.type,
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      console.error('❌ Greška kod upload-a:', uploadError.message);
      return NextResponse.json({ error: 'Neuspješan upload slike' }, { status: 500 });
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from('product-images').getPublicUrl(fileName);

    console.log('✅ Slika dostupna na:', publicUrl);

    // ✅ Upis u tabelu 'ads'
    const { error: dbError } = await supabase.from('ads').insert([
      {
        title,
        description,
        grad,
        user_id: user.id,
        image_url: publicUrl,
      },
    ]);

    if (dbError) {
      console.error('❌ Greška kod upisa u bazu:', dbError.message);
      return NextResponse.json({ error: 'Neuspješan upis u bazu' }, { status: 500 });
    }

    console.log('✅ Uspješan upis u bazu');

    return NextResponse.json({
      message: 'Proizvod uspješno dodat. Biće vidljiv uskoro.',
      imageUrl: publicUrl,
    });
  } catch (err) {
    console.error('❗ Neočekivana greška:', err);
    return NextResponse.json({ error: 'Greška na serveru' }, { status: 500 });
  }
}
