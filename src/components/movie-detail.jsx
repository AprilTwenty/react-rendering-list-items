
function MovieDetail(props) {
    const item = props.item;
    const details = [];
        for (let key in item) {
            if (key === 'genres') {
                details.push(
                    <li key={key}>
                        <div  className="box-genres">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                        {item.genres.map((genres, index) => (
                            
                                <div key={index} className="genres">{genres}</div>
                            
                        ))}
                        </div>
                    </li>
                    
                )
            }
            else if (key !== "image" && key !== "director") {
                details.push(
                    <li key={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}: {item[key]}
                    </li>
                )
            }
        }
        return details;
}
export default MovieDetail;