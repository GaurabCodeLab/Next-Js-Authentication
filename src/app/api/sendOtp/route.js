import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}`,
  };
  return transpoter.sendMail(mailOptions);
};

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const POST = async (req) => {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    const otp = generateOtp();
    await sendOtpEmail(email, otp);
    return NextResponse.json(
      { success: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export { POST };
