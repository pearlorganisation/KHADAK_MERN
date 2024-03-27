import FooterModel from "../../models/Footer/footerModel.js";

// adding footer data in database ..
export const createFooter = async (req, res) => {
  try {
    const data = new FooterModel(req.body);
    data.save();
    res.status(200).json({
      message: "success",
      data: data,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

// getting data of footer from database
export const getFooter = async (req, res) => {
  try {
    const data = await FooterModel.find();
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
    const { title, description } = req.body;
    const updatedFooter = await FooterModel.findByIdAndUpdate(
      req?.params?.id,
      { title: title, description: description },
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
    const deletedItem = await FooterModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
