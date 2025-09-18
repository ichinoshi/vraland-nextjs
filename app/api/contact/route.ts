import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Validate environment variables
const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "SMTP_FROM_EMAIL",
  "SMTP_TO_EMAIL",
  "SMTP_TO_EMAIL_GMAIL",
];

export async function POST(request: NextRequest) {
  console.log("Contact form submission received");

  try {
    const body = await request.json();
    console.log("Request body:", JSON.stringify(body, null, 2));

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      const error = "Missing required fields";
      console.error("Validation error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      const error = "Invalid email format";
      console.error("Validation error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    // Check for missing environment variables
    const missingVars = requiredEnvVars.filter(
      (varName) => !process.env[varName]
    );
    if (missingVars.length > 0) {
      console.error(
        "Missing required environment variables:",
        missingVars.join(", ")
      );
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // SMTP configuration
    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      logger: true,
      debug: true,
    };

    console.log("SMTP Config:", {
      ...smtpConfig,
      auth: { ...smtpConfig.auth, pass: "***" },
    });

    // Create transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // Verify connection configuration
    try {
      console.log("Verifying SMTP connection...");
      await transporter.verify();
      console.log("Server is ready to take our messages");
    } catch (err) {
      console.error("SMTP connection error:", err);
      throw new Error("Failed to connect to email server");
    }

    // Prepare recipients list
    const recipients = [
      process.env.SMTP_TO_EMAIL,
      process.env.SMTP_TO_EMAIL_GMAIL,
    ].join(", ");

    // Email options with professional layout
    const mailOptions = {
      from: `"VRA Land Contact Form" <${process.env.SMTP_FROM_EMAIL}>`,
      to: recipients,
      replyTo: body.email,
      subject: `[VRA Land] New Contact Inquiry - ${
        body.subject || "General Inquiry"
      }`,
      text: `
        New Contact Form Submission - VRA Land
        
        Contact Details:
        Name: ${body.name}
        Email: ${body.email}
        Phone: ${body.phone || "Not provided"}
        Subject: ${body.subject || "General Inquiry"}
        
        Message:
        ${body.message}
        
        ---
        This message was sent from the VRA Land website contact form.
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Inquiry - VRA Land</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="padding: 30px 40px; text-align: center; background-color: #2d3748; border-radius: 8px 8px 0 0;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">VRA LAND</h1>
                      <p style="margin: 8px 0 0; color: #e2e8f0; font-size: 14px; font-weight: 400;">New Contact Inquiry</p>
                    </td>
                  </tr>
                  
                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="margin: 0 0 20px; color: #2d3748; font-size: 20px; font-weight: 600;">Contact Form Submission</h2>
                      
                      <p style="margin: 0 0 30px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                        You have received a new inquiry through the VRA Land website contact form.
                      </p>
                      
                      <!-- Contact Details Table -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 0 30px; background-color: #f7fafc; border-radius: 8px; overflow: hidden;">
                        <tr>
                          <td style="padding: 20px 25px 15px; border-bottom: 1px solid #e2e8f0;">
                            <h3 style="margin: 0 0 15px; color: #2d3748; font-size: 16px; font-weight: 600;">Contact Information</h3>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 25px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 120px; vertical-align: top;">
                                  <span style="color: #718096; font-size: 14px; font-weight: 500;">Name:</span>
                                </td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; vertical-align: top;">
                                  <span style="color: #2d3748; font-size: 14px; font-weight: 600;">${
                                    body.name
                                  }</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 120px; vertical-align: top;">
                                  <span style="color: #718096; font-size: 14px; font-weight: 500;">Email:</span>
                                </td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; vertical-align: top;">
                                  <a href="mailto:${
                                    body.email
                                  }" style="color: #2d3748; font-size: 14px; font-weight: 600; text-decoration: none;">${
        body.email
      }</a>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 120px; vertical-align: top;">
                                  <span style="color: #718096; font-size: 14px; font-weight: 500;">Phone:</span>
                                </td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; vertical-align: top;">
                                  <span style="color: #2d3748; font-size: 14px; font-weight: 600;">${
                                    body.phone || "Not provided"
                                  }</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 12px 0 20px; width: 120px; vertical-align: top;">
                                  <span style="color: #718096; font-size: 14px; font-weight: 500;">Subject:</span>
                                </td>
                                <td style="padding: 12px 0 20px; vertical-align: top;">
                                  <span style="color: #2d3748; font-size: 14px; font-weight: 600;">${
                                    body.subject || "General Inquiry"
                                  }</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Message Section -->
                      <div style="margin: 30px 0;">
                        <h3 style="margin: 0 0 15px; color: #2d3748; font-size: 16px; font-weight: 600;">Message</h3>
                        <div style="background-color: #f7fafc; border-radius: 8px; padding: 20px; border-left: 4px solid #4a5568;">
                          <p style="margin: 0; color: #4a5568; font-size: 15px; line-height: 1.6; white-space: pre-line;">${
                            body.message
                          }</p>
                        </div>
                      </div>
                      
                      <!-- Action Button -->
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="mailto:${
                          body.email
                        }?subject=Re: ${encodeURIComponent(
        body.subject || "General Inquiry"
      )}" 
                           style="display: inline-block; padding: 12px 30px; background-color: #2d3748; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600;">
                          Reply to ${body.name}
                        </a>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 25px 40px; background-color: #f7fafc; border-radius: 0 0 8px 8px; border-top: 1px solid #e2e8f0; text-align: center;">
                      <p style="margin: 0 0 8px; color: #718096; font-size: 13px; line-height: 1.5;">
                        Submitted on ${new Date().toLocaleString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          timeZoneName: "short",
                        })}
                      </p>
                      <p style="margin: 0; color: #718096; font-size: 13px; line-height: 1.5;">
                        This message was sent from the VRA Land website contact form.
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    console.log("Sending email with options:", {
      ...mailOptions,
      from: mailOptions.from,
      to: mailOptions.to,
      text: "*** message content ***",
      html: "*** HTML content ***",
    });

    // Send email
    const startTime = Date.now();
    const info = await transporter.sendMail(mailOptions);
    const endTime = Date.now();
    const processingTime = endTime - startTime;

    console.log("Message sent:", info.messageId);

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
      details: {
        messageId: info.messageId,
        submittedAt: new Date().toISOString(),
        processingTime: `${processingTime}ms`,
        recipientCount: 2,
        status: "delivered",
        nextSteps:
          "Our team will review your inquiry and respond within 24 hours.",
      },
      contact: {
        name: body.name,
        email: body.email,
        subject: body.subject || "General Inquiry",
      },
      confirmation: {
        title: "Message Delivered Successfully",
        description:
          "Thank you for contacting VRA Land. We have received your inquiry and will get back to you soon.",
        estimatedResponse: "Within 24 hours",
        referenceId: info.messageId?.split("@")[0] || `VRA-${Date.now()}`,
      },
    });
  } catch (error) {
    console.error("Error in contact form submission:", error);

    let errorMessage = "Failed to send message. Please try again later.";
    let statusCode = 500;

    if (error instanceof Error) {
      console.error("Error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack,
      });

      if (error.message.includes("Invalid login")) {
        errorMessage = "Invalid email credentials";
        statusCode = 401;
      } else if (error.message.includes("Connection timeout")) {
        errorMessage = "Connection to email server timed out";
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
