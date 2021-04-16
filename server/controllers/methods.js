const History = require('../models/history')

module.exports.method1 = function(req, res) {
    newHistory = {
      linkImgBefore: 'before',
      linkImgAfter: req.file.path,
      size: req.body.size,
      type: '1',
      info: 'none',
      user: req.user
    }
    addToHistory(newHistory)
      .then((result) => {
        res.status(200).json(result)
      })
} 

module.exports.method2 = function(req, res) {
    linkImgBefore = 'before'
    linkImgAfter = req.file.path
    type = '2'
    info = 'none'
    user = req.user
    addToHistory(linkImgBefore, linkImgAfter, type, info, user)
    res.status(200).json({message: '2'})
} 

module.exports.method3 = function(req, res) {
    linkImgBefore = 'before'
    linkImgAfter = req.file.path
    type = '3'
    info = 'none'
    user = req.user
    addToHistory(linkImgBefore, linkImgAfter, type, info, user)
    res.status(200).json({message: '3'})
} 

module.exports.method4 = function(req, res) {
    linkImgBefore = 'before'
    linkImgAfter = req.file.path
    type = '4'
    info = 'none'
    user = req.user
    addToHistory(linkImgBefore, linkImgAfter, type, info, user)
    res.status(200).json({message: '4'})
}

module.exports.method5 = function(req, res) {
    linkImgBefore = 'before'
    linkImgAfter = req.file.path
    type = '5'
    info = 'none'
    user = req.user
    addToHistory(linkImgBefore, linkImgAfter, type, info, user)
    findEdges(req.body.blurRadius, req.body.trasholdL, req.body.trasholdU)
    res.status(200).json(req.body)
} 


function addToHistory(newH) {
    const newHistory = new History({
      date: Date(), 
      linkImgBefore: newH.linkImgBefore, 
      linkImgAfter: newH.linkImgAfter,
      type: newH.type, 
      size: newH.size, 
      info: newH.info,
      user: newH.user})
    return newHistory.save()
}


function findPixel(oY, oX) {
    const c = this.arrChannelC[this.picParams.width * oY + oX]
    const m = this.arrChannelM[this.picParams.width * oY + oX]
    const y = this.arrChannelY[this.picParams.width * oY + oX]
    const k = this.arrChannelK[this.picParams.width * oY + oX]
    return {c, m, y, k}
}

function findSquare(pixelIndedex, radius) {
    const rawY = Math.floor(pixelIndedex / this.picParams.width)
    const rawX = pixelIndedex % this.picParams.width
    let startX = rawX - radius
    let endX = rawX + radius
    let startY = rawY - radius
    let endY = rawY +  radius
    if (startX < 0) {
      startX = 0
    }
    if (endX >= this.picParams.width) {
      endX = this.picParams.width - 1
    }
    if (startY < 0) {
      startY = 0
    }
    if (endY >= this.picParams.height) {
      endY = this.picParams.height - 1
    }
    return {startX, endX, startY, endY}
}

function imageBlur(blurRadius) {
    let newPixelArrY = []
    newImageArray = []
    blurChannelArr = []
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let square = findSquare(i, blurRadius)
      let pixelCount = 0 
      newPixelArrY = []
      for (let y = square.startY; y <= square.endY; y++) {
        for (let p = (this.picParams.width * y + square.startX); p <= (this.picParams.width * y + square.endX); p++) {
          newPixelArrY.push(this.arrChannelY[p])
          pixelCount++
        }
      }
      this.blurChannelArr[i] = Math.floor(newPixelArrY.reduce((sum, element) => sum + element, 0) / pixelCount)
    }
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.blurChannelArr[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
}

function findGradients() {
    let newPixelArrY = []
    let gradientArrX = []
    let gradientArrY = []
    let matrixX = [-1, 0, 1, -2, 0, 2, -1, 0, 1]
    let matrixY = [-1, -2, -1, 0, 0, 0, 1, 2, 1]
    this.newImageArray = []
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let square = this.findSquare(i, 1)
      let pixelCount = 0 
      newPixelArrY = []
      for (let y = square.startY; y <= square.endY; y++) {
        for (let p = (this.picParams.width * y + square.startX); p <= (this.picParams.width * y + square.endX); p++) {
          newPixelArrY.push(this.blurChannelArr[p])
          pixelCount++
        }
      }
      if (newPixelArrY.length < 9) {
        this.gradientsChannelArr[i] = 1
        this.grandientAngles[i] = 404
      }
      else {
        let sumX = 0
        let sumY = 0
        newPixelArrY.forEach((pix, index) => {
          sumX += pix * matrixX[index]
          sumY += pix * matrixY[index]
        })
        gradientArrX[i] = Math.floor(sumX)
        gradientArrY[i] = Math.floor(sumY)
        this.gradientsChannelArr[i] = Math.floor(Math.sqrt(Math.pow(gradientArrX[i], 2) + Math.pow(gradientArrY[i], 2)))
        this.grandientAngles[i] = (Math.atan2(Math.floor(sumY), Math.floor(sumX)) * 180) / Math.PI
      }
      if (this.gradientsChannelArr[i] == 0) {
        this.grandientAngles[i] = 404
      }
    }
    // console.log(this.gradientsChannelArr, 'XXXX', this.grandientAngles)
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.gradientsChannelArr[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
}

function nonmaximumRemove() {
    // let cyanHUI = []
    // let magHUI = []
    // let yellowHUI = []
    // let bHUI = []

    let max = {elm: 0, index: 0, gradient: -1}
    let newPixelArrY = []
    // let newOfAngelArr = []
    this.nonmaxChannelArr = []
    this.newImageArray = []
    this.arrChannelY.forEach((n, i) => this.nonmaxChannelArr[i] = 0)
    // let forgottenArr = []

    // this.arrChannelY.forEach((n, i) => {
    //   cyanHUI[i] = 0
    //   magHUI[i] = 0
    //   yellowHUI[i] = 0
    //   bHUI[i] = 0
    // })

    this.grandientAngles = this.grandientAngles.map((p, s) => {
      if (p > -23 && p <= 22 || (p > 159 && p <= 180) || p < -159) {
        // cyanHUI[s] = 255
        return 0
      }
      else if ((p > 23 && p <= 69) || (p <= -114 && p > -159)) {
        // magHUI[s] = 255
        return 135
      }
      else if ((p > 69 && p <= 114) || (p <= -69 && p > -114)) {
        // yellowHUI[s] = 255
        return 90
      }
      else if (p > 114 && p <= 159 || p <= -23 && p > -69) {
        // bHUI[s] = 255
        return 45
      }
      else {
        return 404
      }
    })

    // console.log(this.grandientAngles)
    // for (let i = 0; i < this.arrChannelY.length; i++) {
    //   this.newImageArray.push(cyanHUI[i], magHUI[i], yellowHUI[i], 255)
    // }


    for (let i = 0; i < this.arrChannelY.length; i++) {

    

      // if (!forgottenArr.includes(i)) {
      if (this.grandientAngles[i] != 404) {
        // console.log('fhfgj')
        newPixelArrY = []
        let lineNewPixAngleIndex = i
        let lineNewPixAngle = this.grandientAngles[i]
        const qGrandientAngle = this.grandientAngles[i]
        while (lineNewPixAngle == qGrandientAngle) {
          let rawY = Math.floor(lineNewPixAngleIndex / this.picParams.width)
          let rawX = lineNewPixAngleIndex % this.picParams.width
          // console.log('XYYYYYIXWAW', rawX, rawY, lineNewPixAngle)
          newPixelArrY.push({elm: this.gradientsChannelArr[lineNewPixAngleIndex], index: lineNewPixAngleIndex, gradient: lineNewPixAngle})
          
          // forgottenArr.push(lineNewPixAngleIndex)

          let newY
          let newX
          switch(this.grandientAngles[lineNewPixAngleIndex]) {
            case 0: 
              newY = rawY
              newX = rawX + 1
              break
            case 45: 
              newY = rawY + 1
              newX = rawX - 1
              break
            case 90:
              newY = rawY + 1
              newX = rawX
              break
            case 135:
              newY = rawY + 1
              newX = rawX + 1
              break 
          }
          this.grandientAngles[lineNewPixAngleIndex] = 404
          lineNewPixAngle = this.grandientAngles[this.picParams.width * newY + newX]
          lineNewPixAngleIndex = this.picParams.width * newY + newX
        }
        max = newPixelArrY[0];
        for (let i = 0; i < newPixelArrY.length; i++) {
          if (newPixelArrY[i].elm > max.elm) {
            max = newPixelArrY[i]
          }
        }
        this.nonmaxChannelArr[max.index] = max.elm
      }
    }
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.nonmaxChannelArr[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
}

function trasholds(lowLimit, upLimit) {
    this.trasholdsChannelArr = []
    this.newImageArray = []
    this.expsArr = []
    this.nonmaxChannelArr.forEach((v, i) => {
      if (v > upLimit) {
        this.trasholdsChannelArr[i] = 100
      }
      if (v < lowLimit) {
        this.trasholdsChannelArr[i] = 0
      }
      if (v > lowLimit && v < upLimit) {
        this.trasholdsChannelArr[i] = 50
        this.expsArr.push(i)
      }
    })
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.trasholdsChannelArr[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
  }

  function removeExp() {
    let newPixelYSum 
    this.expsArr.forEach(i => {
      let square = this.findSquare(i, 1)
      newPixelYSum = 0
      for (let y = square.startY; y <= square.endY; y++) {
        for (let p = (this.picParams.width * y + square.startX); p <= (this.picParams.width * y + square.endX); p++) {
          newPixelYSum += this.trasholdsChannelArr[p]
        }
      }
      if (this.trasholdsChannelArr[i] == newPixelYSum) {
        this.trasholdsChannelArr[i] = 0
      }
      else {
        this.trasholdsChannelArr[i] = 100
      }
    })
    this.newFLUchannel = this.trasholdsChannelArr
    for (let i = 0; i < this.arrChannelY.length; i++) {
      let newPixel = this.rgbCmykService.cmyk2rgb(0, 0, 0, this.trasholdsChannelArr[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
  }

function generateFLUImage() {
    let currentPixC
    this.newImageArray = []
    for (let i = 0; i < this.arrChannelY.length; i++) {
      if (this.newFLUchannel[i] == 0) {
        currentPixC = this.arrChannelY[i]
      }
      else {
        currentPixC = this.newFLUchannel[i]
      }
      let newPixel = this.rgbCmykService.cmyk2rgb(this.arrChannelC[i], this.arrChannelM[i], currentPixC, this.arrChannelK[i])
      this.newImageArray.push(newPixel.r, newPixel.g, newPixel.b, 255)
    }
}

function findEdges(blurRadius, trasholdL, trasholdU) {
    // imageBlur(blurRadius)
    // findGradients()
    // nonmaximumRemove()
    // trasholds(trasholdL, trasholdU)
    // removeExp()
}

