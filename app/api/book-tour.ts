// /pages/api/book-tour.ts
import { NextApiRequest, NextApiResponse } from 'next'  // Importing the necessary types

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body  // Yeh form ka data hai jo frontend se aaya
    console.log('Booking received:', data)  // Yeh data console par dekhne ke liye

    // Yahan aap data ko apne database mein save kar sakti hain
    // Agar aap MongoDB use kar rahi hain, toh aap yeh data MongoDB mein save kar sakti hain
    // Example:
    // const result = await db.collection('bookings').insertOne(data)

    // Example ke liye hum sirf success message bhej rahe hain
    res.status(200).json({ message: 'Booking saved!' })
  } else {
    // Agar request GET ya kuch aur ho
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
