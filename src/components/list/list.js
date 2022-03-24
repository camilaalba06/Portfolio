import '../../assets/styles/list.scss'

function List({listItem, typeList, elementList, modifierList, elementItem, modifierItem}) {
    let createListItem = listItem.map(item => <li className = {`${elementItem} ${modifierItem}`}> {item} </li>);
    let createFormatList= typeList === 'ul' ? <ul className = {`${elementList} ${modifierList}`}> {createListItem} </ul>:
                          typeList === 'ol' ? <ol className = {`${elementList} ${modifierList}`}> {createListItem} </ol>:
                          <li></li>
return (
    <div className="container-list">
        {createFormatList}
    </div>
  );
}

List.defaultProps = {
    listItem: ["Emma", "Isabella", "Sophia"],
    typeList: '',
    elementList: '',
    modifierList: '',
    elementItem: '',
    modifierItem: ''
}

export default List;
