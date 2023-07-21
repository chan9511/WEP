function Child(props) {

    console.log(props.props);

  return (
    <div className="col d-flex justify-content-center">
    <div className="card" style={{width: "18rem"}}>
    <img src={props.path} className="card-img-top" alt="..."/>
    <div className="card-body">
      <p className="card-text">{props.name}</p>
    </div>
    </div>
  </div>
  )
}

export default Child;
