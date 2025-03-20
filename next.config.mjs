/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "", // Jika env kosong, basePath tidak digunakan
};

export default nextConfig;
