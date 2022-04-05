import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import FilterBtn from "../filter_component/filter";
import ItemCard from "../item-card_component/item_card";




const CardList = (props:any) =>{
    // Основной массив в котором ответ от сервера
    const [items, setItems]:any = useState({data:[]})
    // Доп массив в котором хранятся только элементы с count > 0
    const [itemsAvalible, setItemsAvalible] = useState({data:[]})
    // Состояние фильтра
    const [filtered, setFilter] = useState(false)
     // Состояние загрузки с сервера
    const [isLoading, setLoading] = useState(true)
    
    // Загружаем данные с сервера и заполняем 2 массива. Отключаем loader в конце
    useEffect(()=>{
        fetch('https://artisant.io/api/products')
        .then(response => response.json())
        .then(response => {
            let data = response.data.products
            let filteredArr = data.filter((el:any)=>(el.quantity_available > 0))
            setItems({data:data})
            setItemsAvalible({data:filteredArr})
            setLoading(false)
        })
        .catch((e) => {
            console.log('Error: ' + e.message);
            console.log(e.response);
        });
    }, [])

    return(
        <List>
           <FilterBtn active = {filtered} setActive = {setFilter}></FilterBtn>

           {/* Рендерим наш массив в зависимости от состояния фльтра */}
           {
                !filtered ? items.data.map((el:any, i:any)=>(
                    <ItemCard data = {el} key = {i}></ItemCard>
                )) : itemsAvalible.data.map((el:any, i:any)=>(
                    <ItemCard data = {el} key = {i}></ItemCard>
                ))
            }
            {/* Рендерим Loader */}
           {
               isLoading ? <Loader>Загружаем список</Loader>: null
           }
        </List>
    )

}

const Loader = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100vh;
background:white;
z-index:100;
display:flex;
justify-content:center;
align-items:center;
`
const List = styled.div`
display:flex;
width:100%;
flex-wrap:wrap;
justify-content:center;
`


export default CardList