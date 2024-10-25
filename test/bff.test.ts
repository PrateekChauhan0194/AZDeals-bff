import request from 'supertest';
import { app } from '../src/server'; // Assuming you export the app from server.ts
import { server } from '../mocks/server'; // Import the MSW server

describe('BFF API Integration Test', () => {
    it('should fetch Australia deals and transform the response correctly', async () => {
        server.use(); // Start the MSW server

        const response = await request(app).get('/getAustraliaDeals');

        // Check the response status and format
        expect(response.status).toBe(200);
        // console.log(response.body);
        expect(response.body).toEqual({
            deals: [
                {
                    deal_title: 'Shark FlexStyle Limited Edition Teal 5-in-1 Hair Styler & Dryer Gift Set, Curling Attachments, Finishing Attachment, Oval Brush, Concentrator, Hair Clip, Storage Bag, No Heat Damage',
                    deal_photo: 'https://m.media-amazon.com/images/I/71a8S7ARpdL.jpg',
                    deal_url: 'https://www.amazon.com.au/Shark-FlexStyle-Attachments-Attachment-Concentrator/dp/B0CKW59L1Y'
                },
                {
                    deal_title: 'FOREO Luna 4 Body Body Brush | Exfoliating Body Scrubber | Enhances Absorption of Lotion Actives | Premium Lymphatic Drainage Skincare Tool | 100% Waterproof | USB-Rechargeable, Evergreen',
                    deal_photo: 'https://m.media-amazon.com/images/I/81R2C9JjEQL.jpg',
                    deal_url: 'https://www.amazon.com.au/FOREO-Exfoliating-Absorption-Waterproof-USB-Rechargeable/dp/B0BGL9PQVL'
                },
                {
                    deal_title: 'Meteor Essential Barbell Set - Entry Level Dumbbell Set Home Gym Dumbbell Weightlifting Weight Plates Dumbbell Barbell',
                    deal_photo: 'https://m.media-amazon.com/images/I/61pFcRthWSL.jpg',
                    deal_url: 'https://www.amazon.com.au/Meteor-Essential-40KG-Barbell-Weightlifting/dp/B0CV3S2CQB'
                }
            ]
        });
    });

    // Add any other tests like error handling, etc.
});