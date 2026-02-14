import { getDocContent } from "@/lib/docs";
import FeedbackWidget from "@/components/FeedbackWidget";
import TableOfContents from "@/components/TableOfContents";

export const revalidate = 60;

export default async function DocPage({
  params,
}: {
  params: Promise<{
    locale: string;
    version: string;
    slug: string;
  }>;
}) {
  const { locale, version, slug } = await params;

  try {
    const content = await getDocContent(
      version,
      locale,
      slug
    );

    return (
      <div className="xl:max-w-3xl mx-auto">
        <div className="xl:flex xl:gap-12">
          {/* Main Content */}
          <article className="xl:flex-1 min-w-0">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="mt-12">
              <FeedbackWidget />
            </div>
          </article>

          {/* Table of Contents - Desktop Only */}
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <TableOfContents headings={[]} />
            </div>
          </aside>
        </div>
      </div>
    );
  } catch (error) {
    // Fallback for missing content
    return (
      <div className="xl:max-w-3xl mx-auto">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-4 capitalize">
            {slug.replace(/-/g, ' ')}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              This documentation page is being created. Content will be available soon.
            </p>
            <p>
              In the meantime, you can explore other sections of documentation or return to the homepage.
            </p>
          </div>
          <div className="mt-8">
            <FeedbackWidget />
          </div>
        </div>
      </div>
    );
  }
}
