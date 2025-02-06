import Link from "next/link"
import { Sun } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <Sun className="h-6 w-6" />
        <span className="font-bold">SolarAdmin</span>
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
          Overview
        </Link>
        <Link href="/admin/scheduling" className="text-sm font-medium transition-colors hover:text-primary">
          Scheduling
        </Link>
        <Link href="/admin/contracts" className="text-sm font-medium transition-colors hover:text-primary">
          Contracts
        </Link>
        <Link href="/customer" className="text-sm font-medium transition-colors hover:text-primary">
          Customer Portal
        </Link>
      </nav>
    </div>
  )
}

