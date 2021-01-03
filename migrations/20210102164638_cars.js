exports.up = function (knex) {
  //the change we want to make to our schema

  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("id");
    tbl.text("VIN").notNull().unique();
    tbl.text("Make").notNull();
    tbl.text("Model").notNull();
    tbl.integer("Mileage").notNull();
    tbl.text("Transmission");
    tbl.text("Title");
  });
};

exports.down = function (knex) {
  //undoing that change

  return knex.schema.dropTableIfExists("cars");
};
