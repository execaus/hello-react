import React, {useState} from 'react';

interface HelloReactProps {
    name: string
}

const HelloReact = (props: HelloReactProps) => {
    const fruits = ["Груша", "Яблоко", "Банан"]
    const [currentProduct, setCurrentProduct] = useState("не выбран")

    const onProductButtonClick = (product: string) => {
        setCurrentProduct((prevState) => {
            return prevState + product
        }
        )
    }

    return (
        <div>
            <h1>Hello React</h1>
            <h3>My name: {props.name}</h3>
            <h1>Выбранный продукт: {currentProduct}</h1>
            <p>I am nigger</p>
            {
                fruits.map((value) => {
                    return <button
                        onClick={onProductButtonClick.bind(this, value)}>Продукт: {value}</button>
                })
            }
        </div>
    );
};

export default HelloReact;