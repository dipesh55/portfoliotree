# Fix: "Gmail_API: Request had insufficient authentication scopes" Error

This error occurs when your Gmail service in EmailJS doesn't have the correct permissions to send emails.

## Solution 1: Re-authenticate Gmail Service (Recommended)

1. Go to EmailJS Dashboard: https://dashboard.emailjs.com/
2. Navigate to **Email Services**
3. Find your Gmail service (service_vm6hauc)
4. Click on it to edit
5. Click **"Re-authenticate"** or **"Connect Account"** button
6. Grant all requested permissions when prompted
7. Make sure to allow:
   - Send email on your behalf
   - Read and send email
   - Full Gmail access (if prompted)
8. Save the service

## Solution 2: Use Gmail App Password (More Reliable)

If OAuth keeps having issues, use Gmail App Password:

1. **Enable 2-Step Verification** on your Google account (if not already enabled)
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter name: "EmailJS Portfolio"
   - Click "Generate"
   - Copy the 16-character password (no spaces)

3. **Update EmailJS Service:**
   - Go to EmailJS Dashboard → Email Services
   - Edit your Gmail service
   - Instead of OAuth, choose "SMTP" or "App Password" option
   - Enter:
     - Email: dipeshbhatta44@gmail.com
     - Password: [the 16-character app password you generated]
   - Save

## Solution 3: Switch to a Different Email Service

If Gmail continues to have issues, you can use:

1. **Outlook/Hotmail** - Often more reliable with EmailJS
2. **SendGrid** - Professional email service
3. **Mailgun** - Another reliable option

To switch:
1. In EmailJS, create a new Email Service
2. Choose your preferred provider
3. Follow their setup instructions
4. Update your `.env` file with the new Service ID
5. Update your template to use the new service

## Quick Test After Fixing:

1. Make sure the service is **Active** in EmailJS
2. Test the contact form
3. Check your email inbox
4. Check browser console (F12) for any errors

## Most Common Fix:

**Re-authenticate your Gmail service** - This usually resolves the scopes issue. Make sure to grant ALL permissions when Google asks.
