// Database collection

import mongoose, { Schema, mongo } from "mongoose";

export const HabitsSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.models.habits || mongoose.model("habits", HabitsSchema);
