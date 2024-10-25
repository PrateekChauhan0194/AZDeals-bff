import { HttpResponse, http } from 'msw';

export const handlers = [
    http.get('http://localhost:4444/getDeals/AU', () => {
        return HttpResponse.json({
            "status": "OK",
            "request_id": "eb12fe4a-3e8d-4987-b57b-ef4e67a3f4c7",
            "parameters": {
                "country": "AU",
                "min_product_star_rating": "4",
                "price_range": "ALL",
                "discount_range": "ALL"
            },
            "data": {
                "deals": [
                    {
                        "deal_id": "f43361da",
                        "deal_type": "BEST_DEAL",
                        "deal_title": "Shark FlexStyle Limited Edition Teal 5-in-1 Hair Styler & Dryer Gift Set, Curling Attachments, Finishing Attachment, Oval Brush, Concentrator, Hair Clip, Storage Bag, No Heat Damage",
                        "deal_photo": "https://m.media-amazon.com/images/I/71a8S7ARpdL.jpg",
                        "deal_state": "AVAILABLE",
                        "deal_url": "https://www.amazon.com.au/Shark-FlexStyle-Attachments-Attachment-Concentrator/dp/B0CKW59L1Y",
                        "canonical_deal_url": "https://www.amazon.com.au/deal/f43361da",
                        "deal_starts_at": "2024-09-04T22:00:00.000Z",
                        "deal_ends_at": "2024-09-17T21:55:00.000Z",
                        "deal_badge": "39% off",
                        "type": "SINGLE_ITEM",
                        "product_asin": "B0CKW59L1Y"
                    },
                    {
                        "deal_id": "64c4d7f2",
                        "deal_type": "BEST_DEAL",
                        "deal_title": "FOREO Luna 4 Body Body Brush | Exfoliating Body Scrubber | Enhances Absorption of Lotion Actives | Premium Lymphatic Drainage Skincare Tool | 100% Waterproof | USB-Rechargeable, Evergreen",
                        "deal_photo": "https://m.media-amazon.com/images/I/81R2C9JjEQL.jpg",
                        "deal_state": "AVAILABLE",
                        "deal_url": "https://www.amazon.com.au/FOREO-Exfoliating-Absorption-Waterproof-USB-Rechargeable/dp/B0BGL9PQVL",
                        "canonical_deal_url": "https://www.amazon.com.au/deal/64c4d7f2",
                        "deal_starts_at": "2024-09-08T14:00:00.000Z",
                        "deal_ends_at": "2024-09-15T13:55:00.000Z",
                        "deal_badge": "44% off",
                        "type": "SINGLE_ITEM",
                        "product_asin": "B0BGL9PQVL"
                    },
                    {
                        "deal_id": "84f28e11",
                        "deal_type": "BEST_DEAL",
                        "deal_title": "Meteor Essential Barbell Set - Entry Level Dumbbell Set Home Gym Dumbbell Weightlifting Weight Plates Dumbbell Barbell",
                        "deal_photo": "https://m.media-amazon.com/images/I/61pFcRthWSL.jpg",
                        "deal_state": "AVAILABLE",
                        "deal_url": "https://www.amazon.com.au/Meteor-Essential-40KG-Barbell-Weightlifting/dp/B0CV3S2CQB",
                        "canonical_deal_url": "https://www.amazon.com.au/deal/84f28e11",
                        "deal_starts_at": "2024-09-08T14:00:00.000Z",
                        "deal_ends_at": "2024-09-15T13:45:00.000Z",
                        "deal_badge": "Limited time deal",
                        "type": "SINGLE_ITEM",
                        "product_asin": "B0CV3S2CQB"
                    }
                ],
                "total_deals": 3,
                "country": "AU",
                "domain": "www.amazon.com.au"
            }
        });
    }),
];