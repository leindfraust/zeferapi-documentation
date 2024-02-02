import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
    favicon: './public/favicon.svg',
    output: 'static',
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
                    label: "Prerequisites",
                    link: "/prerequisites"
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
