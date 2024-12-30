// Import the NextConfig type from 'next'
import { NextConfig } from 'next';

// Define the configuration object with type annotation
const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
};

// Export the configuration object as the default export
export default nextConfig;
