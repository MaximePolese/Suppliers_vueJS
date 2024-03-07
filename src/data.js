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

export async function addSupplier(name, checkedAt, status, latitude, longitude) {
  try {
    const response = await axios.post('https://suppliers.depembroke.fr/api/suppliers', {
      'name': name,
      'checkedAt': checkedAt,
      'status': status,
      'latitude': latitude,
      'longitude': longitude
    })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

export async function deleteSupplier(id) {
  try {
    const response = await axios.delete('https://suppliers.depembroke.fr/api/suppliers/' + id)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}