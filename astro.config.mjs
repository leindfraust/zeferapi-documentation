import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel(),
    integrations: [
        starlight({
            title: "ZeFer API",
            social: {
                github: "https://github.com/leindfraust/zeferapi",
            },
            sidebar: [
                {
                    label: "Introduction",
                    link: "/introduction",
                },
                {
                    label: "Usage",
                    items: [
                        { label: "HTTP API", link: "/usage/http-api/" },
                    ],
                },
            ],
            customCss: [
                './src/styles/custom.css'
            ]
        }),
    ],
});
