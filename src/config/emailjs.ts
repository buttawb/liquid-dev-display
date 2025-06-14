// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_ld02w0h', // Your EmailJS Service ID
  TEMPLATE_ID: 'template_kansxto', // Your EmailJS Template ID
  USER_ID: 'HIT8OySk7dNsbFOB8', // Your EmailJS Public Key
  TO_EMAIL: 'buttawb@gmail.com' // Your email address
};

// Email template parameters structure
export interface EmailTemplateParams {
  to_email: string;
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  reply_to: string;
} 