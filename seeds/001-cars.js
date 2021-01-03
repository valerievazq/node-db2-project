exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "00S0M3V1NG035H3R3",
          Make: "Volkswagen",
          Model: "Tiguan",
          Mileage: "45251",
          Transmission: "6-speed Automatic",
          Title: "Clean",
        },
        {
          VIN: "0TH1515AN0TH3RV1N",
          Make: "Chevy",
          Model: "Camaro",
          Mileage: "0",
          Transmission: "10-speed Automatic",
          Title: "Clean",
        },
        {
          VIN: "4ND4N0TH3R0N3H3R3",
          Make: "Dodge",
          Model: "Viper",
          Mileage: "54821",
          Transmission: "6-speed Manual",
          Title: "Salvage",
        },
      ]);
    });
};
