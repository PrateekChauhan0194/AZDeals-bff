import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv"; // To load .env variables
dotenv.config();

// Create an express application
const app = express();

// Define the API endpoint
app.get("/getAustraliaDeals", async (req, res) => {
  const domainApiUrl = "http://localhost:4444/getDeals/AU";
  try {
    const response = await fetch(domainApiUrl);
    if (response.ok) {
      const domainData = await response.json();
      const deals = domainData.data.deals.map((deal: any) => ({
        deal_title: deal.deal_title,
        deal_photo: deal.deal_photo,
        deal_url: deal.deal_url,
      }));
      res.json({ deals });
    } else {
      res
        .status(response.status)
        .json({ error: `Domain API error: ${response.statusText}` });
    }
  } catch (error) {
    console.error("Error fetching Australia deals:", error);
    res.status(500).json({ error: "Failed to fetch Australia deals" });
  }
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`AZDeals-bff server is running on port ${PORT}`);
});

// Export both `app` and `server`
export { app, server };