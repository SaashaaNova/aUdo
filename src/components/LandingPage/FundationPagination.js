import React, { Component } from 'react';
import fundationsText from './FundationText'

class FundationPagination extends Component {

    state = {
        currentPage: 1,
        fundationsPerPage: 3,
    };

    handleClick= (event) => {
        this.setState({
          currentPage: Number(event.target.id),
        }); 
         
    };

      render() {

        const { currentPage, fundationsPerPage } = this.state;

        const indexOfLastFundation = currentPage * fundationsPerPage;
        const indexOfFirstFundation = indexOfLastFundation - fundationsPerPage;
        const currentFundations = fundationsText.slice(indexOfFirstFundation, indexOfLastFundation);

        const renderElements= currentFundations.map((e,i)=> {

            return  <div className='one-list-item' id={i} key={i}>
                        <div className="fundation-title">
                            <h4>{e.title}</h4>
                        </div>
                        <div className="fundation-description">
                            <p>Cel i misja: {e.mission}</p>
                            <p className="things">{e.wantedThings}</p>
                        </div>
                    </div>   
            
        })
    
      
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(fundationsText.length / fundationsPerPage); i++) {
          pageNumbers.push(i);
        }
        
        const renderPageNumbers = pageNumbers.map(number => {
            
                return (
                <div
                key={number}
                id={number}
                onClick={this.handleClick}
                >
                    {number}
                </div>
                );
              
        });

       return (
        <div>
            <div>
                {renderElements}
            </div>
            <div className='pagination-numbers'>
                {renderPageNumbers}
            </div>
        </div>
        
       
       );
      }
    }
    
    export default FundationPagination;