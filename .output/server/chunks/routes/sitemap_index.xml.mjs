import { t as defineEventHandler, v as sitemapIndexXmlEventHandler } from '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'consola';
import 'vue-router';
import 'node:url';
import 'nuxtseo-shared/utils';
import 'fast-xml-parser';

const sitemap_index_xml = defineEventHandler(sitemapIndexXmlEventHandler);

export { sitemap_index_xml as default };
//# sourceMappingURL=sitemap_index.xml.mjs.map
