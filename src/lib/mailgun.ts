import Mailgun from 'mailgun.js';
import formData from 'form-data';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.MAILGUN_API_KEY;

if (!apiKey) {
    throw new Error('Missing environment variable for MAILGUN_API_KEY');
}

const mg = new Mailgun(formData);

/**
 * Create an instance of Mailgun
 * @warn This file will error when imported and running in dev (Vite issue)
 */
export const mailgun = mg.client({
    username: 'api',
    key: apiKey,
});
