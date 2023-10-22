import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  try {
    const auth = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    console.log({ auth });

    return NextResponse.redirect(requestUrl.origin, {
      status: 301,
    })
  } catch (error) {
    console.log('INSIDE ERROR');
    console.log({ error });
  }
}
