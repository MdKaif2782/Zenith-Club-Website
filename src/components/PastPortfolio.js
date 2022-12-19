import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <section id="portfolio" style={{ background:'#f6fdf7' }}>
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Past Work</h1>
            <p className="info">We fight for a prosperous and happy Bangladesh. We want to transform Bangladesh into a developed and digitalized country. For achieving this goal we are working on some projects. Here we are mentioning some of our previous projects:
            </p>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-halves cf">
            {
              webData.portfolio && webData.PastPortfolio.map((item)=>{
                return(   
                  <div className="columns portfolio-item" key={item.imgurl}>
                    <div className="center_smalldevice item-wrap" style={{ background: '#c2e9fe' }}>
                      <a href={"https://" + item.url }>
                      {/* <a href="#modal-01"> */}
                        <img src={`${item.imgurl}`} className="item-img" alt=''/>
                        <div className="overlay" >
                          <div className="portfolio-item-meta" >
                            <h5>{item.name}</h5>
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </section>
    );
  }
}