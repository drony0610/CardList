import { useEffect } from "react";
import styled from "styled-components";


const ItemCard = (props:any) => {
    
    const {
        quantity_available,
        initial_price,
        avatar,
        created_by,
        name
    } = props.data
   
    
    return(
        <Card>
            <div style={{position:'relative', width:'100%'}}>
                <img src='pic.png' alt={avatar.original} style= {{width:'100%'}}/>
                <ItemAuthor>
                created by 
                <br/>
                <span style={{fontWeight:'700'}}>{created_by.display_name}</span>
                 </ItemAuthor>
                 <ItemTitle>{name}</ItemTitle>
            </div>
            <CardBody>
                <div>
                    <CardTitle>avalible</CardTitle>
                    <CardAvalibleCount>{quantity_available}/5</CardAvalibleCount>
                </div>
                <div>
                    <CardTitle>price</CardTitle>
                    <CardPrice>{initial_price}$</CardPrice>
                </div>
            </CardBody>
            
        </Card>
    )
}

const Card = styled.div`
flex-grow:0;
flex-shrink:1;
max-width:325px;
min-width:270px
box-shadow: 0px 10px 14px 0px #00000012;
box-sizing:border-box;
display:flex;
flex-direction:column;
height:fit-content;
margin:10px;
border-radius:10px;
overflow:hidden;
position:relative;
@media(max-width:650px){
    max-width:100%;
    width:100%;
}
`

const CardBody = styled.div`
display: flex;
justify-content: space-between;
padding: 16px;
`
const CardTitle = styled.p`
font-size:12px;
font-weight:400;
color:#828282;
margin-bottom:12px;
`
const CardAvalibleCount = styled.p`
font-size:16px;
font-weight:600;
`
const CardPrice = styled.p`
font-size:16px;
font-weight:600;
color:#0040E5;

`
const ItemAuthor = styled.div`
font-size:12px;
color:#f3f3f3;
position:absolute;
top:16px;
left:16px;
`
const ItemTitle = styled.p`
font-size:18px;
color:#fff;
position:absolute;
bottom:16px;
left:16px;
width: 50%;
`
export default ItemCard;