import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: () => (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 border rounded-lg">
          <p className="text-sm text-muted-foreground">API Requests</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
        <div className="p-6 border rounded-lg">
          <p className="text-sm text-muted-foreground">Tokens Used</p>
          <p className="text-3xl font-bold mt-1">0</p>
        </div>
        <div className="p-6 border rounded-lg">
          <p className="text-sm text-muted-foreground">Plan</p>
          <p className="text-3xl font-bold mt-1">Free</p>
        </div>
      </div>
    </div>
  ),
})
