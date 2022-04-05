
// Компонент фильт. Меняет состояние родительского CardList переключая массивы
const FilterBtn = ({active, setActive}:any) =>{


    return(
        <label style = {{position:'fixed', top:'10px', right:"10px", zIndex:10, padding:'20px', background:'black', color:"white"}}>
            Показать доступные
            <input type={'checkbox'} onChange = {(event) => {
                setActive(!active)
            }}/>
        </label>
       
    )
}


export default FilterBtn