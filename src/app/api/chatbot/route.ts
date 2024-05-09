export async function POST(request: Request) {
  try {
    // const response = await mailchimp.lists.getAllLists();
    // console.log("list", response);

    const { message } = await request.json();

    return Response.json(
      {
        success: true,
        message,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error:", error);
    return Response.json(
      { success: false, message: error },
      {
        status: 500,
      }
    );
  }
}
