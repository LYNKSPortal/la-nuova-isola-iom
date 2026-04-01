# SMTP Configuration Setup Instructions

Create a file named `.env.local` in the root of your project with the following content:

```env
# SMTP Configuration for Stackmail
SMTP_HOST=smtp.stackmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@lanuovaisola.com
SMTP_PASS=your_email_password

# Restaurant Email (where notifications are sent)
RESTAURANT_EMAIL=admin@lanuovaisola.com

# Next.js Configuration
NEXT_PUBLIC_APP_URL=https://your-production-url.vercel.app
```

Steps to create the file:
1. Open your project root directory
2. Create a new file named `.env.local`
3. Copy and paste the content above into the file
4. Save the file
5. Restart your development server

Important Notes:
- The .env.local file is already in .gitignore (correctly protected)
- Never commit this file to version control
- Restart the dev server after creating the file
- The forms will be fully functional after this setup

SMTP Configuration Details:
- Host: smtp.stackmail.com ✅
- Port: 465 (SSL) ✅
- Authentication: Enabled ✅
- Username: [Your email address] ✅
- Password: [Your secure password] ✅
- Encryption: SSL/TLS ✅

After setup:
- Contact form will send emails to admin@lanuovaisola.com
- Reservation form will send emails to admin@lanuovaisola.com
- Customers will receive confirmation emails
- Forms will be fully functional
