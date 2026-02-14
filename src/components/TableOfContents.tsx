export default function TableOfContents({
  headings,
}: {
  headings: { text: string; id: string }[];
}) {
  return (
    <div
      data-testid="table-of-contents"
      className="p-4 border rounded bg-gray-50"
    >
      <h3 className="font-semibold mb-2">Table of Contents</h3>
      <ul className="space-y-1 text-sm">
        {headings.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className="hover:underline">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
