/** @type {import('next').NextConfig} */
const REPO_SLUG = "Test-of-uploading-zip-file-directly-";
const isExport = process.env.NEXT_PUBLIC_EXPORT === "true";

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isExport ? `/${REPO_SLUG}` : "",
  },
  ...(isExport
    ? {
        output: "export",
        basePath: `/${REPO_SLUG}`,
        assetPrefix: `/${REPO_SLUG}/`,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
