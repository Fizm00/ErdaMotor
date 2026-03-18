import { siteConfig } from '../data/siteConfig';

/**
 * Generates a WhatsApp link with a pre-filled message.
 * @param message The message to pre-fill in the WhatsApp chat.
 * @returns A string containing the full WhatsApp URL.
 */
export const getWhatsAppLink = (message: string): string => {
  const baseUrl = siteConfig.contact.whatsapp;
  const encodedMessage = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedMessage}`;
};
