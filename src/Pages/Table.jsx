import * as React from 'react';

const Table=()=>{
    const data=[
        {id:1, name:'John Wynk', email:'john@example.com', phone:'777-777-7777'},
        {id:2, name:'Jane Lane', email:'jane@example.com', phone:'555-555-5555'},
        {id:3, name:'Bob Smith', email:'bobb@example.com', phone:'222-222-2222'},
        {id:4, name:'Alice Murray', email:'alice@example.com', phone:'111-111-1111'}
    ];


return(
        <div className='main-table'>
            <div className='text'>
                <h2>Hero</h2>
                <div id='name' data-testid="hero">hulk</div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>(
                            <tr>key={item.id}
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            </tr> 
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;