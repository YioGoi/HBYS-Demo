
import axios from 'axios';

export class CustomerService {

    getCustomersSmall() {
        return axios.get('data/customers-small.json')
            .then(res => res.data.data);
    }

    getCustomersMedium() {
        return axios.get('data/customers-medium.json')
            .then(res => res.data.data);
    }

    getCustomersLarge() {
        return axios.get('data/customers-large.json')
            .then(res => res.data.data);
    }

    getCustomersXLarge() {
        return axios.get('data/customers-xlarge.json')
            .then(res => res.data.data);
    }

    getCustomers(params) {
        return axios.get('https://www.primefaces.org/data/customers', { params: params })
            .then(res => res.data)
    }

    getAddress() {
        return axios.get('data/address.json')
            .then(res => res.data.data);
    }

    getCommerce() {
        return axios.get('data/commerce.json')
            .then(res => res.data.data);
    }

    getUsers() {
        return axios.get('data/users.json')
            .then(res => res.data.data);
    }
}
