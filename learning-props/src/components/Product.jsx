import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'







function Product(props) {


    return (
        <ul className='list-group shadow'>
            <li className='list-group-item'>
                <div className='media align-item-lg-cener flex-column flex-lg-row p-3 d-flex'>
                    <h5 className='mt-0 font-weight-bold mb-2'>{props.name}</h5>
                    <p className='font-italic text-muted mb-0 small'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maiores neque aperiam enim aliquam perferendis animi nulla necessitatibus nobis et provident culpa cupiditate maxime hic qui veritatis, quo earum. Ipsa!
                    </p>
                    <div className='d-flex align-item-center justify-content-start mt-1'>
                        <h6 className='font-weight-bold my-2' style={{ 'margin-right': 30 }}>
                            {props.cost}

                        </h6>
                        <button className='btn btn-primary'>-</button>

                    </div>
                </div>
            </li>
        </ul>
    )
}

export default Product;
