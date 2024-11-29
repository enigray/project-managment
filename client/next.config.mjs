/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "abi-s3-imgages.s3.us-east-1.amazonaws.com/public",
                port: "",
                pathname: "/**",
            }
        ]
    }
};

export default nextConfig;
