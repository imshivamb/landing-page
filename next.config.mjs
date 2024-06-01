/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    
    basePath: '',
    images: {
        unoptimized: true,
        domains: ['goqpe.com'],
    },
    assetPrefix: '/v4/out'
      
      
};

export default nextConfig;
