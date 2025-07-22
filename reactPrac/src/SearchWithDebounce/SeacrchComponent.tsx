import React from "react";
import './searchStyle.css'
import { useDebounce } from "./hook";
import { useDebounceForFunction } from "./hook";
export function SearchComponent(){
    const [searchValue,setSearchValue]=React.useState("")
    const [searchResult,setSearchResult]=React.useState([])
    const {debouncedVal}=useDebounce(searchValue,500)
    const [showDropdown,setShowDropdown]=React.useState(false)
    const abortRef=React.useRef<any|null>(null)
    function handleSearch(e){
        e.preventDefault()
        console.log('searchvalue',searchValue)
        setSearchValue(e.target.value)
    }
    React.useEffect(()=>{    
            setShowDropdown(false)    
            console.log('debouncedVal',debouncedVal)
            const response =  fetch(
                `https://openlibrary.org/search.json?q=${debouncedVal}&limit=10`
            ).then((resp)=> resp.json())
            .then((resp)=>{
                console.log('resp',resp.docs)
                setSearchResult(resp.docs)
                setShowDropdown(true)
            }) 
    },[debouncedVal])

    //Version with useDebounceFunc

    const debouncedSearch=useDebounceForFunction(async(query:string)=>{
        if(abortRef.current){
            abortRef.current.abort()
        }
        const controller= new AbortController()
        abortRef.current=controller.signal;
     try{
        fetch(
            `https://openlibrary.org/search.json?q=${query}&limit=10`,
            {signal:controller.signal}
        ).then((resp)=> resp.json())
        .then((resp)=>{
            console.log('resp',resp.docs)
            setSearchResult(resp.docs)
            setShowDropdown(true)
        }) 
     }catch(error){
        throw new Error(' Some Error occures')
     }
    },500)
 
    function onChange(e){
        e.preventDefault()
        setSearchValue(e.target.value)
        debouncedSearch(searchValue)
    }
    return(
     <div>
    <div className={'navbar'}>
        <div className={'searchBox'}>
            <input type ={'text'}value={searchValue} onChange={handleSearch} className={'searchInput'} placeholder="Search here.."></input>
            {showDropdown &&
       <div className={'dropdown'}>
        {searchResult.map((el:any)=>{
            console.log('el',el)
            return (<>
            <p style={{backgroundColor:'white',color:'black',marginTop:'0px'}}key={el?.key}>{el.title}</p>
            </>)
        })}
      </div>}
        </div>      
    </div>

    <div>
        <h1>Other Content</h1>
    </div>
     </div>

   
    )
    
}