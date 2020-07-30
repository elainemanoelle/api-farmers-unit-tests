const { Farmer } = require("../models");
const { Op } = require("sequelize");

class FarmerController {

  async findFarmersByNameOrDoc(req, res) {
   
    const farmer = await Farmer.findAll({
      where: {        
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `%${req.params.param}%`
            }
          },
          {
            document_number: {
              [Op.iLike]: `%${req.params.param}%`
            }
          }
        ]
      }      
    });

    return res.status(200).json(farmer);
  }

}

module.exports = new FarmerController();
