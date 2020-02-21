import React from 'react'

/* 
Write an abstracted component that can be used in place of InventoryTile AND ShopTile

Consider what the tiles have in common and what they do not: 
- For things that are the same, copy and pasting works just fine! 
- For things that are different, consider how you might make use of propsand JSX to have the same component behave differently when rendered by different parents 
*/

const PotionTile = (props) => {
  return (
    <div key={props.potion.id} className="inventory-card">
      <div>
        <img className="image" alt={props.potion.name} src={props.potion.image_url} />
      </div>
      {props.children}
    </div>
  )
}

export default PotionTile