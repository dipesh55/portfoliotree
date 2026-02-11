https://dipeshbhatta.info.np/# Fix: Gmail 412 Error - Insufficient Authentication Scopes

## Error: "412 Gmail_API: Request had insufficient authentication scopes"

This means your Gmail service in EmailJS doesn't have permission to send emails.

## ✅ SOLUTION: Re-authenticate Gmail Service

### Step-by-Step:

1. **Go to EmailJS Dashboard**
   - Visit: https://dashboard.emailjs.com/admin
   - Log in to your account

2. **Navigate to Email Services**
   - Click on **"Email Services"** in the left sidebar
   - Find your Gmail service (should show service_vm6hauc)

3. **Re-authenticate**
   - Click on your Gmail service to open it
   - Look for a button that says:
     - **"Re-authenticate"** OR
     - **"Connect Account"** OR
     - **"Authorize"**
   - Click it

4. **Grant Permissions**
   - Google will ask for permissions
   - **IMPORTANT:** Make sure to check ALL boxes:
     - ✅ Send email on your behalf
     - ✅ Read and send email
     - ✅ Manage your email
   - Click **"Allow"** or **"Continue"**

5. **Verify**
   - Go back to EmailJS dashboard
   - Check that your service shows as **"Active"** or **"Connected"**
   - The status should be green

6. **Test**
   - Try your contact form again
   - Check your email inbox

## 🔄 Alternative: Use Gmail App Password (More Reliable)

If re-authentication doesn't work, use App Password:

### Step 1: Enable 2-Step Verification
1. Go to: https://myaccount.google.com/security
2. Under "Signing in to Google", enable **2-Step Verification**
3. Follow the setup process

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select:
   - App: **Mail**
   - Device: **Other (Custom name)**
3. Enter name: **EmailJS Portfolio**
4. Click **Generate**
5. **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)
   - Remove spaces when using it

### Step 3: Update EmailJS Service
1. In EmailJS Dashboard → Email Services
2. Click **"Add New Service"** or edit existing
3. Choose **"Gmail"**
4. Instead of OAuth, look for **"SMTP"** or **"App Password"** option
5. Enter:
   - **Email:** dipeshbhatta44@gmail.com
   - **Password:** [paste the 16-character app password]
6. Click **"Create Service"** or **"Save"**
7. **Update your .env file** with the new Service ID if you created a new service

## 🚨 Still Not Working?

### Option 1: Switch to Outlook
1. In EmailJS, create a new Email Service
2. Choose **"Outlook"** or **"Hotmail"**
3. Connect your Outlook account
4. Update `.env` with new Service ID
5. Update your template to use the new service

### Option 2: Check Service Status
1. In EmailJS Dashboard → Email Services
2. Make sure your service shows:
   - ✅ Status: **Active**
   - ✅ Connection: **Connected**
3. If it shows "Disconnected", click to reconnect

## 📝 Quick Checklist

- [ ] Re-authenticated Gmail service in EmailJS
- [ ] Granted all permissions when prompted
- [ ] Service shows as "Active" in EmailJS dashboard
- [ ] Template has recipient email set
- [ ] Tested the contact form
- [ ] Checked email inbox (including spam folder)

## 💡 Pro Tip

If Gmail keeps having issues, **Outlook/Hotmail** is often more reliable with EmailJS and easier to set up.
