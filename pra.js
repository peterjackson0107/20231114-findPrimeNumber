let arrowBtn = document.getElementById("arrowBtn")
let findNum = document.getElementById("findNum")
const aTest = document.getElementById("test");
const answerSheet = document.getElementById("answerSheet")
console.log(typeof (findNum.value))
let arr = []
let str

arrowBtn.addEventListener("click", () => {
    arr = []
    for (let i = 2; i <= parseInt(findNum.value); i++) {
        for (let j = 2; j <= Math.floor(Math.sqrt(i)) + 1; j++) {
            if (i % j == 0 && i != j) {
                tag = false;
                break;
            }
            tag = true;
        }
        if (tag) {
            arr.push(i)
        }
    }
    console.log(arr)
    str = arr.join(",")
    number = arr.length
    console.log(str)
    console.log(number)

    answerSheet.innerText = "答案有" + number + "個" + str
})