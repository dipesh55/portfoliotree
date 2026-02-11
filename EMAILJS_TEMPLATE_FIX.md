# Fix: "The recipients address is empty" Error

This error occurs when EmailJS template doesn't have a recipient email configured. Here are two ways to fix it:

## Method 1: Set Recipient in Template Settings (Recommended)

1. Go to EmailJS Dashboard: https://dashboard.emailjs.com/
2. Navigate to **Email Templates**
3. Click on your template (template_q3xpyzh)
4. In the template editor, look for the **"To Email"** field (usually at the top)
5. Enter your email address: `dipeshbhatta44@gmail.com`
6. **Save** the template

## Method 2: Use Template Variable (Alternative)

If your EmailJS service supports dynamic recipients:

1. In the template editor, set **"To Email"** field to: `{{to_email}}`
2. The code will automatically send your email address via the `to_email` parameter

## Verify Your Template Structure

Your template should look like this:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}
Reply-To: {{reply_to}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

**Template Variables Used:**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email
- `{{to_email}}` - Your email (if using dynamic recipient)

## Important Notes:

- The **"To Email"** field in EmailJS template settings is MANDATORY
- You can either:
  - Set it to a static email: `dipeshbhatta44@gmail.com` (Method 1)
  - OR set it to `{{to_email}}` and pass it as a parameter (Method 2)
- Make sure the template is **saved** and **published**

## Test After Fixing:

1. Restart your dev server if needed
2. Fill out the contact form
3. Submit and check your email inbox
4. Check browser console (F12) for any errors
