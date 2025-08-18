"use server";
import { sendMail } from "./sendMail";

const firstname = "Ibrahim";
const lastname = "Bakour";
export async function Send() {
  await sendMail({
    to: "barhom1232003@gmail.com",
    subject: "email from contact",
    body: `${firstname} ${lastname}`,
  });
}
