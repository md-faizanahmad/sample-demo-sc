// src/lib/schema/feeFAQSchema.ts
// --------------------------------------------------
// FAQ SCHEMA – Fee Structure
// Use ONLY on Fee / Fee Structure pages
// --------------------------------------------------

export function feeFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the admission fee at Hansraj Public School?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The admission fee at Hansraj Public School varies by class and is a one-time payment at the time of admission. Detailed class-wise fees are mentioned on the fee structure page.",
        },
      },
      {
        "@type": "Question",
        name: "What is the monthly tuition fee for CBSE classes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monthly tuition fees depend on the class level from Nursery to Class 10. The exact amount is specified in the official fee table for the current academic session.",
        },
      },
      {
        "@type": "Question",
        name: "Are there any additional charges apart from tuition fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, additional charges may include transport fees (based on distance), examination fees per term, and the cost of books and uniforms, which are charged separately.",
        },
      },
      {
        "@type": "Question",
        name: "Is there any sibling discount available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hansraj Public School offers a sibling concession as per school policy. Parents are requested to contact the school office for eligibility details.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if the fee is paid after the due date?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A late fee may be applicable if the payment is made after the due date. Parents are advised to follow the payment schedule mentioned in the fee guidelines.",
        },
      },
    ],
  };
}
