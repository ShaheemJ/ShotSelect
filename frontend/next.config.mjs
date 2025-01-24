/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    },
    webpack(config) {
      return config;
    },
  };
  
  export default nextConfig;
  
  
