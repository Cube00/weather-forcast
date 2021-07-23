const EachDay = ({state, index, array}) =>{
	if(state){
		var {icon} = state.weather;
		var {high_temp} = state;
		//get temperature
   		var farenheit = (high_temp * 1.8) + 32;
  	}

 	var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+index+1);
    const nextDayz = array[nextweek.getDay()];

	return <>
		<div className="eachDayWeek">
			<h2>{nextDayz}</h2>
			<img src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.png`} alt="/" />
			<div className="temperature-weekdayz">
				<h3>
					{high_temp.toFixed()}
					<span>o</span> C
				</h3>
				<h3>
					{farenheit.toFixed(1)}
					<span>o</span> F
				</h3>
			</div>
		</div>
	</>
}

export default EachDay