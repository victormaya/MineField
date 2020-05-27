import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRation: 0.15, //proporção do painel superior
    difficultLevel: 0.1,
    getColumnsAmount(){
        const widht = Dimensions.get('window').width
        return Math.floor(widht/this.blockSize) //o floor arredonda para baixo
    },
    getRowsAmount(){
        const totalHeight = Dimensions.get('window').height
        const bordHeight = totalHeight * (1 - this.headerRation)
        return Math.floor(bordHeight / this.blockSize)

    }
}


export default params;