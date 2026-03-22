import { _ as __nuxt_component_0$1 } from './nuxt-link-BvufrBv4.mjs';
import { mergeProps, resolveComponent, withCtx, createTextVNode, toDisplayString, ref, computed, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc, l as __nuxt_component_2, i as useI18n, k as useSwitchLocalePath } from './server.mjs';
import { c as changeAlign, T as TitleBackground, S as SocialNetwork } from './changeAlign-BBn-GU6S.mjs';
import { c as changeDirection } from './changeDirection-BOXBeGmC.mjs';
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

const _imports_0$1 = publicAssetsURL("/images/icons/dark.svg");
const _imports_1 = publicAssetsURL("/images/icons/light.svg");
const _sfc_main$4 = {
  __name: "SettingsMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, locales } = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    const isDark = ref(true);
    const availableLocales = computed(() => locales.value.filter((l) => l.code !== locale.value));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "settings-menu-container" }, _attrs))} data-v-c6a5da37><div class="menu-theme" data-v-c6a5da37><p data-v-c6a5da37>Theme</p><ul class="menu-bar" data-v-c6a5da37><li data-v-c6a5da37><a class="${ssrRenderClass({ active: unref(isDark) })}" href="#" data-v-c6a5da37><img${ssrRenderAttr("src", _imports_0$1)} alt="dark mode" data-v-c6a5da37> Dark Mode </a></li><li data-v-c6a5da37><a class="${ssrRenderClass({ active: !unref(isDark) })}" href="#" data-v-c6a5da37><img${ssrRenderAttr("src", _imports_1)} alt="light mode" data-v-c6a5da37> Light Mode </a></li></ul></div><div class="menu-language" data-v-c6a5da37><p data-v-c6a5da37>Language</p><ul class="menu-bar" data-v-c6a5da37><li data-v-c6a5da37><!--[-->`);
      ssrRenderList(unref(availableLocales), (locale2) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: locale2.code,
          to: unref(switchLocalePath)(locale2.code)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", `/images/icons/${locale2.code}.svg`)}${ssrRenderAttr("alt", locale2)} data-v-c6a5da37${_scopeId}> ${ssrInterpolate(locale2.name)}`);
            } else {
              return [
                createVNode("img", {
                  src: `/images/icons/${locale2.code}.svg`,
                  alt: locale2
                }, null, 8, ["src", "alt"]),
                createTextVNode(" " + toDisplayString(locale2.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></li></ul></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/SettingsMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SettingsMenu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-c6a5da37"]]);
const _sfc_main$3 = {
  name: "NavbarMobile",
  components: {
    SettingsMenu
  },
  methods: {
    goto(id) {
      this.$router.push(id);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_item = resolveComponent("item");
  const _component_SettingsMenu = resolveComponent("SettingsMenu");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hamburger-menu" }, _attrs))} data-v-5b3e5204><input id="menu__toggle" type="checkbox" data-v-5b3e5204><label class="menu__btn" for="menu__toggle" data-v-5b3e5204><span data-v-5b3e5204></span></label><ul class="menu__box" data-v-5b3e5204><li data-v-5b3e5204>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "menu__item",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-5b3e5204>`);
  _push(ssrRenderComponent(_component_item, {
    class: "menu__item",
    onClick: ($event) => $options.goto("/#homeAboutMe")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("aboutMe"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("aboutMe")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-5b3e5204>`);
  _push(ssrRenderComponent(_component_item, {
    class: "menu__item",
    onClick: ($event) => $options.goto("/#homeSkills")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("skills"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("skills")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-5b3e5204>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "menu__item",
    to: "/projects"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("projects"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("projects")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-5b3e5204>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "menu__item",
    to: "/blog"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u200C${ssrInterpolate(_ctx.$t("blog"))}`);
      } else {
        return [
          createTextVNode("\u200C" + toDisplayString(_ctx.$t("blog")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><div class="settings-menu" data-v-5b3e5204>`);
  _push(ssrRenderComponent(_component_SettingsMenu, { class: "settingsMenu" }, null, _parent));
  _push(`</div></ul></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavbarMobile.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-5b3e5204"]]);
const _imports_0 = publicAssetsURL("/images/icons/more.svg");
const _sfc_main$2 = {
  name: "Navbar",
  components: {
    SettingsMenu
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    goto(id) {
      this.$router.push(id);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SettingsMenu = resolveComponent("SettingsMenu");
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_item = resolveComponent("item");
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar-container" }, _attrs))} data-v-de17e661><div class="navbar defualt-margin" data-v-de17e661><span class="navbar-more" data-v-de17e661><img${ssrRenderAttr("src", _imports_0)} alt="More icon" data-v-de17e661></span><template>`);
  if ($data.isOpen) {
    _push(ssrRenderComponent(_component_SettingsMenu, { class: "settingsMenu" }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</template><ul class="navbar-items" data-v-de17e661><li data-v-de17e661>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-de17e661>`);
  _push(ssrRenderComponent(_component_item, {
    class: "item",
    onClick: ($event) => $options.goto("/#homeAboutMe")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("aboutMe"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("aboutMe")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-de17e661>`);
  _push(ssrRenderComponent(_component_item, {
    class: "item",
    onClick: ($event) => $options.goto("/#homeSkills")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("skills"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("skills")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-de17e661>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: "/projects"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("projects"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("projects")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-de17e661>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: "/blog"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("blog"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("blog")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-de17e661"]]);
const _sfc_main$1 = {
  name: "Footer",
  components: {
    SocialNetwork,
    TitleBackground
  },
  data() {
    return {};
  },
  computed: {
    activeLang() {
      return this.$i18n.locale;
    }
  },
  mixins: [changeDirection, changeAlign],
  methods: {
    goto(id) {
      this.$router.push(id);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SocialNetwork = resolveComponent("SocialNetwork");
  const _component_TitleBackground = resolveComponent("TitleBackground");
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_item = resolveComponent("item");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-container" }, _attrs))} data-v-2193f4e1><div class="socialNetwork-container" data-v-2193f4e1><div class="socialNetwork defualt-margin" data-v-2193f4e1><h2 data-v-2193f4e1>${ssrInterpolate(_ctx.$t("homePageFollowMeSN"))}</h2>`);
  _push(ssrRenderComponent(_component_SocialNetwork, { class: "socialNetwork" }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_TitleBackground, {
    title: "social network",
    class: "titleBackground defualt-margin"
  }, null, _parent));
  _push(`</div><div class="footer defualt-margin" data-v-2193f4e1><ul style="${ssrRenderStyle({ direction: `${_ctx.changeDirection($options.activeLang)}` })}" data-v-2193f4e1><li data-v-2193f4e1>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-2193f4e1>`);
  _push(ssrRenderComponent(_component_item, {
    class: "item",
    onClick: ($event) => $options.goto("/#homeAboutMe")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("aboutMe"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("aboutMe")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-2193f4e1>`);
  _push(ssrRenderComponent(_component_item, {
    class: "item",
    onClick: ($event) => $options.goto("/#homeSkills")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("skills"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("skills")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-2193f4e1>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: "/projects"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("projects"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("projects")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-2193f4e1>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "item",
    to: "/blog"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("blog"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("blog")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><p style="${ssrRenderStyle({ textAlign: `${_ctx.changeAlign($options.activeLang)}` })}" data-v-2193f4e1>${ssrInterpolate(_ctx.$t("footerCopyright"))}</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-2193f4e1"]]);
const _sfc_main = {
  components: {
    NavbarMobile: __nuxt_component_0,
    Navbar: __nuxt_component_1,
    Footer: __nuxt_component_3
  },
  data() {
    return {
      activeLocale: "fa"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavbarMobile = __nuxt_component_0;
  const _component_Navbar = __nuxt_component_1;
  const _component_NuxtPage = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "defualt-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavbarMobile, null, null, _parent));
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-D6UfP2J-.mjs.map
