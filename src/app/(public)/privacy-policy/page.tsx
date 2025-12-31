import { Separator } from "@/components/ui/separator";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";

// PrivacyPolicy.jsx
export default function PrivacyPolicy() {
  return (
    <div>
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Last Updated: December 31, 2025
          </p>
          <Separator className="mt-4" />
        </header>

        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-2xl font-semibold">
            {SITE_NAME} respects your privacy.
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-4 mt-8 ">
              Information We Collect
            </h2>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li className="text-lg">
                <strong>No personal data:</strong> No names, emails, IP
                addresses, or cookies collected.
              </li>
              <li className="text-lg">
                <strong>Completely anonymous:</strong> Browsing requires no
                tracking or identifiers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 mt-8 ">How We Use Data</h2>
            <p className="text-lg">
              No data collection means no usage, analysis, or storage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 mt-8 ">Data Sharing</h2>
            <p className="text-lg font-semibold text-red-600">
              No data to share.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 mt-8 ">Your Rights</h2>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li className="text-lg">Fully anonymous by design.</li>
              <li className="text-lg">
                Compliant with <strong>IT Act 2000 & DPDP Act 2023</strong>.
              </li>
            </ul>
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
