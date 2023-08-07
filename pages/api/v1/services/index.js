import { connectDb } from "@/configs/dbConnect";
import Service from "@/models/service.model";
import { serviceResponse } from "@/utils/objectMassager";

export default async function handler(req, res) {

  try {
    await connectDb();
    // get services
    let queryObj = {};
    if (req.method === "GET") {
      queryObj = req.query.availability ? { availability: req.query.availability } : {};

      const services = await Service.find(queryObj);
      if (!services) return res.status(404).json({
        error: 'Services not found'
      });

      // send the services to the client
      res.status(200).json(serviceResponse(services));
    } else {
      res.status(404).json({
        message: "Service not found"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}