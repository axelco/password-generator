

const HelloWorld = ({ onClick, count }) => {

    return (
        <>
            <h1>Hello world :)</h1>
            <p>countdown : {count}</p>
            <button onClick={onClick} className="btn btn-light">
                Click me
            </button>              
        </>
      
    );
  }
  
  export default HelloWorld;
  