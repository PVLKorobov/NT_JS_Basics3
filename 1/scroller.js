addEventListener("DOMContentLoaded", () => {
    const windowHeight = innerHeight;

    let isVisible = function (blockRect) {
        return blockRect.top <= innerHeight && blockRect.bottom >= 0;
    }


    let revealBlocks = document.getElementsByClassName("reveal");

    addEventListener("scroll", () => {
        for (let block of revealBlocks) {
            if (isVisible(block.getBoundingClientRect())) {
                block.className = "reveal reveal_active";
            }
            else if (block.className == "reveal reveal_active") { block.className = "reveal"; }
        }
    })

    
})