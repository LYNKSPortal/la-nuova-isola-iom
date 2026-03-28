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
      date,
      time,
      guests,
      occasion,
      specialRequests
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !date || !time || !guests) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to restaurant
    const restaurantEmail = {
      from: process.env.SMTP_USER,
      to: process.env.RESTAURANT_EMAIL || 'info@lanuovaisola.im',
      subject: `New Reservation Request - ${date} at ${time}`,
      html: `
        <h2>New Reservation Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Occasion:</strong> ${occasion || 'Not specified'}</p>
        <p><strong>Special Requests:</strong> ${specialRequests || 'None'}</p>
        <hr>
        <p><small>Sent from La Nuova Isola website reservation form</small></p>
      `,
    };

    // Confirmation email to customer
    const customerEmail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Reservation Request Received - La Nuova Isola',
      html: `
        <h2>Reservation Request Received</h2>
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for your reservation request at La Nuova Isola. We have received the following details:</p>
        
        <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-left: 4px solid #7A2325;">
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Number of Guests:</strong> ${guests}</p>
          <p><strong>Occasion:</strong> ${occasion || 'Not specified'}</p>
          <p><strong>Special Requests:</strong> ${specialRequests || 'None'}</p>
        </div>
        
        <p>We will confirm your reservation shortly. Please note that reservations are held for 15 minutes past the scheduled time.</p>
        
        <p>If you need to make any changes or have questions, please call us at (555) 123-4567.</p>
        
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
