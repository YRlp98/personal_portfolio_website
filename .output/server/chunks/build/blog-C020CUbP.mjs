import { B as BlogCard, b as blogs } from './blogs-CMiD7dQd.mjs';
import { c as changeDirection } from './changeDirection-BOXBeGmC.mjs';
import { _ as _export_sfc, g as useRoute, u as useHead } from './server.mjs';
import { resolveComponent, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  setup() {
    const route = useRoute();
    const canonicalUrl = computed(() => "https://yrlp.ir" + route.path);
    useHead({
      title: "Yousef Roshandel - Blog",
      meta: [
        { name: "description", content: "Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences." },
        { property: "og:title", content: "Yousef Roshandel - Blog" },
        { property: "og:description", content: "Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences." },
        { property: "og:url", content: () => canonicalUrl.value }
      ],
      link: [
        { rel: "canonical", href: () => canonicalUrl.value }
      ]
    });
  },
  name: "Blog",
  components: { BlogCard },
  data() {
    return {
      blogs
    };
  },
  computed: {
    activeLang() {
      return this.$i18n.locale;
    }
  },
  mixins: [changeDirection]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BlogCard = resolveComponent("BlogCard");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "blog-container defualt-margin",
    style: { direction: `${_ctx.changeDirection($options.activeLang)}` }
  }, _attrs))} data-v-42a01218><h1 class="title" data-v-42a01218>${ssrInterpolate(_ctx.$t("blog"))}</h1><div class="blog-cards" data-v-42a01218><!--[-->`);
  ssrRenderList($data.blogs, (blog2) => {
    _push(ssrRenderComponent(_component_BlogCard, {
      class: "blogCard",
      key: blog2.id,
      blog: blog2
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-42a01218"]]);

export { blog as default };
//# sourceMappingURL=blog-C020CUbP.mjs.map
