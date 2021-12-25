"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microcms_js_sdk_1 = require("microcms-js-sdk");
const plugin = function (_, inject) {
    const _options = JSON.parse('{"serviceDomain":"https:\u002F\u002Ftextnuxtblog.microcms.io\u002Fapi\u002Fv1\u002F","apiKey":"5ebf93063f2a4772a4573bc16136551e3360"}');
    const client = microcms_js_sdk_1.createClient(_options);
    inject('microcms', client);
};
exports.default = plugin;
