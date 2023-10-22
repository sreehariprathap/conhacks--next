import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Login() {
  const supabase = createServerComponentClient({ cookies });

  const {
     data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    return redirect('/');
  }

  return (
    <form action="/auth/login" method="post">
      <label htmlFor="email">Email</label>
      <input name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" />
      <button>Sign In</button>
      <button formAction="/auth/sign-up">Sign Up</button>
    </form>
  )
}
