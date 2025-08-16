var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var mensagem_exports = {};
__export(mensagem_exports, {
  default: () => mensagem_default
});
module.exports = __toCommonJS(mensagem_exports);
var import_kafka = require("@@/libs/kafka");
var mensagem_default = async (router) => {
  router.post("/", async (req, res) => {
    await import_kafka.kafka.producer.connect();
    await import_kafka.kafka.producer.send({
      topic: "demo",
      messages: [
        {
          key: "key",
          value: JSON.stringify(req.body)
        }
      ]
    });
    return res.status(200).json({ ok: true });
  });
  return router;
};
//# sourceMappingURL=mensagem.js.map