AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound()
        })

        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost()
        })
    },

    handleMarkerFound:function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "flex"

        var summaryButton = document.getElementById("order-summary-button")
        var orderButton = document.getElementById("order-button")

        summaryButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Order Summary",
                text: "Work in Progress.."
            })
        })

        orderButton.addEventListener("click",()=>{
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for your order!",
                text: "Your order will be delivered soon!",
                timer:2000,
                buttons:false
            })
        })
    },

    handleMarkerLost:function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "none"
    }
})