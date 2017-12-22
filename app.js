document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var clientRect;
    var points = [ ];
    ctx.lineWidth = 25;
    ctx.strokeStyle = 'black';
    ctx.lineJoin = ctx.lineCap = 'round';

    //Get elements by class and id
    var buttonColor = document.getElementsByClassName('buttonColor');
    var blueButton = document.getElementById('blueButton');
    var redButton = document.getElementById('redButton');
    var yellowButton = document.getElementById('yellowButton');
    var orangeButton = document.getElementById('orangeButton');
    var blackButton = document.getElementById('blackButton');
    var purpleButton = document.getElementById('purpleButton');
    var colorSquareBackground = document.getElementsByClassName('colorSquareBackground');

    var smallThicknessSquareBackground = document.getElementById('smallThicknessSquareBackground');
    var mediumThicknessSquareBackground = document.getElementById('mediumThicknessSquareBackground');
    var largeThicknessSquareBackground = document.getElementById('largeThicknessSquareBackground');
    var xLargeThicknessSquareBackground = document.getElementById('xLargeThicknessSquareBackground');

    var smallThickness = document.getElementById('smallThickness');
    var mediumThickness = document.getElementById('mediumThickness');
    var largeThickness = document.getElementById('largeThickness');
    var xLargeThickness = document.getElementById('xLargeThickness');

    var clearButton = document.getElementById('clearButton');
    var eraserButton = document.getElementById('eraserButton');
    var penButton = document.getElementById('penButton');
    var paintbrushIcon = document.getElementById('paintbrushIcon');
    var typeSection = document.getElementById('typeSection');
    var thicknessSection = document.getElementById('thicknessSection');

    var mode;
    var PEN_MODE = 'pen';
    var ERASER_MODE = 'eraser';
    var CLEAR_MODE = 'clear';
    var isPressDown = false;

    //----------------------------------------------------------Eraser Button
    eraserButton.addEventListener('click', function(e) {
        mode = ERASER_MODE;
        isPressDown = false;
        hoverEraseButton.style.opacity = '1';
        typeSection.className = 'fa fa-eraser fa-2x';
    });

    eraserButton.addEventListener('mouseover', function(e) {
        hoverEraseButton.style.opacity = '1';
    });

    eraserButton.addEventListener('mouseout', function (e) {
        hoverEraseButton.style.opacity = '0';
    });

    //------------------------------------------------------------Clear Button
    clearButton.addEventListener('click', function (e) {
        mode = CLEAR_MODE;
        isPressDown = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        typeSection.className = 'fa fa-trash fa-2x';
    });

    clearButton.addEventListener('mouseover', function(e) {
        hoverClearButton.style.opacity = '1';
    });

    clearButton.addEventListener('mouseout', function (e) {
        hoverClearButton.style.opacity = '0';
    });

    //---------------------------------------------------------------Pen Button
    penButton.addEventListener('click', function (e) {
        mode = PEN_MODE;
        isPressDown = true;
        typeSection.className = 'fa fa-pencil fa-2x';
    });

    penButton.addEventListener('mouseover', function (e) {
        hoverPenButton.style.opacity = '1';
    });

    penButton.addEventListener('mouseout', function (e) {
        hoverPenButton.style.opacity = '0';
    });

    //--------------------------------------------Changing opacity when hovered

    function addMouseOverThickness(thickness, background) {
        thickness.addEventListener('mouseover', function(e) {
            background.style.opacity = '1';
        })
    }

    addMouseOverThickness(smallThickness, smallThicknessSquareBackground);
    addMouseOverThickness(mediumThickness, mediumThicknessSquareBackground);
    addMouseOverThickness(largeThickness, largeThicknessSquareBackground);
    addMouseOverThickness(xLargeThickness, xLargeThicknessSquareBackground);

    //--------------------------------------Changing opacity when mouse leaves

    function addMouseOutThickness(thickness, background) {
        thickness.addEventListener('mouseout', function(e) {
            background.style.opacity = '0';
        })
    }

    addMouseOutThickness(smallThickness, smallThicknessSquareBackground);
    addMouseOutThickness(mediumThickness, mediumThicknessSquareBackground);
    addMouseOutThickness(largeThickness, largeThicknessSquareBackground);
    addMouseOutThickness(xLargeThickness, xLargeThicknessSquareBackground);


    //------------------------------------------------------Changing thickness

    function changeDrawingThickness(thicknessIcon, thickness, section, height, width) {
        thicknessIcon.addEventListener('click', function(e) {
            ctx.lineWidth = thickness;
            section.style.height = height;
            section.style.width = width;
        })
    }

    changeDrawingThickness(smallThickness, 5, thicknessSection, '10px', '10px');
    changeDrawingThickness(mediumThickness, 10, thicknessSection, '20px', '20px');
    changeDrawingThickness(largeThickness, 25, thicknessSection, '30px', '30px');
    changeDrawingThickness(xLargeThickness, 40, thicknessSection, '40px', '40px');

    //-----------------------------Changing opacity when hovered over elmement
    for (let i = 0; i < buttonColor.length; i++) {
        buttonColor[i].addEventListener('mouseover', function () {
            colorSquareBackground[i].style.opacity = '1'
        }, false);
    }

    for (let i = 0; i < buttonColor.length; i++) {
        buttonColor[i].addEventListener('mouseout', function () {
            colorSquareBackground[i].style.opacity = '0'
        }, false);
    }

    //---------------------------------------------------Changing drawing colors
    function changeColorandIconColor(button, color, icon) {
        button.addEventListener('click', function(e) {
            ctx.strokeStyle = color;
            icon.style.color = color;
        })
    }

    changeColorandIconColor(blueButton, 'blue', paintbrushIcon);
    changeColorandIconColor(redButton, 'red', paintbrushIcon);
    changeColorandIconColor(blackButton, 'black', paintbrushIcon);
    changeColorandIconColor(purpleButton, 'purple', paintbrushIcon);
    changeColorandIconColor(yellowButton, 'yellow', paintbrushIcon);
    changeColorandIconColor(orangeButton, 'orange', paintbrushIcon);

    //-----------------------------------------------------------------Drawing
    canvas.addEventListener('mousedown', function(e) {
        isPressDown = true;
        points.push({x: e.clientX - clientRect.left, y: e.clientY - clientRect.top});
    });

    canvas.addEventListener('mousemove', function(e) {
        if(mode == ERASER_MODE) {
            isPressDown = false;
        }
        if (mode == CLEAR_MODE) {
            return;
        }
        clientRect = e.target.getBoundingClientRect();

        if(isPressDown) {
            ctx.globalCompositeOperation = 'source-over';
            points.push({x: e.clientX - clientRect.left, y: e.clientY - clientRect.top});
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for(var i = 1; i < points.length; i++ ) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.stroke();
        }


        if(mode == ERASER_MODE) {
            ctx.beginPath();
            points.push({x: e.clientX - clientRect.left, y: e.clientY - clientRect.top});
            ctx.moveTo(points[0].x, points[0].y);
            for(var i = 1; i < points.length; i++ ) {
                ctx.lineTo(points[i].x, points[i].y);
            }
            ctx.clearRect(e.clientX - 251, e.clientY - 15, 30, 30);
        }
    });

    canvas.addEventListener('mouseup', function(e) {
        isPressDown = false;
        points.length = 0;
    });

    //------------------------------------------------------------------Accordion
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