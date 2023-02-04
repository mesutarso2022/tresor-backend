"use strict";
const sql = require("mssql");

const { default: createStrapi } = require("strapi");

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false, // change to true for local dev / self-signed certs
  },
};

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async createDto(ctx) {
    const {
      numero_od,
      numero_depense,
      objet_depense,
      libelle_type_beneficiaire,
      date_validation_od,
      montant_od,
      devise,
      numero_dossier,
      date_reception_ordonnancement_provisoire,
      numero_dto,
      date_premier_depart_cabinet,
      date_deuxieme_depart_cabinet,
      date_premier_retour_cabinet,
      date_deuxieme_retour_cabinet,
      code_traitement,
      numero_opi,
      date_transfert_bcc,
    } = ctx.request.body;
    try {
      // mongo
      const createDossier = await createStrapi.query("dto").model.create({
        numero_od,
        numero_depense,
        objet_depense,
        libelle_type_beneficiaire,
        date_validation_od,
        montant_od,
        devise,
        numero_dossier,
        date_reception_ordonnancement_provisoire,
        numero_dto,
        date_premier_depart_cabinet,
        date_deuxieme_depart_cabinet,
        date_premier_retour_cabinet,
        date_deuxieme_retour_cabinet,
        code_traitement,
        numero_opi,
        date_transfert_bcc,
      });
      // sqlserver
      await sql.connect(sqlConfig);
      const result = await sql.query`select * from mytable where id = ${value}`;

      ctx.send(
        {
          data: createDossier,
          message: "le dossier  a été créé",
        },
        201
      );
    } catch (error) {
      console.log("une erreur s'est produite", error.message);
    }
  },
};
