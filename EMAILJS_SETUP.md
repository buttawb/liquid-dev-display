# EmailJS Setup Guide

## 🚀 How to Set Up EmailJS for Your Contact Form

Your contact form is now configured to send emails to `buttawb@gmail.com` using EmailJS. Here's how to complete the setup:

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or your preferred email provider
4. Connect your Gmail account (`buttawb@gmail.com`)
5. Note down the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Email Body:**
```
You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your User ID
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (this is your User ID)

### Step 5: Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Your actual Service ID
  TEMPLATE_ID: 'template_xyz789', // Your actual Template ID
  USER_ID: 'user_public_key_here', // Your actual Public Key
  TO_EMAIL: 'buttawb@gmail.com'
};
```

### Step 6: Test Your Form
1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out the form and submit
4. Check your email at `buttawb@gmail.com`

## 📧 What Happens When Someone Submits the Form

1. **Form Validation**: All required fields are validated
2. **Loading State**: Button shows "Sending..." and becomes disabled
3. **Email Sending**: EmailJS sends the message to your Gmail
4. **Success**: User sees "Message sent successfully!" toast
5. **Form Reset**: Form fields are cleared for next use
6. **Error Handling**: If something goes wrong, user gets error message

## 💰 Cost Information

- **Free Tier**: 200 emails per month
- **Paid Plans**: Start at $15/month for 1,000 emails
- **No credit card required** for free tier

## 🔧 Troubleshooting

### Common Issues:
1. **"Failed to send message"**: Check your EmailJS credentials
2. **Emails not received**: Check spam folder and EmailJS dashboard
3. **CORS errors**: Make sure you're using the correct User ID

### Testing:
- Use EmailJS dashboard to see if emails are being sent
- Check your Gmail inbox and spam folder
- Test with different email addresses

## 🎯 Next Steps

1. Complete the EmailJS setup above
2. Test the form thoroughly
3. Consider adding spam protection (reCAPTCHA) if needed
4. Monitor your email usage in EmailJS dashboard

Your contact form will now actually send emails to `buttawb@gmail.com` when someone fills it out! 🎉 