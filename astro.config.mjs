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
                        { label: "Basic Usage", link: "/usage/basic-usage/" },
                        {
                            label: "Methods", link: "/methods/", items: [
                                {
                                    label: "getHtml", link: "/methods/gethtml"
                                },
                                {
                                    label: "getJson", link: "/methods/getjson"
                                },
                                {
                                    label: "getText", link: "/methods/gettext"
                                },
                                {
                                    label: "getPost", link: "/methods/getpost"
                                },
                                {
                                    label: "getPosts", link: "/methods/getposts"
                                }
                            ]
                        }
                    ],
                },
            ],
            customCss: [
                './src/styles/custom.css'
            ]
        }),
    ],
});
