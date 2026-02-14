"use client";

import dynamic from "next/dynamic";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), {
  ssr: false
});

export default function ApiReference() {
  return (
    <div className="p-6">
      <SwaggerUI url="/openapi.json" />
    </div>
  );
}
