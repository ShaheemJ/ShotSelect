/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    },
    webpack(config) {
      console.log('API_BASE_URL in webpack config:', process.env.NEXT_PUBLIC_API_BASE_URL); // Log the variable
      return config;
    },
  };
  
  export default nextConfig;
  
  
