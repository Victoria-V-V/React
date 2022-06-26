import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["city", "votes"],
  ["Владивосток", 188174],
  ["Севастополь", 97202],
  ["Нальчик", 61096],
  ["Курск", 39252],
  ["Уфа", 30166],
  ["Ярославль", 29263],
  ["Иваново", 28960],
  ["Самара", 26157],
  ["Анадырь", 21752],
  ["Саранск", 20025],
];

export const options = {
  title: "Рейтинг городов России 2022",
};

export function App() {
  return (
    <>
      <Chart chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />

      <a className='App-link'
        href='https://xn----etbdra6aacodma.xn--p1ai/'
        title='Перейти к голосованию'> Город России 2022</a>
    </>
  );
}

export default App;