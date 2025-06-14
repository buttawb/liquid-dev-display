# Contact Form Testing Guide

## 🧪 How to Test Your Contact Form

Your contact form is now set up with:
- ✅ **Main Email**: Sends to `buttawb@gmail.com` with all form details
- ✅ **Auto-Reply**: Sends to the user who filled the form

## 📧 Test Scenarios

### Test 1: Basic Form Submission
**What to test:**
- Fill out all fields correctly
- Submit the form
- Check both emails

**Test Data:**
```
Name: Test User
Email: your-test-email@gmail.com (use your own email to test)
Subject: Portfolio Website Test
Message: Hi Abdul, this is a test message from your portfolio website. I'm interested in discussing a potential project with you.
```

**Expected Results:**
1. **You receive** (at `buttawb@gmail.com`):
   ```
   Subject: New Contact Form Message from Test User
   
   You have received a new message from your website contact form:
   
   Name: Test User
   Email: your-test-email@gmail.com
   Subject: Portfolio Website Test
   
   Message:
   Hi Abdul, this is a test message from your portfolio website...
   ```

2. **User receives** (auto-reply):
   ```
   Subject: Thank you for contacting Abdul Wahab Butt
   
   Hi Test User,
   
   Thank you for reaching out to me! I have received your request: "Portfolio Website Test", and we'll do our best to process it within 3 business days.
   
   Best regards,
   Abdul Wahab Butt
   ```

### Test 2: Different Email Addresses
**Test with:**
- Gmail addresses
- Outlook/Hotmail addresses
- Company email addresses
- Different domains

### Test 3: Various Message Types
**Test messages:**
- Short messages: "Hi, interested in working together"
- Long messages: Detailed project descriptions
- Messages with special characters: "Hi! I'm interested in your React work 😊"
- Messages with links: "Check out my project at https://example.com"

### Test 4: Form Validation
**Test edge cases:**
- Empty fields (should show validation errors)
- Invalid email format
- Very long messages
- Special characters in name/subject

## 🔍 What to Check

### In Your Email (`buttawb@gmail.com`):
- ✅ All form fields are included
- ✅ Email is properly formatted
- ✅ Reply-to is set to user's email
- ✅ Subject line is clear

### In Auto-Reply (User's Email):
- ✅ User's name appears correctly
- ✅ Subject line from form appears
- ✅ Professional tone
- ✅ Your signature is correct

### In EmailJS Dashboard:
- ✅ Email count increases
- ✅ No errors in logs
- ✅ Both templates are being used

## 🚨 Common Issues to Watch For

1. **Auto-reply not sending**: Check template variables
2. **Missing form data**: Verify template parameters
3. **Spam folder**: Check both inboxes
4. **Email delays**: Allow 1-2 minutes for delivery

## 📝 Test Checklist

- [ ] Fill form with test data
- [ ] Submit form successfully
- [ ] Check your email (`buttawb@gmail.com`)
- [ ] Check test user email (auto-reply)
- [ ] Verify all data is correct
- [ ] Test reply functionality
- [ ] Check EmailJS dashboard
- [ ] Test with different email providers

## 🎯 Ready to Test?

1. **Start your dev server**: `npm run dev`
2. **Go to your contact form**
3. **Use the test data above**
4. **Check both email addresses**

Your form should now send emails to both you and the user! 🎉 