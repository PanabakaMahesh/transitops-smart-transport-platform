import app from "./app";
import { env } from "./config/env";

app.listen(env.PORT, () => {
  console.log(`
========================================
🚀 TransitOps Backend Started
🌍 Environment : ${env.NODE_ENV}
📡 Server      : http://localhost:${env.PORT}
========================================
`);
});