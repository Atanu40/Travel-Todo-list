import React from 'react'
import '../Footerstates/Footer.css'

function Footer(props) {
  let count = 0;
  const { item } = props;
  let total = item.length;
  item.map((items,index) => items.packed ? count++ : count );
  let percentage = (count/total)*100;
  console.log(percentage);
  return (
    <div className='footer-content'>
      {
        percentage === 100 ? <p className='footer-paragraph'>🎉 Congrats! You are ready to go!</p> :  <p className='footer-paragraph'>💼 You have {total} items on your list and you already packed {count}({ item.length === 0 ? 0 : percentage}%)</p>
      }
     
    </div>
  )
}

export default Footer
