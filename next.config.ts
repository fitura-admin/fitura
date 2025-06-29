import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    prependData: `
      @use "app/styles/colors.scss" as *;
      @use "app/styles/sizes.scss" as *;
      @use "app/styles/text.scss" as *;
    `,
  },

  env: {
    BREVO_API_KEY: process.env.BREVO_API_KEY,
    BREVO_GROUP_ID: process.env.BREVO_GROUP_ID,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    BREVO_APU_URL: process.env.BREVO_API_URL,
  },

  output: "standalone",
};

export default nextConfig;
