import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import Link from "next/link";
import { LogoImg } from "./logo-img";

export default function Empty({ title, showSearch = true, showHome = true }) {
  return (
    <Card className="w-full border-dashed bg-background shadow-none">
      <CardContent className="flex flex-col items-center justify-center space-y-6 px-6 py-10 text-center">
        <div className="rounded-full bg-muted p-2">
          <div className="relative">
            <LogoImg className="w-16 h-16" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight">
            No {title} found
          </h3>
          <p className="text-sm text-muted-foreground">
            Looks like there&apos;s nothing available at the moment. Check back
            later!
          </p>
        </div>

        <div className="flex  gap-2 flex-row">
          {showHome && (
            <Button asChild variant={"destructive"}>
              <Link href="/">Home</Link>
            </Button>
          )}
          {showSearch && (
            <Button variant="outline" asChild>
              <Link href="/search">
                <Search className="h-4 w-4" />
                Search
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
