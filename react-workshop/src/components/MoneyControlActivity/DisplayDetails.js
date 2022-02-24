export default function DisplayDetails(props) {
  var data = props.data;
  console.log(data);
  debugger;
  return (
    <div className="card text-center" style={props.style}>
      <div className="card-header">
        {data.DISPID}&nbsp;{data.HN}
      </div>
      <div className="card-body">
        <h5 className="card-title">Current Price: &#8377; {data.HP}</h5>
        <p className="card-text"></p>
      </div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              For More Details
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <ul style={{'list-style-type':'none'}}>
                <li><b>Previous Close: </b> {data.priceprevclose}</li>
                <li><b>Price Change: </b> {data.pricechange}</li>
                <li><b>Price Percentage Change: </b> {data.pricepercentchange}%</li>
                <li><b>Last Updated At: </b>{data.lastupd}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
