import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: () => (
    <div className="container py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">Sign in to UptimeX Code</h1>
        <div className="space-y-4">
          <button className="w-full border px-4 py-3 rounded-md hover:bg-accent">Continue with GitHub</button>
          <button className="w-full border px-4 py-3 rounded-md hover:bg-accent">Continue with Google</button>
        </div>
      </div>
    </div>
  ),
})
