import { P as ProjectCard, p as projects$1 } from './projects-DMJfMNKM.mjs';
import { _ as _export_sfc, f as useRoute, g as useI18n, u as useHead } from './server.mjs';
import { u as useDirection } from './useDirection-CQhRFXyS.mjs';
import { resolveComponent, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'vue-router';
import 'node:url';
import 'nuxtseo-shared/utils';
import 'fast-xml-parser';
import 'perfect-debounce';
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = {
  name: "projects",
  components: { ProjectCard },
  setup() {
    const route = useRoute();
    const { changeDirection } = useDirection();
    const i18n = useI18n();
    const canonicalUrl = computed(() => "https://yrlp.ir" + route.path);
    useHead({
      title: "Yousef Roshandel - Projects",
      meta: [
        { name: "description", content: "Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences." },
        { property: "og:title", content: "Yousef Roshandel - Projects" },
        { property: "og:description", content: "Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences." },
        { property: "og:url", content: () => canonicalUrl.value }
      ],
      link: [
        { rel: "canonical", href: () => canonicalUrl.value }
      ]
    });
    return {
      changeDirection,
      activeLang: computed(() => i18n.locale.value)
    };
  },
  data() {
    return {
      projects: projects$1,
      activeTag: "All"
    };
  },
  methods: {
    onClick(tag) {
      this.activeTag = tag;
    },
    getActiveTagProperties(tag) {
      return this.tags.find((_tag) => {
        return _tag.name === this.$t(this.activeTag);
      });
    }
  },
  computed: {
    tags() {
      return [
        { key: "All", name: this.$t("All"), color: "#ffffff" },
        { key: "Designing", name: this.$t("Designing"), color: "#FB4B8A" },
        { key: "Web", name: this.$t("Web"), color: "#4D848B" },
        { key: "Mobile", name: this.$t("Mobile"), color: "#38AF76" },
        { key: "Others", name: this.$t("Others"), color: "#FB4B4B" }
      ];
    },
    filterdProjects: function() {
      if (this.activeTag === "All") {
        return this.projects;
      }
      return this.projects.filter((project) => {
        let found = false;
        project.tags.filter((indexTag) => {
          found = indexTag.value === this.activeTag;
        });
        return found;
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProjectCard = resolveComponent("ProjectCard");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "projects-container defualt-margin",
    style: { direction: `${$setup.changeDirection($setup.activeLang)}` }
  }, _attrs))} data-v-58672f14><h1 class="title" data-v-58672f14>${ssrInterpolate(_ctx.$t("projects"))}</h1><div class="filter" style="${ssrRenderStyle({ direction: `${$setup.changeDirection($setup.activeLang)}` })}" data-v-58672f14><p data-v-58672f14>${ssrInterpolate(_ctx.$t("show"))}:</p><ul data-v-58672f14><!--[-->`);
  ssrRenderList($options.tags, (tag, index) => {
    _push(`<li style="${ssrRenderStyle({
      color: $data.activeTag === tag.key ? tag.color : null,
      fontWeight: $data.activeTag === tag.key ? "bold" : "regular"
    })}" data-v-58672f14>${ssrInterpolate(tag.name)}</li>`);
  });
  _push(`<!--]--></ul></div><div class="projects-cards" data-v-58672f14><!--[-->`);
  ssrRenderList($options.filterdProjects, (project) => {
    _push(ssrRenderComponent(_component_ProjectCard, {
      class: "projectCard",
      key: project.id,
      project
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-58672f14"]]);

export { projects as default };
//# sourceMappingURL=projects-4DLl9JYN.mjs.map
