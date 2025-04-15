import type { NextConfig } from "next";

const config: NextConfig = {
    output: "export",
    trailingSlash: true,
    httpAgentOptions: {
        keepAlive: true,
    },
};

export default config;
