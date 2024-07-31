async function addToCart ( event ) {
    const dot = createDot();
    const buttonEle = event.target.closest("button");
    console.log("buttonEle", buttonEle);
    buttonEle.append(dot);
    if ( !document.startViewTransition ) return;
    const movetransition = document.startViewTransition(() => {
        moveDot(dot);
    });
    await movetransition.finished;
    dot.remove();
    dot.style.viewTransitionName = "none";
}

function createDot () {
    const div = document.createElement("div");
    div.classList.add("product__dot");
    div.style.viewTransitionName = "cart-dot";
    return div;
}

function moveDot ( dot ) {
    const cartEle = document.getElementById("js-shopping-bag-target");
    cartEle.append(dot);
}

[...document.getElementsByClassName("product__button")].forEach(ele => {
    ele.addEventListener("click", ( event ) => {
        console.log(event);
        addToCart(event);
    });
})
