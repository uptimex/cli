import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/billing')({
  component: () => (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-8">Billing</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Free</h3>
          <p className="text-3xl font-bold">$0</p>
          <p className="text-sm text-muted-foreground mb-4">per month</p>
          <ul className="space-y-2 text-sm mb-6">
            <li>10K tokens/month</li>
            <li>Basic models</li>
          </ul>
          <button className="w-full border px-4 py-2 rounded-md" disabled>Current</button>
        </div>
        <div className="border-2 border-primary rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Pro</h3>
          <p className="text-3xl font-bold">$20</p>
          <p className="text-sm text-muted-foreground mb-4">per month</p>
          <ul className="space-y-2 text-sm mb-6">
            <li>100K tokens/month</li>
            <li>All models</li>
          </ul>
          <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md">Upgrade</button>
        </div>
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Enterprise</h3>
          <p className="text-3xl font-bold">Custom</p>
          <p className="text-sm text-muted-foreground mb-4">contact us</p>
          <ul className="space-y-2 text-sm mb-6">
            <li>Unlimited</li>
            <li>Self-hosted</li>
          </ul>
          <button className="w-full border px-4 py-2 rounded-md">Contact</button>
        </div>
      </div>
    </div>
  ),
})
