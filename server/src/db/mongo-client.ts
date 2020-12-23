import mongoose from "mongoose";

const dbUser = process.env.DB_USER || "adminpassmanager";
const dbPass = process.env.DB_PASS || "changeme76";
const dbName = process.env.DB_NAME || "passmanager";
const host = process.env.MONGO_HOST || "localhost";
const port = process.env.MONGO_PORT || "27017";

const mongoUri =
  process.env.MONGODB_URL ||
  `mongodb://${dbUser}:${dbPass}@${host}:${port}/${dbName}`;

export const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

export async function getConnection() {
  console.log(
    `Trying to connect to ${
      process.env.NODE_ENV === "production"
        ? "MongoDB"
        : mongoUri.replace(dbPass, "***")
    }`
  );
  await mongoose.connect(mongoUri, mongoOptions);
}

export async function closeConnections() {
  await mongoose.disconnect();
}
