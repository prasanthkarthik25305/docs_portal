"use client";

import { useRouter, usePathname } from "next/navigation";

const versions = ["v1", "v2", "v3"];

export default function VersionSelector() {
  const router = useRouter();
  const pathname = usePathname();

  const changeVersion = (version: string) => {
    const segments = pathname.split("/");
    segments[3] = version; // /locale/docs/version/slug
    router.push(segments.join("/"));
  };

  return (
    <select
      data-testid="version-selector"
      onChange={(e) => changeVersion(e.target.value)}
      className="border px-2 py-1 rounded"
      defaultValue={pathname.split("/")[3]}
    >
      {versions.map((v) => (
        <option key={v} value={v}>
          {v.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
