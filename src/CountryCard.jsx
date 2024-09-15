const CountryCard = ({name, flagImg, flagAltText}) => {
    return (
        <div
        className="countryCard"
        style={{
            display:"flex",
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center",
            margin: "10px",
            padding:"10px" ,
            border:"1px solid grey",
            borderRadius: "4px",
            width : "200px",
            height: "200px",
        }}>
            <img 
            src={flagImg}
            alt={`Flag of ${flagAltText}`}
            style={{
                width:"100px",
                height: "100px"
            }} />
            <h2>{name}</h2>
        </div>
    );
}

export default CountryCard;