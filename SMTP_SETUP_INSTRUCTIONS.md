# SMTP Configuration Instructions

Create a file named `.env.local` in the root of your project with the following content:

```env
# SMTP Configuration for Stackmail
SMTP_HOST=smtp.stackmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-email-password

# Restaurant Email (where notifications are sent)
RESTAURANT_EMAIL=info@lanuovaisola.im

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

Replace:
- `your-email@yourdomain.com` with your actual Stackmail email address
- `your-email-password` with your Stackmail email password
- `info@lanuovaisola.im` with the email where you want to receive notifications

Important: 
- The .env.local file should be added to .gitignore (it already is)
- Never commit your .env.local file to version control
- Restart the dev server after creating the .env.local file
