const Vue = require('vue').default
const Vuex = require('vuex')
const { Color } = require("scenegraph")
const findIndex = require('lodash/findIndex');
Vue.use(Vuex)
const styles = require('./scss/main.scss')
const App = require('./app.vue').default
const store = require('./store.js')()



const nodes = []
const colorsFromSelection = []
function getChildren(children){
    children.forEach(node => {
        nodes.push(node)
        if(node.children.length){
            getChildren(node.children)
        }
    })
}

function getColorsFromSelection(items){
    for(const node of items){
        nodes.push(node)
        if(node.children.length){
            getChildren(node.children)
        }
    }
    for(const node of nodes) {

        if(node.fill){
            const fillColor = new Color(node.fill.value).toHex()
            if(findIndex(colorsFromSelection, {value:fillColor}) === -1){
                colorsFromSelection.push({
                    name: `${fillColor} - ${node.name} (fill)`,
                    value: fillColor
                })
            }
        }

        if(node.stroke){
            const strokeColor = new Color(node.stroke.value).toHex()
            if(findIndex(colorsFromSelection, {value:strokeColor})  === -1){
                colorsFromSelection.push({
                    name: `${strokeColor} - ${node.name} (stroke)`,
                    value: strokeColor
                })
            }
        }

    }
}


let dialog
function getDialog(selection) {

    getColorsFromSelection(selection.items)
    if(colorsFromSelection.length){
        store.commit('loadColorsFromSelection', colorsFromSelection)
    }
    if (dialog == null) {
        document.body.innerHTML = `<dialog><div id="container"></div></dialog>`
        dialog = document.querySelector('dialog')
        store.commit('loadColorsFromAssets')
        new Vue({
            el: '#container',
            components: { App },
            store,
            render(h) {
                return h(App, { props: { dialog } })
            }
        })
    }else{
        store.commit('loadColorsFromAssets')
    }

    return dialog
}

module.exports = {
    commands: {
        showColorDesignerDialog:  async function(selection) {
            await getDialog(selection).showModal();
        }
    }
}
