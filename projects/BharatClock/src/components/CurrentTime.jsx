let CurrentTime = () => {
    let time = new Date()
    return (
        <h1>this is the current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h1>
    )
};

export default CurrentTime;