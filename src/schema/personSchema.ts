// src/lib/schema/personSchema.ts
// --------------------------------------------------
// PERSON SCHEMA (Schema.org)
// Used for Principal / Director / Founder credibility
// Inject ONLY on pages where the person is visible
// --------------------------------------------------

export interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  worksFor: {
    name: string;
    url: string;
  };
  image?: string;
  description?: string;
  sameAs?: string[];
}

export function personSchema({
  name,
  jobTitle,
  worksFor,
  image,
  description,
  sameAs = [],
}: PersonSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    worksFor: {
      "@type": "EducationalOrganization",
      name: worksFor.name,
      url: worksFor.url,
    },
    image,
    description,
    sameAs,
  };
}
