import Square from "./square";

export default function Main() {
  return(
    <>  
      <div>
        <Square value={1}/>
        <Square value={2}/>
        <Square value={3}/>
      </div>

      <div>
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>

      <div>
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}