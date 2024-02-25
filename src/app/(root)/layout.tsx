import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export default function RootLayout({
  children,
  className
}: PropsWithChildren<HTMLDivElement>) {
  return (
    <main className={cn('root', className)}>
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  )
}
