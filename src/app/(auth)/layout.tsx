import { cn } from '@/lib/utils'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <main className={cn('auth')}>{children}</main>
}
