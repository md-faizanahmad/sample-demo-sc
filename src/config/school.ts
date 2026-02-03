// src/config/school.ts
// -------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH FOR SCHOOL INFORMATION
//
// ✅ Used by: Footer, Header, Metadata, Schema, WhatsApp, Maps
// ✅ Update data here → entire website updates automatically
// ❌ Do NOT put page content, JSX, UI logic, or marketing copy here
//
// Rule of thumb:
// - If Google, parents, or schema need it → it belongs here
// - If it’s visual or page-specific → it does NOT belong here
// -------------------------------------------------------------------

export const SCHOOL_CONFIG = {
  // ============================================================
  // MANAGEMENT & TRUST SIGNALS
  // Used on: About page, schema, credibility sections
  // ============================================================
  management: {
    principal: "Dr. XYZ", // Change only if officially confirmed
    foundedYear: 2005, // Establishment year
  },

  // ============================================================
  // BASIC IDENTITY
  // Used everywhere: titles, schema, footer, metadata
  // ============================================================
  name: "Hansraj Public School",
  shortName: "Hansraj Public School",
  board: "CBSE",
  city: "Gaya",
  state: "Bihar",
  country: "India",

  // ============================================================
  // SCHOOL TIMINGS
  // Used on: Contact page, footer, schema (optional)
  // ============================================================
  timings: {
    days: "Monday to Saturday",
    hours: "8:00 AM – 2:00 PM",
  },

  // ============================================================
  // BRANCHES
  // Future-proofing: supports multiple campuses if needed
  // ============================================================
  branches: [
    {
      city: "Gaya",
      address: "Near Bodh Gaya Road",
      phone: "9512953624",
    },
  ],

  // ============================================================
  // CONTACT INFORMATION (NAP)
  // ⚠️ Must always match footer text + schema exactly
  // ============================================================
  phone: "+91 95129 53624", // Display format
  phoneRaw: "9512953624", // For tel:, WhatsApp, APIs
  email: "hansraj@schoolgaya.edu",

  // ============================================================
  // POSTAL ADDRESS
  // Used by: Footer, schema, Google trust signals
  // ============================================================
  address: {
    line1: "Near Bodh Gaya Road",
    city: "Gaya",
    state: "Bihar",
    postalCode: "824208",
    country: "IN",
  },

  // ============================================================
  // GEO LOCATION
  // Used by: Google Maps iframe, Get Directions button
  // ============================================================
  location: {
    latitude: 24.7955,
    longitude: 85.0079,
  },

  // ============================================================
  // SOCIAL MEDIA LINKS
  // Leave empty string ("") if platform is not used
  // UI components will auto-hide missing links
  // ============================================================
  social: {
    facebook: "https://facebook.com/yourpage", // https://facebook.com/yourpage
    instagram: "https://instagram.com/yourpage", // https://instagram.com/yourpage
    youtube: "https://youtube.com/@yourchannel", //
  },

  // ============================================================
  // WHATSAPP CONFIGURATION
  // Used by: WhatsApp chat button, enquiry CTA
  // ============================================================
  whatsapp: {
    enabled: true,
    message:
      "Hello, I would like to enquire about admission at Hansraj Public School.",
  },

  // ============================================================
  // ACADEMIC DETAILS
  // Used by: Footer text, metadata, schema
  // ============================================================
  classesOffered: "Nursery to Class 10",
  medium: "English Medium",
  coEd: true,

  // ============================================================
  // GOOGLE BUSINESS PROFILE (OPTIONAL)
  // Add only if GBP is created and verified
  // ============================================================
  googleBusiness: {
    placeId: "", // Google Place ID
    mapsUrl: "", // Public Google Maps listing URL
  },

  // ============================================================
  // WEBSITE
  // Used by: schema canonical references
  // ============================================================
  website: "https://yourdomain.com",
};
