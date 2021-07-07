class Intro {
    constructor(){
        this.xpos = 0
        this.ypos = 0
        this.width = displayWidth
        this.height = displayHeight
    }
    display(){
        rect(this.xpos, this.ypos, this.width, this.height)
    }
}