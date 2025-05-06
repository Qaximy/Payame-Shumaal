// app/api/book-tour/route.js (or .ts for TypeScript)
export async function POST(req) {
    const { date, travelers } = await req.json();
  
    // You can add validation here to check for required fields, etc.
  
    if (!date || !travelers) {
      return new Response(
        JSON.stringify({ message: 'Date and travelers are required.' }),
        { status: 400 }
      );
    }
  
    // Handle booking logic here
    try {
      // Assume booking logic is successful
      return new Response(
        JSON.stringify({ message: 'Booking successful!' }),
        { status: 200 }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ message: 'Booking failed. Please try again.' }),
        { status: 500 }
      );
    }
  }
  