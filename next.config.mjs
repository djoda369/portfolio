/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./src/app/base.scss";`,
  },
};

export default nextConfig;
