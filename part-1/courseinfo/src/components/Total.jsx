const Total = ({parts}) => {

    const total_num = parts[0].exercises + parts[1].exercises + parts[2].exercises;

    return(
        <>
            <p>{total_num}</p>
        </>
    )
}

export default Total;