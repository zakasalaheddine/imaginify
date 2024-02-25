import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export default function AuthLayout({
  children,
  className
}: PropsWithChildren<HTMLDivElement>) {
  return <main className={cn(className, 'auth')}>{children}</main>
}
