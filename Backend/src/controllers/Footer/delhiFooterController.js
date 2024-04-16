import delhiFooterModel from "../../models/Footer/delhiFooterModel.js";

// adding footer data in database ..
export const createFooter = async (req, res) => {
    try {
      console.log(req?.body,"footer");
      const data = new delhiFooterModel(req.body);
  
      await data.save();
      res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      res.status(500).send(error?.message || "Internal Server Error");
    }
  };

  // getting data of footer from database
export const getFooter = async (req, res) => {
    try {
      const data = await delhiFooterModel.find();
      res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };

  //  edit footer data controller
export const updateFooter = async (req, res) => {
    console.log(req.body);
    try {
      const {  description } = req.body;
      const updatedFooter = await delhiFooterModel.findByIdAndUpdate(
        req?.params?.id,
        {description: description },
        { new: true }
      );
      res.status(200).json({
        message: "data updated successfully",
        data: updatedFooter,
      });
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  };


  // delete footer item controller
export const DeleteFooterData = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedItem = await delhiFooterModel.findByIdAndDelete(id);
      res.status(200).json({
        message: "item deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };