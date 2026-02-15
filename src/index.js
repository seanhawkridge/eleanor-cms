'use strict';

module.exports = {
  register(/*{ strapi }*/) {},

  bootstrap({ strapi }) {
    const deployHook = process.env.RENDER_DEPLOY_HOOK_URL;
    if (!deployHook) return;

    strapi.db.lifecycles.subscribe({
      afterCreate() { fetch(deployHook, { method: 'POST' }).catch(() => {}); },
      afterUpdate() { fetch(deployHook, { method: 'POST' }).catch(() => {}); },
      afterDelete() { fetch(deployHook, { method: 'POST' }).catch(() => {}); },
    });
  },
};
