import React from 'react'
import Article from './Article'

const placeholderData = [
  {
    _id: '01234567',
    url: 'https://www.buzzfeed.com/ehisosifo1/youtuber-influencer-halloween-costumes-2019',
    user: {
      _id: '124125215',
      username: 'lincoln.howard'
    },
    articleMetadata: {
      title: "Here's What 21 YouTubers Dressed Up As For Halloween",
      author: 'Ehis Osifo',
      datePublished: {
        month: 9,
        day: 29,
        year: 2019
      }
    },
    userInterpretation: {
      summary: 'A photogallery of celebrities dressed up in costume. Getting people hyped for halloween!',
      tags: ['halloween', 'costumes', 'celebrities']
    },
    shareCount: 132,
    likeCount: 243,
    commentCount: 890
  },
  {
    _id: '01234567',
    url: 'https://www.fuzzfeed.com/test',
    user: {
      _id: '124125215',
      username: 'lincoln.howard'
    },
    articleMetadata: {
      title: "Here's What 21 YouTubers Dressed Up As For Halloween",
      author: 'Ehis Osifo',
      datePublished: {
        month: 9,
        day: 29,
        year: 2019
      }
    },
    userInterpretation: {
      summary: 'A fake summary!',
      tags: ['halloween', 'costumes', 'celebrities']
    },
    shareCount: 101,
    likeCount: 243,
    commentCount: 122
  },
  {
    _id: '01234567',
    url: 'https://www.duzzfeed.com/fake',
    user: {
      _id: '124125215',
      username: 'lincoln.howard'
    },
    articleMetadata: {
      title: "Test Summary",
      author: 'Ehis Osifo',
      datePublished: {
        month: 9,
        day: 29,
        year: 2019
      }
    },
    userInterpretation: {
      summary: 'A photogallery of celebrities dressed up in costume. Getting people hyped for halloween!',
      tags: ['halloween', 'costumes', 'celebrities']
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
        placeholderData.map (article => <Article article={article} />) 
      }
    </>
  )
}

export default ArticleList