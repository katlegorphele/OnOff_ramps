import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import kotaniPay from 'kotanipay';

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD
    }
});

async function sendTransactionEmail(
    fullname,
    phoneNumber,
    addressTo,
    currency,
    amount,
    walletId,
    referenceId,
    transactionHash,
) {
    if (!addressTo) return;

    try {
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_EMAIL,
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
        const { fullname = 'Kat', phoneNumber = '27681976458', amount, walletId, referenceId, currency = 'ZAR', paymentMethod = 'CARD', transactionHash } = await req.json();

        // Validate required fields

        // Generate transaction ID
        const transactionId = "txn_" + Math.random().toString(36).substr(2, 9);

        // Send email 
        try {

            kotaniPay.auth('eyJ1c2VyX2lkIjoiNjc3Y2UwZjM5OGQ1Y2NkYjI0NDkwYzUwIiwiY3JlYXRlZF9hdCI6IjIwMjUtMDEtMDdUMTA6MDU6NTEuNzY5WiJ9.87876c17a6b8225f9d5921d2fad180731adcf0453e54234ba3619ea3b192b08a');
            const response = kotaniPay.onrampController_onramp({
                bankCheckout: {
                    paymentMethod,
                    fullname,
                    phoneNumber
                },
                currency: 'ZAR',
                chain: 'LISK',
                token: 'CUSD',
                fiatAmount: 10,
                receiverAddress: addressTo,
                referenceId: transactionId
            })
                .then(({ data }) => console.log(data))
                .catch(err => console.error(err));


            // await sendTransactionEmail(
            //     addressTo,
            //     amount,
            //     walletId,
            //     referenceId,
            //     transactionHash,
            // );

            // Return success response
        return NextResponse.json({
            success: true,
            message: `Success`,
            data: response.message,
            transactionHash,
            amountReceived: amount,
        });
        } catch (error) {
            console.error('Failed to send email notification:', error);
            return NextResponse.json({
                success: false,
                message: `Failed to process`,
                data: response.message,
                transactionHash,
                amountReceived: amount,
            }, { status: 500 });
        }


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