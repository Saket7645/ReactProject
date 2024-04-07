let name = "Saket";

function checkEvenOrOdd(num) {
  if (num % 2 == 0) {
    return <div>Even</div>;
  } else {
    return <div>Odd</div>;
  }
}
function Switchcase(ch) {
  switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return <div>A Vowel</div>;
    default:
      return <div>Is A Consonant</div>;
  }
}

let num = 4;
const users = [
  { name: "Saket", age: 21 },
  { name: "Ayush", age: 22 },
  { name: "Chandan", age: 25 },
  { name: "Gagan", age: "23" },
  { name: "Alok", age: "35" },
  { name: "Sandeep", age: "24" },
];
function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
      <h3>If else Statement</h3>
      <div>
        {checkEvenOrOdd(5)}
        {num % 2 === 0 ? <div>Even Number</div> : <div>Odd Number</div>}
        <h3>If Statement</h3>
        {num % 2 === 0 && <div>Even Number</div>}
        {num % 2 > 0 && <div>Odd Number</div>}
      </div>
      <h3>Loop</h3>
      {users.map((item, index) => {
        return (
          <div key={index}>
            {item.name} - {item.age}
          </div>
        );
      })}
      <h3>Switch Case</h3>
      {<div>{Switchcase("a")}</div>}
    </div>
  );
}

export default Jsx;


export function Greet() {
    return <h1>Hello World</h1>
}