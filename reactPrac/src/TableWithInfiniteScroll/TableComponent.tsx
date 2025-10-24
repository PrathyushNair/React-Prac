import React from "react";
import { users } from "../userData";
export function TableView() {
  const [userData, setUserData] = React.useState<Array<{name:string,email:string,occupation:string}>>([]);
  const [currentIndex,setCurrentIndex]=React.useState(0)
  const initialItem=40
  React.useEffect(() => {
    let newArray:{name:string,email:string,occupation:string}[]=users.slice(0, initialItem)
    setUserData(newArray)
    setCurrentIndex(initialItem+1)
    
  }, []);
  React.useEffect(()=>{
    function onScroll(){
        if(currentIndex>=users.length){
            window.removeEventListener('scroll',onScroll)
        }
        const startIndex=(currentIndex-1)
        const endIndex=startIndex+4
        setCurrentIndex(endIndex+1)
        const newArr=users.slice(startIndex,endIndex)
        if(window.scrollY+window.innerHeight>=document.body.offsetHeight-50){
             setUserData([...userData,...newArr])
             console.log('currentIndex',currentIndex)
        }
    }
    window.addEventListener('scroll',onScroll)
    return ()=> window.removeEventListener('scroll',onScroll)
  },[userData])
  return (
    <div>
        <p>{`CurrentIndex:${currentIndex}`}</p>
      <table style={{border:'2px solid red'}}>
        <thead >
          <tr>
            <th style={{border:'2px solid red'}}>Name</th>
            <th style={{border:'2px solid red'}}>Email</th>
            <th style={{border:'2px solid red'}}>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((el:{name:string,email:string,occupation:string}) => (
            <tr >
              <td style={{border:'2px solid red'}}>{el.name}</td>
              <td style={{border:'2px solid red'}}>{el.email}</td>
              <td style={{border:'2px solid red'}}>{el.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
