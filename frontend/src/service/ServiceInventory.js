import axios from 'axios';

const INVENTORY_API_BASE_URL = "http://localhost:9080/api/inventory";

class ServiceInventory {

    getBooks(){
        return axios.get(INVENTORY_API_BASE_URL);
    }

    addBook(inventory){
        return axios.post(INVENTORY_API_BASE_URL, inventory);
    }

    getBookById(inventoryId){
        return axios.get(INVENTORY_API_BASE_URL + '/' + inventoryId);
    }

    updateBook(inventory, inventoryId){
        return axios.put(INVENTORY_API_BASE_URL + '/' + inventoryId, inventory);
    }

    deleteBook(inventoryId){
        return axios.delete(INVENTORY_API_BASE_URL + '/' + inventoryId);
    }
}

export default new ServiceInventory()