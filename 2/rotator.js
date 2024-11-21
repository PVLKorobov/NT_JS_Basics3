addEventListener("DOMContentLoaded", () => {
    let rotate = function (cases, index) {
        let nextIndex = (index == cases.length-1 ? 0 : index+1);
        cases[index].className = "rotator__case";

        cases[nextIndex].className = "rotator__case rotator__case_active";

        return nextIndex;
    }

    const rotators = document.getElementsByClassName("rotator");
    for (let rotator of rotators) {
        let cases = rotator.querySelectorAll(".rotator__case");
        let index = 0;

        setInterval(() => {
            index = rotate(cases, index);
        }, 1000)
    }
})