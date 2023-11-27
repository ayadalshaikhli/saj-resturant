import bcrypt from "bcrypt";
import { Schema, model, models } from "mongoose";
import next from "next";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
    },
    address: {
      type: String,
      trim: true,
    },
    loyaltyPoints: {
      type: Number,
      default: 0,
    },
    favoriteCuisine: {
      type: String,
      trim: true,
    },
    dietaryRestrictions: {
      type: String,
      trim: true,
    },
    reservationHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reservation",
      },
    ],
    lastVisit: {
      type: Date,
    },
    subscribedToNewsletter: {
      type: Boolean,
      default: false,
    },
    feedback: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", function (user) {
  const notHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPassword, salt);
});

export const User = models?.User || model("User", UserSchema);
