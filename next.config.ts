import type { NextConfig } from "next";

const config: NextConfig = {
    output: "export",
    basePath: "/portfolio",
    assetPrefix: "/portfolio/",
    trailingSlash: true,
};

export default config;
