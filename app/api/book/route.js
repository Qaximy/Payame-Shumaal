// app/api/book/route.js
export async function POST(request) {
    const data = await request.json()
  
    // You can log or store this data in a database here
    console.log('Booking Data Received:', data)
  
    return Response.json({
      success: true,
      message: 'Booking received successfully!',
      data,
    })
  }
  