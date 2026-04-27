"use server"

import clientPromise from "@/lib/mongodb"

export async function submitDoubt(formData: FormData) {
  const question = formData.get("question") as string

  if (!question || question.trim().length === 0) {
    return { success: false, error: "Question cannot be empty." }
  }

  try {
    const client = await clientPromise
    const db = client.db("c2c")
    const doubtsCollection = db.collection("doubts")

    await doubtsCollection.insertOne({
      question: question.trim(),
      createdAt: new Date(),
      status: "unanswered", // Track statuses
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to submit doubt:", error)
    return { success: false, error: "Failed to submit. Please try again." }
  }
}
