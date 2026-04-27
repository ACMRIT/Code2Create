"use server"

import clientPromise from "@/lib/mongodb"

export interface FAQ {
  id: string
  question: string
  answer: string
}

export async function getFAQs(): Promise<FAQ[]> {
  try {
    const client = await clientPromise
    const db = client.db("c2c") 
    // Assuming 'faqs' is the collection name
    const faqs = await db.collection("faqs").find({}).sort({ order: 1 }).toArray()
    
    if (!faqs || faqs.length === 0) {
      return getFallback()
    }
    
    return faqs.map(faq => ({
      id: faq._id.toString(),
      question: faq.question,
      answer: faq.answer,
    }))
  } catch (error) {
    console.error("Error fetching FAQs:", error)
    return getFallback()
  }
}

function getFallback(): FAQ[] {
  return [
    {
      id: "1",
      question: "Who can participate?",
      answer: "All engineering students who are passionate about coding and problem-solving are welcome to participate."
    },
    {
      id: "2",
      question: "What is the allowed team size?",
      answer: "You can form teams of 2-3 members."
    },
    {
      id: "3",
      question: "What programming languages are allowed?",
      answer: "Any programming language is allowed. You are free to choose the stack you are most comfortable with."
    },
    {
      id: "4",
      question: "Will certificates be provided?",
      answer: "Yes, Certificate of Merit will be provided to all participants."
    },
    {
      id: "5",
      question: "Are we allowed to use the internet?",
      answer: "Internet usage and AI tools are restricted during Round 1 (Screening) but are fully allowed during Round 2 (Development)."
    }
  ]
}