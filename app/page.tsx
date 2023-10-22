import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
     data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return redirect('/login')
  }

	return (
    <div>
      <pre>
        {JSON.stringify(session, null, 4)}
      </pre>
      <form action="/auth/logout" method="post">
        <button>Log out</button>
      </form>
    </div>
	);
}
