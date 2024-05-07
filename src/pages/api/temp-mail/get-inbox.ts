import { NextApiRequest, NextApiResponse } from 'next';
import rateLimitMiddleware from './rate-limiter';
import axios from 'axios';
import { csrf } from '@/lib/csrf';

const CONVERTER_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_FILE_CONVERTER_API : 'http://localhost:3000';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });

  const { token } = req.query;
  try {
    const inbox = await axios.get(`${CONVERTER_URL}/api/temp-mail/messages/${token}`);

    return res.status(200).json(inbox.data);
  } catch (err) {
    const error = err as Error;
    if (error.message.includes('404')) {
      return res.status(404).json({
        message: error.message,
      });
    }
    return res.status(500).json({
      message: error.message,
    });
  }
}

export default csrf(rateLimitMiddleware(handler, 'get-inbox', 20));
