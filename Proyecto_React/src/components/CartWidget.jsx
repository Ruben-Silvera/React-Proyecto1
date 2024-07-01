const CartWidget = () => {
    return (
        <div>

            <button type="button" class="btn btn-light position-relative">
                Carrito 👜
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1</span>
            </button>
        </div>
    )
}

export default CartWidget