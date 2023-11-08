function ToDoitem1() {
    let todoname = 'buy some groceries';
    let tododate = '4/10/2023';

    return (
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    {todoname}
                </div>
                <div class="col">
                    {tododate}
                </div>
                <div class="col">
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoitem1;