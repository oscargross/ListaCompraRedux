

export const calculatorSelect = (state) => {
    return state.calculator
}

export const selectorAllProducts = (state) => {
    return state.products
}

export const selectorSelectedProducts = (state) => {
    return state.products.filter(product => product.checked)
}

export const selectorTotalPrice = (state) => {
    return state.products.filter(product => product.checked)
      .reduce((a, b) => a + b.price, 0)

}