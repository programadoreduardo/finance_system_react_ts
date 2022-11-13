import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './data/types/Item';
import { items } from './data/items';
import { categories } from './data/categories';
import { filterListByMonth, getCurrentMonth } from './data/helpers/dateFilter'
import { TableArea } from './components/tableArea';
import { InfoArea } from './components/infoArea';


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setfilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setfilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea currentMonth={currentMonth}/>

        {/*àrea de inserção*/}

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;