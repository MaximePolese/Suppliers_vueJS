import axios from 'axios'

export async function getSuppliers() {
  try {
    const response = await axios.get('https://suppliers.depembroke.fr/api/suppliers')
    // console.log(response.data.data)
    return { suppliers: response.data.data, loading: false, error: null }
  } catch (error) {
    console.error(error)
    return { suppliers: [], loading: false, error: error }
  }
}
