document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('canvas');
    var buttonColor = document.getElementsByClassName('buttonColor');
    var blueButton = document.getElementById('blueButton');
    var redButton = document.getElementById('redButton');
    var yellowButton = document.getElementById('yellowButton');
    var orangeButton = document.getElementById('orangeButton');
    var blackButton = document.getElementById('blackButton');
    var purpleButton = document.getElementById('purpleButton');
    var hoverColorButton = document.getElementsByClassName('hoverColorButton');
    var hoverThickness5Button = document.getElementById('hoverThickness5Button');
    var hoverThickness10Button = document.getElementById('hoverThickness10Button');
    var hoverThickness25Button = document.getElementById('hoverThickness25Button');
    var hoverThickness50Button = document.getElementById('hoverThickness50Button');
    var thickness5 = document.getElementById('thickness5');
    var thickness10 = document.getElementById('thickness10');
    var thickness25 = document.getElementById('thickness25');
    var thickness50 = document.getElementById('thickness50');
    var clearButton = document.getElementById('clearButton');
    var eraserButton = document.getElementById('eraserButton');

    var typeSection = document.getElementById('typeSection');
    var penButton = document.getElementById('penButton');
    var paintbrush = document.getElementsByClassName('fa-paint-brush');
    var thicknessSection = document.getElementById('thicknessSection');

    var ctx = canvas.getContext('2d');
    var clientRect;
    var IsPressDown, points = [ ];
    IsPressDown = false;
    var penMode = false;
    var eraserMode = false;


    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black';
    ctx.lineJoin = ctx.lineCap = 'round';

    //----------------------------Eraser Button
    eraserButton.addEventListener('click', function(e) {
        eraserMode = true;
        penMode = false;
        IsPressDown = false;
        hoverEraseButton.style.opacity = '1';
        typeSection.className = 'fa fa-eraser fa-2x';
    })

    eraserButton.addEventListener('mouseover', function(e) {
        hoverEraseButton.style.opacity = '1';
    })

    eraserButton.addEventListener('mouseout', function (e) {
        hoverEraseButton.style.opacity = '0';
    })

    //---------------------------------Clear Button
    clearButton.addEventListener('click', function (e) {
        penMode = false;
        eraserMode = false;
        IsPressDown = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        typeSection.className = 'fa fa-trash fa-2x';
    })

    clearButton.addEventListener('mouseover', function(e) {
        hoverClearButton.style.opacity = '1';
    })

    clearButton.addEventListener('mouseout', function (e) {
        hoverClearButton.style.opacity = '0';
    })

    //-------------------------------Pen Button
    penButton.addEventListener('click', function (e) {
        penMode = true;
        eraserMode = false;
        IsPressDown = true;
        typeSection.className = 'fa fa-pencil fa-2x';
    })

    penButton.addEventListener('mouseover', function (e) {
        hoverPenButton.style.opacity = '1';
    })

    penButton.addEventListener('mouseout', function (e) {
        hoverPenButton.style.opacity = '0';
    })

    // eraserButton.addEventListener('click', function (e) {
    //     ctx.globalCompositeOperation = "destination-out";
    //     ctx.strokeStyle = "rgba(0,0,1,0)";
    // })

    //------------------------------Changing opacity when hovered
    thickness5.addEventListener('mouseover', function(e) {
        hoverThickness5Button.style.opacity = '1';
    })

    thickness10.addEventListener('mouseover', function(e) {
        hoverThickness10Button.style.opacity = '1';
    })

    thickness25.addEventListener('mouseover', function(e) {
        hoverThickness25Button.style.opacity = '1';
    })

    thickness50.addEventListener('mouseover', function(e) {
        hoverThickness50Button.style.opacity = '1';
    })

    //------------------------------Changing opacity when mouse leaves
    thickness5.addEventListener('mouseout', function(e) {
        hoverThickness5Button.style.opacity = '0';
    })
    thickness10.addEventListener('mouseout', function(e) {
        hoverThickness10Button.style.opacity = '0';
    })
    thickness25.addEventListener('mouseout', function(e) {
        hoverThickness25Button.style.opacity = '0';
    })
    thickness50.addEventListener('mouseout', function(e) {
        hoverThickness50Button.style.opacity = '0';
    })

    //-----------------------------Changing thickness
    thickness5.addEventListener('click', function (e) {
        ctx.lineWidth = 5
        thicknessSection.style.height = '10px'
        thicknessSection.style.width = '10px'
    })

    thickness10.addEventListener('click', function (e) {
        ctx.lineWidth = 10;
        thicknessSection.style.height = '20px'
        thicknessSection.style.width = '20px'
    })

    thickness25.addEventListener('click', function (e) {
        ctx.lineWidth =  25;
        thicknessSection.style.height = '30px'
        thicknessSection.style.width = '30px'
    })

    thickness50.addEventListener('click', function (e) {
        ctx.lineWidth = 40;
        thicknessSection.style.height = '40px'
        thicknessSection.style.width = '40px'
    })



    //-----------------------------Changing opacity when hovered over elmement
    for (let i = 0; i < buttonColor.length; i++) {
        buttonColor[i].addEventListener('mouseover', function () {
            hoverColorButton[i].style.opacity = '1'
        }, false);
    }

    for (let i = 0; i < buttonColor.length; i++) {
        buttonColor[i].addEventListener('mouseout', function () {
            hoverColorButton[i].style.opacity = '0'
        }, false);
    }

    //-------------------------------Changing drawing colors
    blueButton.addEventListener('click', function (e) {
        ctx.strokeStyle = 'blue'
        for(let i = 0; i < paintbrush.length; i++) {
            paintbrush[i].style.color = "blue";
        }
    })

    redButton.addEventListener('click', function (e) {
        ctx.strokeStyle = 'red'
        for(let i = 0; i < paintbrush.length; i++) {
            paintbrush[i].style.color = "red";
        }
    })

    blackButton.addEventListener('click', function (e) {
        ctx.strokeStyle = 'black'
        for(let i = 0; i < paintbrush.length; i++) {
            paintbrush[i].style.color = "black";
        }
    })

    purpleButton.addEventListener('click', function (e) {
        ctx.strokeStyle = 'purple'
        for(let i = 0; i < paintbrush.length; i++) {
            paintbrush[i].style.color = "purple";
        }
    })

    yellowButton.addEventListener('click', function (e) {
        ctx.strokeStyle = 'yellow'
        for(let i = 0; i < paintbrush.length; i++) {
            paintbrush[i].style.color = "yellow";
        }
    })

    orangeButton.addEventListener('click', function (e) {
        ctx.strokeStyle = 'orange'
        for(let i = 0; i < paintbrush.length; i++) {
            paintbrush[i].style.color = "orange";
        }
    })

    //------------------------------------------------Drawing
    canvas.addEventListener('mousedown', function(e) {
        IsPressDown = true;
        console.log('mousedown');
        points.push({x: e.clientX - clientRect.left, y: e.clientY - clientRect.top});
    });

    canvas.addEventListener('mousemove', function(e) {
        if(eraserMode == true) {
            IsPressDown = false;
        }
        // if (!IsPressDown) return;
        clientRect = e.target.getBoundingClientRect();
        console.log('mousemove');

        if(IsPressDown) {
            ctx.globalCompositeOperation = 'source-over';
            points.push({x: e.clientX - clientRect.left, y: e.clientY - clientRect.top});
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for(var i = 1; i < points.length; i++ ) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.stroke();
        }


        if(eraserMode) {
            //Follow the cursur and clear rect(make a circle) whereever you're supposed to draw
            //     points.push({x: e.clientX - clientRect.left, y: e.clientY - clientRect.top});
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for(var i = 1; i < points.length; i++ ) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.clearRect(e.clientX - 251, e.clientY - 15, 30, 30);
            //     ctx.globalCompositeOperation = 'destination-out';
            //     ctx.arc(e.clientX,e.clientY,5,0,Math.PI*2,false);
            //     ctx.fill();
        }
    });

    canvas.addEventListener('mouseup', function(e) {
        IsPressDown = false;
        console.log('mouseup');
        points.length = 0;
    });
    



    //Accordion
    /* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons.
     The "active" class is used to add a background color to the current button when its belonging panel is open.
     The "show" class is used to open the specific accordion panel */
    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
});


// if(eraserMode == true) {
//     canvas.addEventListener('mousedown', function(e) {
//         console.log('mousedown');
//         points.push({x: e.clientX - clientRect.left, y: e.clientY - clientRect.top});
//     });
//
//     canvas.addEventListener('mousemove', function(e) {
//         clientRect = e.target.getBoundingClientRect();
//         console.log('mousemove');
//         points.push({x: e.clientX - clientRect.left, y: e.clientY - clientRect.top});
//         ctx.beginPath();
//         ctx.moveTo(points[0].x, points[0].y);
//         for(var i = 1; i < points.length; i++ ) {
//             ctx.lineTo(points[i].x, points[i].y);
//         }
//         ctx.clearRect();
//     });
//
//     canvas.addEventListener('mouseup', function(e) {
//         console.log('mouseup');
//         points.length = 0;
//     });
// }

