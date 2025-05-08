// app/poklanjam/ServerPoklanjam.tsx
'use server';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export const getPoklanjamProducts = async () => {
  const { data, error } = await supabase.from('poklanjam').select('*');
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
