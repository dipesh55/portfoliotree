# EmailJS Setup Guide

To enable the contact form to send emails directly to your inbox, you need to set up EmailJS (free service).

## Steps:

1. **Create an EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (200 emails/month free)

2. **Add Email Service**
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Copy your **Service ID**

3. **Create Email Template**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - **IMPORTANT:** In the template settings, set the "To Email" field to YOUR email address (e.g., dipeshbhatta44@gmail.com)
   - Use this template structure:
     ```
     Subject: New Contact Form Message from {{from_name}}
     
     Message:
     {{message}}
     
     ---
     Contact Details:
     Name: {{from_name}}
     Email: {{from_email}}
     Reply-To: {{reply_to}}
     ```
   - **Template Variables to use:**
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{reply_to}}` - Reply-to email (same as from_email)
     - `{{user_email}}` - Your email (optional, for reference)
     - `{{to_name}}` - Your name (optional)
   - Save the template and copy your **Template ID**

4. **Get Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Configure Environment Variables**
   - Create a `.env` file in the root of your project (if it doesn't exist)
   - Add these variables:
     ```
     VITE_EMAILJS_SERVICE_ID=service_vm6hauc
     VITE_EMAILJS_TEMPLATE_ID=template_q3xpyzh
     VITE_EMAILJS_PUBLIC_KEY=VYRAmNGe3b8tEAHDl
     ```
   - Replace the values with your actual IDs from EmailJS
   - **Important:** Add `.env` to your `.gitignore` file to keep your keys private

6. **Restart Development Server**
   - Stop your current dev server (Ctrl+C)
   - Run `npm run dev` again to load the new environment variables

## Alternative: Direct Configuration

If you prefer not to use environment variables, you can directly edit `src/components/Contact.jsx` and replace:
- `'your_service_id'` with your actual Service ID
- `'your_template_id'` with your actual Template ID
- `'your_public_key'` with your actual Public Key

**Note:** This method is less secure as your keys will be visible in the code.

## Testing

After setup, test the contact form:
1. Fill out the form
2. Click "Send Message"
3. Check your email inbox for the message

If EmailJS is not configured, the form will fall back to opening your email client.
