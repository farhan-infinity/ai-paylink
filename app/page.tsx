import Link from "next/link";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            AI PAY-LINK™ — Smart Payment Links Powered by AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Create intelligent payment links that adapt to your business needs.
            Streamline transactions with AI-powered insights and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/create">Create Payment Link</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

