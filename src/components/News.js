import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

    constructor(){
        super();
        console.log("hello this is constructor from news comp");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

   async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8df3962a2597424284deb7aa7adf3c14&pageSize=${this.props.page}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles , totalResults: parsedData.totalResults});
    }

  handlePrevClick = async ()=>{

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8df3962a2597424284deb7aa7adf3c14&page=${this.state.page-1}&pageSize=${this.props.page}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading : false
    })
    

  }

  handleNextClick = async ()=>{
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.page))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8df3962a2597424284deb7aa7adf3c14&page=${this.state.page+1}&pageSize=${this.props.page}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
  
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }

  render() {
    return (
      <>
        <div className='container my-5' id="news">
            <h1 className='text-center'>Quick News</h1>

            {this.state.loading && <Spinner/>}
            { 
              !this.state.loading &&
              <div className='row'>
                {this.state.articles.map( (element)=>{
                    return  <div className='col-md-4 my-5' key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202009/news_flash_1_1200x768_1200x768_0_1200x768.jpeg?KEkY9ojiY0aCaCS7RwPFCdgIJwPn7KSh&size=770:433"} newsUrl={element.url}/>
                            </div>
                })}
            </div>
            }
            

        </div>
        { !this.state.loading &&
          <div className="container d-flex justify-content-between">
            <button type="button" disabled = {this.state.page <= 1} className="btn btn-light" onClick={this.handlePrevClick}>Previous</button>
            <button type="button" disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/this.state.page)} className="btn btn-light" onClick={this.handleNextClick}>Next</button>
          </div>
        }
        
  
      </>
    )
  }
}
