import { request } from "https";

const getOptions = (path: string) => {
  return {
    method: "POST",
    hostname: "api.browse.ai",
    port: null,
    path,
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  };
};

export async function scrapeDataFromStore(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const path = `/v2/robots/${process.env.ROBOT_ID}/tasks`;
    const options = getOptions(path);
    const req = request(options, async (res) => {
      const chunks: Buffer[] = [];

      res.on("data", (chunk) => {
        chunks.push(chunk);
      });

      res.on("end", async () => {
        try {
          const body = Buffer.concat(chunks);
          resolve(body.toString());
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on("error", reject);

    req.write(
      JSON.stringify({
        inputParameters: {
          originUrl:
            "https://www.espressozone.com/espresso-machines/semi-automatic-espresso-machines",
        },
      })
    );
    req.end();
  });
}
