"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  addDtoOnSqlServer: async (data) => {
    try {
      if (data) return true;
      return false;
    } catch (error) {
      return false;
    }
  },

  updateDtoOnSqlServer: async (data) => {
    try {
      if (data) return true;
      return false;
    } catch (error) {
      return false;
    }
  },
};
