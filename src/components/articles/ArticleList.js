import React from 'react'

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
    shareCount: 101,
    likeCount: 243,
    commentCount: 122
  }
]

function ArticleList () {
  return (
    <>
      {
        placeholderData.map (article => (
          <div>
            <h3>{article.articleMetadata.title}</h3>
            <h4>By {article.articleMetadata.author}</h4>
            <h6>Published on {article.articleMetadata.datePublished.month + 1}/{article.articleMetadata.datePublished.day}/{article.articleMetadata.datePublished.year}</h6>
            <hr />
            <h6>Shared by {article.user.username}</h6>
            <p><b>Summary:</b> {article.userInterpretation.summary}</p>
            <p><b>Tags:</b> {article.userInterpretation.tags.join (', ')}</p>
          </div>
        ))
      }
    </>
  )
}

export default ArticleList