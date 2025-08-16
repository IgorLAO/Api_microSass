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
var kafka_exports = {};
__export(kafka_exports, {
  kafka: () => kafka
});
module.exports = __toCommonJS(kafka_exports);
var import_kafkajs = require("kafkajs");
var kafka;
((_kafka) => {
  _kafka.kafka = new import_kafkajs.Kafka({
    clientId: "my-api",
    brokers: ["localhost:9092"]
    // se for fora da VM, troca por IP/DNS público
  });
  _kafka.producer = _kafka.kafka.producer();
})(kafka || (kafka = {}));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  kafka
});
//# sourceMappingURL=kafka.js.map