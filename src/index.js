exports.QRCode = class QRCode {

    /**
     * @param {HTMLElement} img The <img> element that will contain the QR Code
     */
    constructor(img=null) {
        this.img = img
    }

    /**
     * @param {String} data The data to be encoded in the QR Code
     * @param {String} width The width of the QR Code in pixels
     * @param {String} height The height of the QR Code in pixels
     */
    generate(data, width="800", height="800") {
        url = encodeURI(`https://https://chart.googleapis.com/chart?cht=qr&chs=${width}x${height}&chl=${data}`)
        img ? this.img.src = url : void 0
        return url
    }
}