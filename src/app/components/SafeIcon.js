/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from "react";

function fallbackText(label) {
  const words = label.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return words.slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  }

  return label.slice(0, 2).toUpperCase();
}

export default function SafeIcon({ src, label, className = "skill-logo" }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <span className={`${className} skill-logo-fallback`} aria-hidden="true">
        {fallbackText(label)}
      </span>
    );
  }

  return <img src={src} alt="" className={className} loading="lazy" onError={() => setFailed(true)} />;
}
