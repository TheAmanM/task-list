import './App.css';
import { BsFillFileBarGraphFill } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { MdAttachMoney } from 'react-icons/md';
import InfoCard from './components/InfoCard/InfoCard';

const items = [
  {
    "id": 1,
    "name": "Total Sales",
    "value": "3,256",
    "icon": <BsFillFileBarGraphFill size={16} className='icon' />,
  },
  {
    "id": 2,
    "name": "Employees",
    "value": "1,460",
    "icon": <FiUser size={16} className='icon' />
  },
  {
    "id": 3,
    "name": "Average Profit",
    "value": "$ 64,375",
    "icon": <MdAttachMoney size={16} className='icon' />
  },
];

function App() {
  return (
    <div className="main">
      {items.map((item) => 
        <div id={items.id}>
          <InfoCard name={item.name} value={item.value} icon={item.icon} />
        </div>
      )}
    </div>

  );
}

export default App;