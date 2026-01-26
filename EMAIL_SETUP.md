# Email Integration Setup Guide

Your portfolio contact form is now configured to send emails to **cediearlstephenmalvar@gmail.com** using EmailJS.

## Setup Instructions

### Step 1: Create an EmailJS Account
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account (Free plan includes 200 emails/month)

### Step 2: Add Email Service
1. In the EmailJS dashboard, click on **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended):
   - **For Gmail**: Select Gmail and connect your account
   - Grant necessary permissions
4. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Set up your template with these variables:
   ```
   Subject: New Contact from {{from_name}}
   
   You have received a new message from your portfolio:
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. Set the **To Email** field to: `{{to_email}}` or directly to `cediearlstephenmalvar@gmail.com`
5. Save the template and copy the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **Public Key** (e.g., `user_ABCD1234567890`)

### Step 5: Configure Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=user_ABCD1234567890
   ```

### Step 6: Restart Development Server
After updating the `.env` file, restart your development server:
```bash
npm run dev
```

## Testing
1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check your email at cediearlstephenmalvar@gmail.com
4. You should receive the message within seconds

## Troubleshooting

### Emails Not Sending?
- Verify all IDs in `.env` are correct
- Check EmailJS dashboard for usage limits
- Ensure the development server was restarted after updating `.env`
- Check browser console for error messages

### Fallback Feature
If EmailJS fails, the form will automatically open the user's default email client with a pre-filled message.

## Security Notes
- Never commit the `.env` file to version control (add to `.gitignore`)
- The `.env.example` file is safe to commit (contains no real credentials)
- EmailJS Public Key is safe to expose in client-side code

## Free Plan Limits
- 200 emails per month
- 2 email services
- Upgrade to paid plan if you need more

---

**Your email integration is ready! Just add your EmailJS credentials to the `.env` file and you're all set! 🚀**
