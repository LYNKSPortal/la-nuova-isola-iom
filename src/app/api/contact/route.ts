import { NextRequest, NextResponse } from 'next/server';
import transporter from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      newsletter
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to restaurant (both bookings and admin)
    const restaurantEmail = {
      from: process.env.SMTP_USER,
      to: ['bookings@lanuovaisola.com', 'admin@lanuovaisola.com'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Newsletter:</strong> ${newsletter ? 'Yes' : 'No'}</p>
        <hr>
        <p><small>Sent from La Nuova Isola website contact form</small></p>
      `,
    };

    // Confirmation email to customer
    const customerEmail = {
      from: process.env.SMTP_USER,
      to: email,
      replyTo: 'bookings@lanuovaisola.com',
      subject: 'Thank you for contacting La Nuova Isola',
      html: `
        <h2>Thank you for contacting La Nuova Isola</h2>
        <p>Dear ${firstName} ${lastName},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message details:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Best regards,<br>La Nuova Isola Team</p>
        <p><small>If you need immediate assistance, please call us at 0044 1624 623764</small></p>
      `,
    };

    // Send emails
    await transporter.sendMail(restaurantEmail);
    
    // Only send customer email if they didn't request newsletter (to avoid spam)
    if (!newsletter) {
      await transporter.sendMail(customerEmail);
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
