import React, { useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDLHXFP6ThcswcVJHiKy8lb3Yo-12_lLkNw&usqp=CAU/1500/1500",
    "data:image/jpeg;base64,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", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CYNSGDubdIhC5tLScOwUXSAH6muu9OwSoA&usqp=CAU/4000/3000",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMdRcXypvYuZRYqJaS0Ol2EZq4y2LWOkdCw&usqp=CAU/2000/1500",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjRvAK9YursM26iT2yufz-vebfIaZ3q1DuQ&usqp=CAU/1500/2500",
]

const Bracelets2 = () => {
    const[data, setData] = useState({img: '' , i: 0})

    const viewImage = (img, i)=> {
      setData({img,i})
    }
    const imgAction = (action) =>{
        let i = data.i;
        if(action === 'next-img'){
            setData({img: images[i + 1], i: i + 1})
        }
        if(action === 'previous-img'){
            setData({img:images[i - 1], i: i - 1});
        }
        if(!action){
            setData({img: '', i: 0});   
        }
    }
  return (
    <>
    {data.img &&
    <div style={{
        width: '100%',
        height: '100vh',
        background: 'white',
        position:'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    }}>
        <button onClick={() => imgAction()} style={{position:'absolute', top: '10px', right: '10px'}}>X</button>
        <button onClick={()=> imgAction('previous-img')}>Previous</button>
        <img src={data. img} style={{width:'auto',maxWidth: '90%', maxHeight:'90&%'}} />
        <button onClick={()=> imgAction('next-img')}>Next</button>
    </div>

    }
    <div style={{padding: '10px'}}>
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='20px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                            onClick={() => viewImage(image,i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            </div>
            </>
        )
    }
 
  

export default Bracelets2