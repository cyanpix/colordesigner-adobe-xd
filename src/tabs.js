export default {
    data() {
        return {
            activeColorSourceTab: 'assets',
            colorSourceTabs: [
                {
                    label: 'Assets',
                    name: 'assets'
                },
                {
                    label: 'Selection',
                    name: 'selection'
                }
            ],
            activeMainTab: 'color-list',
            mainTabs: [
                {
                    label: 'Shades/Tints',
                    name: 'shades-tints'
                },
                {
                    label: 'Color Picker',
                    name: 'color-picker'
                },
                {
                    label: 'Images ★',
                    name: 'images'
                }
            ],
            activeShadesTab: 'tints',
            shadesTabs: [
                {
                    label: 'Tints',
                    name: 'tints'
                },
                {
                    label: 'Shades',
                    name: 'shades'
                },
                {
                    label: 'Color Harmonies',
                    name: 'color-harmonies'
                }
            ],
            activeShadesTab: 'tints',
            shadesTabs: [
                {
                    label: 'Tints',
                    name: 'tints'
                },
                {
                    label: 'Shades',
                    name: 'shades'
                },
                {
                    label: 'Color Harmonies',
                    name: 'color-harmonies'
                }
            ],
            activeColorHarmoniesTab: 'complementary',
            colorHarmoniesTabs: [
                {
                    label: 'Complementary',
                    name: 'complementary'
                },
                {
                    label: 'Analogous',
                    name: 'analogous'
                },
                {
                    label: 'Split Complementary',
                    name: 'split-complementary'
                },
                {
                    label: 'Triad',
                    name: 'triad'
                },
                {
                    label: 'Square',
                    name: 'square'
                },
                {
                    label: 'Rectangle',
                    name: 'rectangle'
                }
            ],
            activeColorsTab: 'green',
            colorsTabs: [
                {
                    label: 'Green',
                    name: 'green'
                },
                {
                    label: 'Blue',
                    name: 'blue'
                },
                {
                    label: 'Red',
                    name: 'red'
                },
                {
                    label: 'Orange',
                    name: 'orange'
                },
                {
                    label: 'Purple',
                    name: 'purple'
                },
                {
                    label: 'Yellow',
                    name: 'yellow'
                },
                {
                    label: 'Gray',
                    name: 'grey'
                }
            ]
        }
    },
    methods: {
        handleMainTabChange(name){
            this.activeMainTab = name
            if(name == 'images'){
                this.toggleStockPromo(true)
            }else {
                this.toggleStockPromo(false)
            }
        },
        handleShadeTabChange(name){
            this.activeShadesTab = name
        },
        handleColorHarmoniesTabChange(name){
            this.activeColorHarmoniesTab = name
        },
        handleNewColorTabChange(name){
            this.activeColorsTab = name
        },
        handleColorSourceTabChange(name){
            this.changeActiveColor(0)
            this.setActiveColorTab(name)
            this.activeColorSourceTab = name
        }
    },
}
