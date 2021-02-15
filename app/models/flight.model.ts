import mongoose from 'mongoose';

const { Schema } = mongoose;

const flightSchema = new Schema(
  {
    flightCode: { type: String, minLength: 3 },
    flightProvider: { type: String, required: true },
    sourcePortName: { type: String, required: true },
    sourcePortCode: { type: String, minLength: 3 },
    destinationPortName: { type: String, required: true },
    destinationPortCode: { type: String, minLength: 3 },
    scheduledArrival: { type: Date, required: true },
    scheduledDeparture: { type: Date, required: true },
    terminal: { type: String }, // might not be pre-set
    status: {
      type: String,
      default: "SCHEDULED",
      enum: ['SCHEDULED', 'BOARDING', 'ON SCHEDULE', 'LANDED', 'DELAYED'],
      index: true,
    },
  },
  { timestamps: true },
);

const Flight = mongoose.model('Flight', flightSchema);

export default Flight;
