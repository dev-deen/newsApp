import React, { Component } from 'react'
import NewsComponent from './NewsComponent'

export class Container extends Component {

  constructor(){
    super();
    this.state = {
      loading: true,
      error: null,
      news: []
    };
  }

    getDate(){
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const year = yesterday.getFullYear();
        const month = String(yesterday.getMonth() + 1).padStart(2, '0');
        const day = String(yesterday.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
     
    componentDidMount() {
        const date = this.getDate();
        const url = `https://newsapi.org/v2/everything?q=Apple&from=${date}&sortBy=popularity&apiKey=43ed82eb8a7c41d59b1bd94de06673f5`;
        fetch(url).then((response) => {
          if(!response.ok){
            throw new Error('Http error! status: ' + response.error);
          }
          return response.json();
         }).then((result)=>{
           this.setState({loading: false, news: result.articles})
           this.state.news.filter((article) => article.title.toLowerCase() !== 'removed');
           console.log(this.state.news);
         }).catch((error) => {
          this.setState({loading: false, error: error.message})
         });
    }
  render() {
    return (
      <div className="container text-center">
        <h2 className="text-center">News Today</h2>
        <div className="row">
          {this.state.loading && 'Loading....'}
          {this.state.error && `error: ${this.state.error}`}
          {!this.state.loading && !this.state.error && 
            this.state.news.map((currNews) => {
              return <div className="col-md-4 col-sm-6 mb-4">
                <NewsComponent currNews={currNews}/>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Container
