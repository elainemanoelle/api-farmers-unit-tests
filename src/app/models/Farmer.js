module.exports = (sequelize, DataTypes) => {
  const Farmer = sequelize.define(
    "Farmer",
    {
      name: DataTypes.STRING,
      street: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      document_type: DataTypes.STRING,
      document_number: DataTypes.STRING
    },
    {
      hooks: {
        beforeSave: async farmer => {
        }
      }
    }
  );

  return Farmer;
};
