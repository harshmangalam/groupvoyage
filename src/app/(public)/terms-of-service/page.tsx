import { Separator } from "@/components/ui/separator";
import { SITE_EMAIL } from "@/lib/constants";

// TermsOfService.jsx
export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: December 31, 2025
          </p>
          <Separator className="mt-4" />
        </header>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 mt-8">1. Acceptance</h2>
            <p className="text-lg">
              Using groupvoyage.in means you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 mt-8">
              2. Nature of Service
            </h2>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li className="text-lg">
                GroupVoyage is a <strong>free directory/aggregator</strong> of
                public weekend trips from public Websites.
              </li>
              <li className="text-lg font-semibold text-destructive">
                We do not operate trips, take payments, or guarantee
                accuracy/safety.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 mt-8">3. No Liability</h2>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li className="text-lg">
                Trips/groups are user/organizer-provided.{" "}
                <strong>Verify independently</strong>.
              </li>
              <li className="text-lg">
                No responsibility for cancellations, safety, payments, or
                disputes.
              </li>
              <li className="text-lg">Site "as is" – no warranties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 mt-8">4. Prohibited Use</h2>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li className="text-lg">
                No scraping, commercial use without permission.
              </li>
              <li className="text-lg">
                Report inaccurate/suspicious listings:{" "}
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="text-blue-600 hover:underline"
                >
                  {SITE_EMAIL}
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 mt-8">
              5. Intellectual Property
            </h2>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li className="text-lg">
                Content from public website sources. Respect original creators.
              </li>
              <li className="text-lg">DMCA takedowns: Contact us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 mt-8">
              6. Changes & Termination
            </h2>
            <p className="text-lg">
              Terms may update. Continued use = acceptance.
            </p>
          </section>

          <section className="pt-12 border-t">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-lg hover:underline"
            >
              {SITE_EMAIL}
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
