import { NextRequest, NextResponse } from 'next/server';
import transporter from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact administrator.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    
    const {
      name,
      email,
      phone,
      date,
      time,
      guests,
      flexible,
      specialRequests
    } = body;

    // Validate required fields
    if (!name || !email || !date || !time || !guests) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to restaurant (both bookings and admin)
    const restaurantEmail = {
      from: process.env.SMTP_USER,
      to: ['bookings@lanuovaisola.com', 'admin@lanuovaisola.com'],
      replyTo: email, // Customer's email for easy replies
      subject: `New Reservation Request - ${date} at ${time}`,
      html: `
        <h2>New Reservation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Flexible Booking:</strong> ${flexible || 'No'}</p>
        <p><strong>Special Requests:</strong> ${specialRequests || 'None'}</p>
        <hr>
        <p><small>Sent from La Nuova Isola website reservation form</small></p>
        <p><em><strong>Note:</strong> You can reply directly to this email to contact the customer.</em></p>
      `,
    };

    // Confirmation email to customer
    const customerEmail = {
      from: process.env.SMTP_USER,
      to: email,
      replyTo: 'bookings@lanuovaisola.com',
      subject: 'Reservation Request Received - La Nuova Isola',
      html: `
        <h2>Reservation Request Received</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your reservation request at La Nuova Isola. We have received the following details:</p>
        
        <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-left: 4px solid #7A2325;">
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Number of Guests:</strong> ${guests}</p>
          <p><strong>Flexible Booking:</strong> ${flexible || 'No'}</p>
          <p><strong>Special Requests:</strong> ${specialRequests || 'None'}</p>
        </div>
        
        <p><strong>This has been received but not confirmed.</strong> Peter will be in touch by WhatsApp to confirm the booking.</p>
        
        <p>If you need to make any changes or have questions, please call us at 0044 1624 623764.</p>
        
        <hr>
        <p>Best regards,<br>La Nuova Isola Team</p>
        <p><small>For parties of 8 or more, please call us directly for special arrangements.</small></p>
      `,
    };

    // Send emails
    await transporter.sendMail(restaurantEmail);
    await transporter.sendMail(customerEmail);

    return NextResponse.json(
      { success: true, message: 'Reservation request sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Reservation email error:', error);
    return NextResponse.json(
      { error: 'Failed to send reservation request' },
      { status: 500 }
    );
  }
}
