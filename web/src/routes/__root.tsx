import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="font-bold text-xl">UptimeX Code</Link>
          <nav className="flex items-center gap-6">
            <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">Dashboard</Link>
            <Link to="/settings" className="text-sm text-muted-foreground hover:text-foreground">Settings</Link>
            <Link to="/billing" className="text-sm text-muted-foreground hover:text-foreground">Billing</Link>
          </nav>
        </div>
      </header>
      <main><Outlet /></main>
    </div>
  ),
})
