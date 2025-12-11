# EmailJS Setup Guide

To complete the email functionality setup, follow these steps:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your email account
5. Note down the **Service ID** (e.g., `service_printolution`)

## 3. Create Email Templates
You need to create TWO templates:

### Template 1: Contact Form
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
You have received a new message from your website contact form.

Name: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Note down the **Template ID** (e.g., `template_contact`)

### Template 2: Career Application
1. Create another new template
2. Use this template content:

**Subject:** New Job Application for {{position_title}} from {{applicant_name}}

**Body:**
```
You have received a new job application from your website.

APPLICANT DETAILS:
Name: {{applicant_name}}
Email: {{applicant_email}}
Phone: {{applicant_phone}}

POSITION APPLIED FOR:
Title: {{position_title}}
Location: {{position_location}}

PORTFOLIO: {{portfolio_url}}
RESUME: {{resume_url}}

COVER LETTER:
{{cover_letter}}

---
This application was submitted through your careers page.
```

3. Note down the **Template ID** (e.g., `template_careers`)

### Template 3: Quote Request
1. Create another new template
2. Use this template content:

**Subject:** New Quote Request from {{client_name}} - {{service_type}}

**Body:**
```
You have received a new quote request from your website.

CLIENT DETAILS:
Name: {{client_name}}
Email: {{client_email}}
Phone: {{client_phone}}
Company: {{company_name}}

PROJECT DETAILS:
Service Type: {{service_type}}
Project Type: {{project_type}}
Quantity: {{quantity}}
Deadline: {{deadline}}
Budget Range: {{budget_range}}

PROJECT DESCRIPTION:
{{project_description}}

REFERENCE WORK LINK: {{reference_link}}

---
This quote request was submitted through your quote page.
```

3. Note down the **Template ID** (e.g., `template_quote`)

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## 5. Update Contact.jsx
Replace these values in `src/pages/Contact.jsx`:
- `serviceId`: Your Service ID
- `templateId`: Your Template ID  
- `publicKey`: Your Public Key

## 6. Test the Form
1. Save all changes
2. Test the contact form on your website
3. Check if emails are received at shreyasvekaria2108@gmail.com

## Current Configuration
- **Recipient Email**: shreyasvekaria2108@gmail.com
- **Service ID**: service_printolution (update this)
- **Contact Template ID**: template_contact (update this)
- **Careers Template ID**: template_careers (update this)
- **Quote Template ID**: template_quote (update this)
- **Public Key**: YOUR_PUBLIC_KEY (update this)

## Files Updated
- `src/pages/Contact.jsx` - Contact form with EmailJS
- `src/pages/Careers.jsx` - Career application form with EmailJS
- `src/pages/Quote.jsx` - Quote request form with EmailJS