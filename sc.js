// var arr = [1, 2, 3, 4]
// // arr.forEach(function(ele){
// //     console.log(ele)
// // })

// var clut = ''
// arr.forEach(function (ele) {
//     // clut+="hello"
//     clut += ele
// })
// console.log(clut)
//practices set

var arr = [
    {
        dp: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1684076863982-8493240cd49b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1612302368128-2782272a29cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1704509284035-d46a34f642c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", story: "https://plus.unsplash.com/premium_photo-1688705098584-50f9a39176e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1696659958441-fd72cc30db89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDczfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1707300785988-98f2cae6a961?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOHxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1664451177155-8247ae799c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0NnxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8", story: "https://images.unsplash.com/photo-1706472740786-f33f36475b1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4NnxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8"
    }
]

var clutter = ''
var storyan = document.querySelector('.storyan')
arr.forEach(function (ele, index) {
    clutter += ` <div class="story">
    <img id="${index}" src="${ele.dp}" alt="">
</div>`
})
// console.log(clutter)

storyan.innerHTML = clutter



var story = document.querySelector('.story')
storyan.addEventListener('click', function (dets) {
    var value = arr[dets.target.id].story
    document.querySelector('.full').style.display = 'block'
    document.querySelector('.full').style.backgroundImage = `url(${value})`

    story.style.background = 'grey'
    setTimeout(() => {
        document.querySelector('.full').style.display = 'none'
    }, 3000);

})