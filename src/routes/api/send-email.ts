import { mailgun } from '$lib/mailgun';
import dotenv from 'dotenv';

dotenv.config();

export const domain = process.env.MAILGUN_DOMAIN;

if (!domain) {
    throw new Error('Missing environment variables for MAILGUN_API_DOMAIN');
}

interface Data {
    [x: string]: unknown;
}

interface EmailResponse {
    message?: string;
    error?: string;
}

/**
 * Send an email using the Mailgun client
 * @warn This file will error when imported and running in dev (Vite issue)
 */
export async function handle(data: Data): Promise<EmailResponse> {
    const fallbackEmail = 'hello@sveltekit-starter.com';

    const to = process.env.SEND_EMAILS_TO || fallbackEmail;
    const from = process.env.SEND_EMAILS_FROM || fallbackEmail;
    const subject = 'Test Email';

    console.log({ data });

    const html = `
        <h1>This is a test email</h1>
  `;

    try {
        const res = await mailgun.messages.create(domain, {
            to,
            from,
            subject,
            html,
        });

        if (res) {
            return {
                message: 'Email processed for sending',
            }
        } else {
            throw new Error;
        }
    } catch (err) {
        console.log(err);
        return {
            error: 'Failed to send email',
        }
    }
};
