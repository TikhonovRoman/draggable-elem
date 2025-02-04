import { defineStore } from 'pinia'
import { ref, watch, onMounted } from 'vue'


export const useInventoryStore = defineStore('inventoryStore', () => {
    const isLoading = ref(true)
    const indexChoisedItem = ref('')
    const showModal = ref(false)
    const inventory = ref([
        {
            id: 1,
            count: 4,
            color: 'rgba(127, 170, 101, 1)'
        },
        {
            id: 2,
            count: 3,
            color: 'rgba(170, 151, 101, 1)'
        }
        ,
        {
            id: 3,
            count: 4,
            color: 'rgba(101, 108, 170, 1)'
        },
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
    ])
    onMounted(() => {
        if (!!localStorage['inventory']) {
            inventory.value = JSON.parse(localStorage.getItem('inventory'))
        }
    })
    watch(inventory,
        () => {
            localStorage.setItem('inventory', JSON.stringify(inventory.value))
        },
        { deep: true }
    )
    const choisedItem = (id) => {
        if (id) {
            indexChoisedItem.value = inventory.value.map(item => item.id).indexOf(id)
            showModal.value = true
        } else {
            showModal.value = false
        }
    }
    function remove(count) {
        inventory.value[indexChoisedItem.value].count = inventory.value[indexChoisedItem.value].count - count
    }
    return { inventory, isLoading, showModal, choisedItem, remove, indexChoisedItem }
})
