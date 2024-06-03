import axios from 'axios';
import { request } from 'https';

const getOptions = (path: string) => {
  return {
    method: 'POST',
    hostname: 'api.browse.ai',
    port: null,
    path,
    headers: {
      Authorization: `Bearer ${process.env.BROWSEAI_API_KEY}`,
    },
  };
};

export async function getScrapedProductData(product_desc: string) {
  const taskId = await scrapeProductDataFromStore(product_desc);
  const scrapedProductData = await pollRobotTaskRetrieval(taskId);
  return scrapedProductData;
}

export async function scrapeProductDataFromStore(
  product: string
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const path = `/v2/robots/${process.env.AMAZON_ROBOT_ID}/tasks`;
    const options = getOptions(path);
    const req = request(options, async (res) => {
      const chunks: Buffer[] = [];

      res.on('data', (chunk) => {
        chunks.push(chunk);
      });

      res.on('end', async () => {
        try {
          const body = Buffer.concat(chunks);
          resolve(JSON.parse(body.toString())?.result.id);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);

    req.write(
      JSON.stringify({
        inputParameters: {
          amazon_url: `${process.env.AMAZON_URL}${product}`,
          max_products: process.env.MAX_PRODUCTS,
        },
      })
    );
    req.end();
  });
}

export async function pollRobotTaskRetrieval(taskId: string) {
  let status: string | undefined;
  let scrapedProductData: any;
  async function retrieveRobotTask() {
    try {
      const response = await axios.get(
        `https://api.browse.ai/v2/robots/${process.env.AMAZON_ROBOT_ID}/tasks/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.BROWSEAI_API_KEY}`,
          },
        }
      );
      status = response?.data?.result.status;
      scrapedProductData = response?.data?.result?.capturedLists?.Products;
    } catch (error) {
      console.error('error', error);
    }
  }
  await retrieveRobotTask(); // Make an initial request immediately

  while (status !== 'successful') {
    await retrieveRobotTask();
    await new Promise((resolve) => setTimeout(resolve, 15000));
  }

  return scrapedProductData;
}
