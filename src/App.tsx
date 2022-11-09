import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './data/types/Item';
import { items } from './data/items';
import { categories } from './data/categories';
import {getCurrentMonth} from './data/helpers/dateFilter'


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setfilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=>{

  }, [list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
      {/*Área de informações*/ }

      {/*àrea de inserção*/ }

      {/*Tabela de itens*/ }

      </C.Body>
    </C.Container>
  );
}

export default App;