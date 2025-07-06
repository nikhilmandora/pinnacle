import Testi from "../models/Testimonial.js";

const testiSave = async (req, res) => {

  try {

    const { name, work, comment } = req?.body;

    if (!name || !work || !comment) {

      return res.status(422).json({
        status: false,
        message: "Please Fill All Fields",
      });
      
    }

    const reviewVar = await Testi.create({
      name,
      work,
      comment,
    });

    if(name , work , comment) {
      return res.json({
        status: true,
        message: "Review Add Succesfully",
        data: reviewVar
      });
    }

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const testiShow = async (req, res) => {

  try {

    const { status } = req?.query

    let where = {}

    if(status){
      where = { status: status }
    }

    const testiList = await Testi.find(where);

    if (!testiList.length) {
      return res.status(422).json({
        status: false,
        message: "Data Not Found",
      });
    }

    return res.json({
      status: true,
      message: "Testimonial Is Showing Reviews",
      data: testiList
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const testiDelete = async (req, res) => {

  try {

    const { _id } = req?.params;

    const testiDelete = await Testi.findByIdAndDelete({ _id });

    if (!testiDelete) {
      return res.status(422).json({
        status: false,
        message: "Can't Find & Delete",
      });
    }

    return res.json({
      status: true,
      message: "Review Deleted Succesfully",
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message
    });
  }
};

const testiUpdate = async (req, res) => {

    try {
        
        const { _id } = req.params;
        
        const {name , work , comment} = await req?.body;
        
        const testiUpdateID = await Testi.findById({ _id });

        if(!testiUpdateID) {
            return res.status(422).json({
                status: false,
                message: "Can't Find for Update"
            })
        }

        const testiUpdate = await testiUpdateID.updateOne({name, work, comment})
       
        if(!testiUpdate) {
            return res.status(422).json({
                status: false,
                message: "Can't Update Review Succesfully"
            })
        }

        return res.json({
            status: true,
            message: "Review Updated Successfully",
            data: testiUpdate
        })
      
    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const testiUpdateStatus = async (req, res) => {

    try {
        
        const { _id } = req?.params;
        
        const { status } = req?.body;
        
        const testiUpdateID = await Testi.findById({ _id });

        if(!testiUpdateID) {
            return res.status(422).json({
                status: false,
                message: "Can't Find ID"
            })
        }

        const testiUpdate = await testiUpdateID.updateOne({ status })
       
        if(!testiUpdate) {
            return res.status(422).json({
                status: false,
                message: "Can't Update Status"
            })
        }

        return res.json({
            status: true,
            message: "Review Status Updated",
            data: testiUpdate
        })
      
    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

export default { testiSave, testiShow, testiDelete , testiUpdate , testiUpdateStatus };
