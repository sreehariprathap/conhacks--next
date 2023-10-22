import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  console.log('HELLO IN GET?');
  const supabase = createRouteHandlerClient({ cookies })
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  }

  console.log('Im here');
  return NextResponse.redirect('/')
}
