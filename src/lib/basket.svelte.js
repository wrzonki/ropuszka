class Basket {
	basket = $state({});

	add = (item) => {
		console.log('add', this.basket);
		if (this.basket[item.id]) {
			this.basket[item.id].quantity++;
		} else {
			this.basket[item.id] = { ...item, quantity: 1 };
		}
	};

	changeQuantity = (id, e) => {
		const quantity = e.target.value;
		if (!quantity || quantity <= 0) {
			this.basket[id].quantity = 0;
		} else {
			this.basket[id].quantity = parseInt(quantity);
		}
	};

	deleteItem = (id) => {
		delete this.basket[id];
	};

	get = () => {
		return Object.values(this.basket);
	};
}

export const basket = new Basket();
