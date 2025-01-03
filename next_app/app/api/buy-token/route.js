import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_BURNER_USERNAME,
        pass: process.env.NEXT_PUBLIC_BURNER_PASSWORD
    }
});

async function sendTransactionEmail(
    addressTo,
    amount,
    walletId,
    referenceId,
    transactionHash,
) {
    if (!addressTo) return;

    try {
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_BURNER_USERNAME,
            to: 'katlegophele95@gmail.com',
            subject: 'uZar Purchase Confirmation',
            text: `
  Dear valued customer,
  
  Your transaction details are:
  Address To: ${addressTo}
  Amount Sent: ${amount}
  Wallet Id: ${walletId}
  Reference Id: ${referenceId}
  Transaction Hash: ${`https://sepolia-blockscout.lisk.com/tx/${transactionHash}`}
  
  Thank you for using our service!
  
  Best regards,
  The UZAR Team
        `
        });
    } catch (error) {
        console.error('Failed to send email notification:', error);
    }
}

export async function POST(req) {
    try {
        const { addressTo, amount, walletId, referenceId, transactionHash } = await req.json();

        // Validate required fields

        // Generate transaction ID
        const transactionId = "txn_" + Math.random().toString(36).substr(2, 9);

        // Send email 
        await sendTransactionEmail(
            addressTo,
            amount,
            walletId,
            referenceId,
            transactionHash,
        );


        // Return success response
        return NextResponse.json({
            success: true,
            message: `Success`,
            transactionHash,
            amountReceived: amount,
        });

    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json(
            {
                success: false,
                message: "An error occurred. Please try again.",
            },
            { status: 500 }
        );
    }
}