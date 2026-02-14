"use client";

import { useState, useEffect } from "react";
import FlexSearch from "flexsearch";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [index] = useState(
    () => new FlexSearch.Index({ tokenize: "forward" })
  );

  useEffect(() => {
    fetch("/api/search")
      .then((res) => res.json())
      .then((docs) => {
        docs.forEach((doc: any) =>
          index.add(doc.id, doc.content)
        );
      });
  }, [index]);

  const handleSearch = (value: string) => {
    setQuery(value);
    const searchResults = index.search(value);
    setResults(searchResults as string[]);
  };

  return (
    <div className="relative" data-testid="full-text-search">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="border px-3 py-1 rounded w-64"
      />

      {results.length > 0 && (
        <div className="absolute bg-white shadow mt-2 w-full z-10">
          {results.map((id) => (
            <Link
              key={id}
              href={id}
              className="block px-3 py-2 hover:bg-gray-100"
            >
              {id}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
