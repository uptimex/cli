import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="container py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to UptimeX Code</h1>
        <p className="text-lg text-muted-foreground mb-8">
          AI coding agent for DevOps and SRE.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/login" className="bg-primary text-primary-foreground px-8 py-3 rounded-md">Get Started</a>
        </div>
      </div>
    </div>
  ),
})
