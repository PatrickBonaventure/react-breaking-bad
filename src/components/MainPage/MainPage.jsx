import { useState, useEffect } from 'react';
import './MainPage.css';
import Card from '../Card/Card.jsx';

function NavPage(props){
  {
    if(props.page!==1){
      return (
        <header className='d-flex justify-content-between align-items-center'>
          
          <button className='btn btn-primary btn-sm'
          onClick={() => props.setPage(props.page - 1)}>Go to Page { props.page - 1 }
          </button>
          <p>Page: {props.page}</p>
          <button className='btn btn-primary btn-sm'
          onClick={() => props.setPage(props.page + 1)}>Go to Page { props.page + 1 }
          </button>
        </header>
      )
    }
    return (
      <header className='d-flex justify-content-between align-items-center'>
        
        <button className='btn btn-primary btn-sm invisible'
        onClick={() => props.setPage(props.page - 1)}>Go to Page { props.page - 1 }
        </button>
        <p>Page: {props.page}</p>
        <button className='btn btn-primary btn-sm'
        onClick={() => props.setPage(props.page + 1)}>Go to Page { props.page + 1 }
        </button>
      </header>
    )
  }

}

const MainPage = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [porPage, setporPage] = useState(6);
  
  
  

  useEffect(()=>{
    const fetchData = async() =>{
      const response = await fetch(
        `https://breakingbadapi.com/api/characters?page=${page}`
      );
      const json = await response.json();
      setLoading(false)
      setData(json);
    };
    fetchData();
    
  },[page]);

  const filter = (searchBy) => {
    setSearch(searchBy);
  }


  return(
  <div className="MainPage">
    <input type="text" 
    placeholder='Walter White'
    onChange={(e) =>filter(e.target.value)}
    className='form-control'/>
   {
        loading ? 
        <div className="loading show">
        <div className="spin"></div>
        <div>Loading...</div>
        </div> 
        : (
  <div className="row">
   
      {data && data.slice(
        (page-1) * porPage,
        (page-1) * porPage + porPage
        ).map((item, index) => {
        
        if(item.name.toLowerCase().includes(search.toLowerCase())){
          return(
            <div className="col-md-4 col-xs-12" key={index}>
              <Card personaje={item}></Card>
            </div>
          )
        }
      })}
      <NavPage page={page} setPage={setPage} setporPage={setporPage} />
    </div>
          
        )
        
      }
  
  </div>
 ); 
};


export default MainPage;
