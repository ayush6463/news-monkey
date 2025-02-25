import React, { useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


const NewsComponent=(props)=> {

    const [articles,setArticles]= useState([])
    // const [loading,setloading]= useState(false )
    const [ page,setPage]= useState(1)


    // articles =
    //     [
    //         {
    //             "source": {
    //                 "id": "news-com-au",
    //                 "name": "News.com.au"
    //             },
    //             "author": "Andrew McMurtry",
    //             "title": "Ex-Test star dies suddenly aged 52",
    //             "description": "The Indian cricket community has been left in shock after the death of former Test cricketer David Johnson at the age of 52.",
    //             "url": "https://www.news.com.au/sport/cricket/deeply-saddened-former-indian-test-player-david-johnson-dead-at-52/news-story/2f5a8340a062857c8cabca6c0f2d91ba",
    //             "urlToImage": "https://content.api.news/v3/images/bin/e43934f8c809a22c530227c7dce2a141",
    //             "publishedAt": "2024-06-21T09:38:00Z",
    //             "content": "The Indian cricket community has been left in shock after the death of former Test cricketer David Johnson at the age of 52.\r\nJohnson had been battling health issues and alcohol addiction over the pa… [+3287 chars]"
    //         },
    //         {
    //             "source": {
    //                 "id": "espn-cric-info",
    //                 "name": "ESPN Cric Info"
    //             },
    //             "author": null,
    //             "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //             "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //             "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //             "publishedAt": "2020-04-27T11:41:47Z",
    //             "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //         },
    //         {
    //             "source": {
    //                 "id": "espn-cric-info",
    //                 "name": "ESPN Cric Info"
    //             },
    //             "author": null,
    //             "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //             "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //             "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //             "publishedAt": "2020-03-30T15:26:05Z",
    //             "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //         }
    //     ]

  

const updateNews= async ()=>{
const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=41d8b6c094c74af1858fe8684940978d&pageSize=8`

let data= await fetch(url)
let parsed_data= await data.json()
setArticles(parsed_data.articles)
}

useEffect(()=>{
updateNews();
}, [])

   

   const handlePrevclick=async ()=>{
        // let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=41d8b6c094c74af1858fe8684940978d&page=${setPage(page-1)}&pageSize=8`
        // let data= await fetch(url)
        // let parsed_data= await data.json()
        setPage(page-1)
        updateNews()
        // setArticles(parsed_data.articles)
       
      
    }

   const handleNextclick= async()=>{
        // let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=41d8b6c094c74af1858fe8684940978d&page=${setPage(page-1)}&pageSize=8`
        // let data= await fetch(url)
        // let parsed_data= await data.json()
        // setArticles(parsed_data.articles)
        setPage(page+1)
        updateNews()
        
        
       
       
    }

    


        return (
            <>
              <div className="text-center"  style={{marginTop:'100'}}>
              <h1 >Today's Top Headlines</h1>
              </div>
             
              
                <div className="container">
             
                {articles.map((element)=>{
                        console.log(element)
                        
                        return <div   key={element.url}>
                        <NewsItem  title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} />
                        </div>
                    })}
                </div>
               
                


  
                
               
                <div class="d-flex justify-content-between">
                <button disabled={props.page<=1} type="button" class="btn btn-dark" onClick={handlePrevclick}>Prev</button>
                <button type="button" class="btn btn-dark" onClick={handleNextclick}>Next</button>
                </div>
              
             
               

            </>

        )
    }


NewsComponent.defaultProps={
    country:'in',
    
    category:"sports"
    
    }
    NewsComponent.propTypes={
    country: PropTypes.string,
    
    category:PropTypes.string,
    }
    export default NewsComponent
