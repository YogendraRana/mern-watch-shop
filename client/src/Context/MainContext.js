import React, {createContext, useState, useEffect} from 'react'

//cart context 
export const CartContext = createContext()

const MainContext = (props) => {
	const deliveryCharge = 10;
	const [cartItem, setCartItem] = useState([]);
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);
	
	/****************************************************************FUNCTIONS*************************************************************/
	

	//addToCart function
	const addToCart = (id, image, name, price, quantity) => {
		const findItem = cartItem.find(item => item.id === id);

		if(findItem){
			deleteFromCart(id);
		}
		else{
			setCartItem([...cartItem, {id: id, image: image, name: name, price: price, quantity: quantity}]);
		}
	}

	//deleteFromCart function
	const deleteFromCart = (id) => {
		setCartItem(cartItem.filter(item => item.id !== id));
	}

	//decreaseQuantity function
	const decreaseQuantity = (id) => {
		const updatedItem = cartItem.map(item => {
			if (item.id === id){
				if(item.quantity > 1){
					item.quantity = item.quantity - 1;
				}
			}
			return item;
		})
		setCartItem(updatedItem);	
	}

	//increaseQuantity function
	const increaseQuantity = (id) => {
		const updatedItem = cartItem.map(item => {
			if (item.id === id){
				item.quantity = item.quantity + 1;
			}
			return item;
		})
		setCartItem(updatedItem);
	}

	useEffect(() => {
		if(cartItem.length){
			const itemQuantity = cartItem.reduce((accumulator, currentValue) => {
				const {quantity} = currentValue;
				return accumulator + quantity;			
			}, 0);

			const grandTotal = cartItem.reduce((accumulator, currentValue) => {
				const {price, quantity} = currentValue;
				const updatedAmount=price*quantity;
				return accumulator + updatedAmount;			
			}, 0)

			setTotalQuantity(itemQuantity)
			setTotalAmount(grandTotal)
		}
		else{
			setTotalQuantity(0)
			setTotalAmount(0)
		}
	}, [cartItem])

	//but items function
	const buyItem = (id, image, name, price, quantity) => {
		const findItem = cartItem.find(item => item.id === id);

		if(!findItem){
			setCartItem([...cartItem, {id: id, image: image, name: name, price: price, quantity: quantity}]);
		}
	}


	return(
		<CartContext.Provider 
			value={{
			cartItem, 
			addToCart, 
			deleteFromCart, 
			increaseQuantity, 
			decreaseQuantity, 
			totalQuantity, 
			totalAmount, 
			deliveryCharge,
			buyItem,
			}}
		>
			{props.children}
		</CartContext.Provider>
	)
}

export default MainContext