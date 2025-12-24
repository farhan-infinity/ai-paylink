import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Create() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Create Payment Link
          </h1>
          <p className="text-xl text-muted-foreground">
            This page is coming soon. Create your AI-powered payment links here.
          </p>
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

