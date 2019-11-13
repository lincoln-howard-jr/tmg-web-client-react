import React from 'react'
import Article from './Article'

const placeholderData = [

  {
    _id: '01234567',
    url: 'https://www.thestar.com/news/canada/2019/11/01/why-googles-quantum-computing-milestone-is-a-giant-leap-in-theory.html',
    user: {
      _id: '124125215',
      username: 'sahnun.mohamud'
    },
    articleMetadata: {
      title: "Why Googles Quantum Computing Milestone Is A Giant Leap, In Theory",
      author: 'Mon Doe',
      datePublished: {
        month: 9,
        day: 29,
        year: 2019
      }
    },
    userInterpretation: {
      summary: 'Quantum Computing advancements rocketing forward with Googles QPU!',
      tags: ['quantum', 'computing','cybersecurity','QPU','Google']
    },
    shareCount: 101,
    likeCount: 243,
    commentCount: 122
  }
]

function ArticleList () {
  return (
    <>
      {
        placeholderData.map (article => <Article key={article._id} article={article} />) 
      }
    </>
  )
}

export default ArticleList