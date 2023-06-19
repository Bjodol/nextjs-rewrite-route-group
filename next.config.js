/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const tags = "localhost|nextjs-rewrite-route-group";
    return {
      beforeFiles: [
        {
          source: "/:path((?!api|_next/static|_next/image|favicon.ico).*)",
          has: [
            {
              type: "host",
              // Using [Named capturing group](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#types)
              value: `(?<tag>${tags}).*`,
            },
          ],
          destination: "/:tag/:path",
        },
      ],
      afterFiles: [
        {
          source: "/:tag/a-rewrite/:path*",
          destination: "/:tag/a/:path*",
        },
        {
          source: "/:tag/b-rewrite/:path*",
          destination: "/:tag/b/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
