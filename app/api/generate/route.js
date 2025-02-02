import clientPromise from "@/lib/mongodb"





export async function POST(request) {
    const body  = await request.json()
    const client = await clientPromise;
    const db = client.db("linktrees")
    const collection = db.collection("links")

    const result = await collection.insertOnce(body)



    console.log(body)
    return Response.json({ success:true, error:false, message: 'Added' ,result:result })
  }