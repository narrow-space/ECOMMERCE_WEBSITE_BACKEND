const nodemailer = require("nodemailer");
///email config...

exports.transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {

        user: "hximranhasan@gmail.com",
        pass: process.env.PASSWORD

    }
})

// efcnlnjyafutnsnq

// baounhjvzwpcqlck
