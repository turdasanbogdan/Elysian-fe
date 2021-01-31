import React from 'react';
import Card from 'react-bootstrap/Card';

const Pharmacy = ({ pharmacies }) => {

    return(
        <div>
            <center><h1>Pharmacies</h1></center>
            {
                pharmacies.map( pharmacy  => (
                    <center>
                    <div style = {{ width: '25rem', borderStyle: 'solid',marginTop : '2rem', textAlign: 'center' }} key = {pharmacy.id}>
                       <Card.Body >
                            <Card.Title>{pharmacy.name}</Card.Title>
                            <Card.Subtitle>{pharmacy.city}</Card.Subtitle>
                            <Card.Text>{pharmacy.address}</Card.Text>
                            <Card.Text>{pharmacy.phone}</Card.Text>
                        </Card.Body>    
                    </div>  
                    </center>    
                ))
            }
        </div>    
    )
}

export default Pharmacy;