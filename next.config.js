/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID:
      "722620760944-d4n4dfd1o0ph7kc4lthpq0jk93am6h59.apps.googleusercontent.com",
    NEXT_PUBLIC_API_BASE_URL: "https://test-api-sra.smartosc.com",
    TOKEN_KEY: "auto-token-key",
    USER_DATA: "user-data",
    PORT: 8080,
  },
};

module.exports = nextConfig;
