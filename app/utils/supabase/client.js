/* // utils/supabase/client.js
import { createBrowserClient } from '@supabase/auth-helpers-nextjs';

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
   */
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

export const supabase = createPagesBrowserClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);