import React, { Component, useState } from 'react'
import NewsComponent from './NewsComponent'
// import { Pagination } from './Pagination';
import InfiniteScroll from 'react-infinite-scroll-component';

const Container = ({api_key, category, pageSize, page, onPageChange}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [news, setNews] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() =>{
      setCurrentPage(1);
    }, [category]);
    
    useEffect(() =>{
      fetchData();
    }, [category, currentPage]);

    const getDate = ()=>{
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const year = yesterday.getFullYear();
        const month = String(yesterday.getMonth() + 1).padStart(2, '0');
        const day = String(yesterday.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    const fetchData = () => {
      const date = this.getDate();
      const url = `https://newsapi.org/v2/top-headlines?fromDate=${date}&category=${category}&pageSize=${pageSize}&page=${currentPage}&apiKey=${api_key}`;
      console.log(url);

      fetch(url).then((response) => {
        if(!response.ok){
          throw new Error('Http error! status: ' + response.status);
        }
        return response.json();
        }).then((result)=>{

          setLoading(false);          
          setTotalResults(result.totalResults);  // update total results for pagination
          setNews((prevNews)=>
            [...prevNews, 
              ...(result.articles.filter((article)=>
                article.title?.toLowerCase() !== '[removed]'
            ) || [])
          ]);
        }).catch((error) => {
          setLoading(false);
          setError(error.message);
        }
      );
    }

    const fetchMoreData = () => {
      setCurrentPage(currentPage + 1);
    };
    
    return (
      <div className="container text-center">
        <h2 className="text-center">News Today: {category.charAt(0).toUpperCase()+category.slice(1)}</h2>

        {loading && 'Loading....'}
        {error && `error: ${error}`}
        <InfiniteScroll className="row"
          dataLength={news.length}
          next={fetchMoreData}
          hasMore={news.length < totalResults}
          loader={<h4>Loading...</h4>}>
          
            {news.map((currNews) => {
              return <div className="col-md-4 col-sm-6 mb-4" key={currNews.url}>
                <NewsComponent currNews={currNews}/>
              </div>
            })
          }
        </InfiniteScroll>
      </div>
    )
  }

export default Container
