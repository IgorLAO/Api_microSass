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
var mysql_exports = {};
__export(mysql_exports, {
  MysqlConfig: () => MysqlConfig
});
module.exports = __toCommonJS(mysql_exports);
const MysqlConfig = {
  host: Plata.config.MYSQL_HOST ?? "localhost:3306",
  user: Plata.config.MYSQL_USER ?? "root",
  password: Plata.config.MYSQL_PASSWORD ?? "123",
  database: Plata.config.MYSQL_DATABASE ?? "mysql",
  port: Plata.config.MYSQL_PORT === void 0 ? void 0 : +Plata.config.MYSQL_PORT,
  waitForConnections: true,
  queueLimit: 0,
  connectionLimit: 2
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MysqlConfig
});
//# sourceMappingURL=mysql.js.map