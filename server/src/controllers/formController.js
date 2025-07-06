import FormHome from "../models/Home_Model.js"

const formCreate = async (req , res) => {

    try {

        const {firstName, lastName, mobile, email, city, homeSize, broker, hearAboutUs, message} = req?.body;

        if(!firstName || !lastName || !mobile || !email || !city || !homeSize || !broker || !hearAboutUs) {
            return res.status(422).json({
                status: false,
                message: "Please Fill All Fields!"
            });
        };

        const formDone = await FormHome.create({
            firstName,
            lastName,
            mobile,
            email,
            city,
            homeSize,
            broker,
            hearAboutUs,
            message
        });

        return res.json({
            status: true,
            message: "Form Submit Successfully",
            data: formDone
        });

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const formShow = async (req , res) => {

    try {

        const formsShow = await FormHome.find({});

        if(!formsShow) {
            return res.status(422).json({
                status: false,
                message: "Can't Find Data"
            })
        }

        return res.json({
            status: true,
            message: "Data Found",
            data: formsShow
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

const formDelete = async (req , res) => {

    try {

        const { _id } = req?.params

        const formsDelete = await FormHome.findByIdAndDelete({_id});

        if(!formsDelete) {
            return res.status(422).json({
                status: false,
                message: "Can't Find Id and Delete"
            })
        }

        return res.json({
            status: true,
            message: "Data Deleted Successfully",
            data: formsDelete
        })

    } catch(error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

export default { formCreate , formShow , formDelete }