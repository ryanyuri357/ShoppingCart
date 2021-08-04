import React, {useState, useEffect} from "react";
import Axios from "axios";
import CardItem from "./CartItem";

import { random, commerce } from "faker";
import {Container, Col, Row} from "reactstrap";


const API_KEY = "563492ad6f9170000100000114e2035256e14e64b700f59ffcbfe481";
const URL = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const LOCAL_URL = "http://myjson.dit.upm.es/api/bins/qsn";

const BuyPage = ({addToCart}) => {
    const [product, setProduct] = useState([]);

    // const fetchPhotos = async () => {
    //     const response = await Axios.get(URL, {
    //         header: {
    //             Authorization: API_KEY
    //         }
    //     });

    const fetchPhotos = async () => {
        const {data} = await Axios.get(LOCAL_URL);

        const {photos} = data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }))

        setProduct(allProduct);

    };

    useEffect(() => {
        fetchPhotos();
    }, [])


    return(
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CardItem product={product} addToCart={addToCart}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )

};

export default BuyPage;
