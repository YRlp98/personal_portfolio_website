const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [
            "/en",
            "/fa"
        ],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/blog",
                "_sitemap": "fa-FA",
                "alternatives": [
                    {
                        "hreflang": "fa-FA",
                        "href": "/blog"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/blog"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/blog"
                    }
                ]
            },
            {
                "loc": "/en/blog",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "fa-FA",
                        "href": "/blog"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/blog"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/blog"
                    }
                ]
            },
            {
                "loc": "/projects",
                "_sitemap": "fa-FA",
                "alternatives": [
                    {
                        "hreflang": "fa-FA",
                        "href": "/projects"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/projects"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/projects"
                    }
                ]
            },
            {
                "loc": "/en/projects",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "fa-FA",
                        "href": "/projects"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en/projects"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/projects"
                    }
                ]
            },
            {
                "loc": "/",
                "_sitemap": "fa-FA",
                "alternatives": [
                    {
                        "hreflang": "fa-FA",
                        "href": "/"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/en",
                "_sitemap": "en-US",
                "alternatives": [
                    {
                        "hreflang": "fa-FA",
                        "href": "/"
                    },
                    {
                        "hreflang": "en-US",
                        "href": "/en"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
