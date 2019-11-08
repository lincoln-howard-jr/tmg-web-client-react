import React from 'react'
import Article from './Article'

const placeholderData = [
  {
    _id: '01234567',
    url: 'https://www.weforum.org/agenda/2019/10/quantum-computers-next-frontier-classical-google-ibm-nasa-supremacy/',
    user: {
      _id: '124125215',
      username: 'lincoln.howard'
    },
    articleMetadata: {
      title: "Quantum Leap: why the next wave of computers will change the world ",
      author: 'Hon Doe',
      datePublished: {
        month: 9,
        day: 29,
        year: 2019
      }
    },
    userInterpretation: {
      summary: 'Quantum computing will change the world',
      tags: ['cybersecurity', 'hackers','quantum','physics']
    },
    shareCount: 132,
    likeCount: 243,
    commentCount: 890
  },
  {
    _id: '01234567',
    url: 'https://www.forbes.com/sites/waynerash/2019/10/31/quantum-computing-poses-an-existential-security-threat-but-not-today/#51dc53795939',
    user: {
      _id: '124125215',
      username: 'alan.vann'
    },
    articleMetadata: {
      title: "Quantum Computing Poses an Existential Threat, But Not Today",
      author: 'Van Doe',
      datePublished: {
        month: 9,
        day: 29,
        year: 2019
      }
    },
    userInterpretation: {
      summary: 'Quantum computing threat',
      tags: ['cybersecurity', 'hackers','quantum','physics']
    },
    shareCount: 101,
    likeCount: 243,
    commentCount: 122
  },
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