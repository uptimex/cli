import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: () => (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      <div className="max-w-2xl border rounded-lg p-6">
        <h2 className="font-semibold mb-4">Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full border rounded-md px-4 py-2" />
          </div>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">Save</button>
        </div>
      </div>
    </div>
  ),
})
