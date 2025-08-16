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
  Mysql: () => Mysql,
  getMysql: () => getMysql,
  newMysql: () => newMysql
});
module.exports = __toCommonJS(mysql_exports);
var import_mysql = require("@@/configs/mysql");
var import_pwi_plata_type = require("pwi-plata-type");
class Mysql extends import_pwi_plata_type.PlataSql.Driver {
  constructor(config, trx) {
    super({
      client: "mysql2",
      connection: {
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database,
        port: config.port,
        ssl: config.ssl !== void 0 ? void 0 : typeof config.ssl === "string" ? void 0 : config.ssl,
        options: {
          useUTC: false
        }
      }
    }, trx !== void 0, trx);
  }
  /** @deprecated */
  query(query, args) {
    return this.conn.raw(query, args ?? []).catch(
      (err) => Plata.BuildPlataError({
        errorID: "BLMYSQLQUE001",
        msg: "Erro ao realizar select",
        error: err?.toString()
      })
    );
  }
  async healthCheck() {
    const today = await this.conn().select(this.conn.raw("now() as today")).catch(
      (err) => Plata.BuildPlataError({
        errorID: "BLMYSQLHLT001",
        msg: "Erro ao acessar o banco de dados",
        error: err
      })
    );
    return today;
  }
  async executeProcedure(procedure, params) {
    const query = `CALL ${procedure} (${", ?".repeat(params.length).substring(2)})`;
    const queryParams = params.map((i) => i.value);
    return this.conn.raw(query, queryParams).catch(
      (err) => Plata.BuildPlataError({
        errorID: "BLMYSQLEXC002",
        msg: "Erro ao execultar a procedure",
        error: err?.toString()
      })
    );
  }
  async selectAll(table) {
    return this.conn.queryBuilder().select("*").from(table).catch(
      (err) => Plata.BuildPlataError({
        errorID: "BLMYSQLSEL001",
        msg: "Erro ao realizar select",
        error: err?.toString()
      })
    );
  }
  /** @deprecated */
  async selectAllWhere(table, where, args) {
    return this.query(`SELECT * FROM ${table} WHERE ${where}`, args);
  }
}
const newMysql = (config) => {
  return new Mysql(config ?? import_mysql.MysqlConfig);
};
function getMysql() {
  return Plata.CacheClass(newMysql);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Mysql,
  getMysql,
  newMysql
});
//# sourceMappingURL=mysql.js.map