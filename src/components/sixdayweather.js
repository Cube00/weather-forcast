import EachDay from './eachday'

const SixDayWeather = ({state, array}) =>{
	if(state){
		var slicedData = state.data.data.slice(1,7);
	}

	return <>
		<div className="week-weather">
			{state && slicedData.map((state, index)=>{
				return <EachDay key={state.sunrise_ts} state={state} index={index} array={array} />
			})}
		</div>
	</>
}

export default SixDayWeather