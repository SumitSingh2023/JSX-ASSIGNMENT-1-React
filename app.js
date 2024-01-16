




let MyComponent=()=>{

    const [buttonText,setButtonText]=React.useState('Hello')

    function hello(){
        alert (toggle())
    }

    const toggle=()=>{

        setButtonText((Text)=>(Text==='Hello'?"Bye":"Hello"))
    }

    return(

        <React.Fragment>

        <p style={{textAlign:"center",marginTop:"150px"}}>React is a javascript library</p>

        <div className="main" style={{border:"2px solid red",textAlign:"center"}}>
            <p>Click the below button to alert 'Hello'</p>
            <button onClick={hello} style={{marginBottom:"10px"}} >{buttonText}</button>
        </div>

    </React.Fragment>

    )
    
}

ReactDOM.createRoot(document.getElementById('root')).render(<MyComponent/>)