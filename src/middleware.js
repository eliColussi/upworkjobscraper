import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  // Create an empty response to start
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          get(name) {
            return request.cookies.get(name)?.value
          },
          set(name, value, options) {
            response.cookies.set({
              name,
              value,
              ...options,
            })
          },
          remove(name, options) {
            response.cookies.set({
              name,
              value: '',
              ...options,
            })
          },
        },
      }
    )

    // Refresh session if possible
    await supabase.auth.getUser()

    // Get user data after refreshing session
    const { data: { user } } = await supabase.auth.getUser()

    // Auth condition redirects
    const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                      request.nextUrl.pathname.startsWith('/signup') ||
                      request.nextUrl.pathname === '/'

    if (user && isAuthPage) {
      // If user is signed in and tries to access auth pages, redirect to dashboard
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    if (!user && !isAuthPage && !request.nextUrl.pathname.startsWith('/auth')) {
      // If user is not signed in and tries to access protected pages, redirect to login
      return NextResponse.redirect(new URL('/login', request.url))
    }

    return response
  } catch (e) {
    // If there's an error, force user to login page
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
