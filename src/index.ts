import { config } from "./config";
import { app } from "./lib/createServer";
import { logger } from "./lib/logger";

app.listen(config.PORT, () => {
  logger.info(`API running on ${config.PORT}`);
});
