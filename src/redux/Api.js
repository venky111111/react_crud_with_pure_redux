import axios from "axios";
const databaseURL="http://localhost:3000";
export const getStudent = async () => {
    try {
        const response = await axios.get(`${databaseURL}/products`);
        const jsonData = response.data;
        console.log("this is from fake aPI",Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] })));

        if (jsonData === null) {
            return [];
        } else {
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    } catch (error) {
        console.error('Error fetching student data:', error);
        return [];
    }
}
export const newProduct = async (formData) => {
    try {
        if (formData.title !== ''&& formData.price !==''&& formData.description !==''&& formData.category !=='') {
            const response = await axios.post(`${databaseURL}/products`, formData);
            console.log( 'product added ! ',response.data);
        } else {
            alert('Please enter all the fields');
        }
    } catch (error) {
        alert('Error storing data:', error);
    }
}
export const updateProduct = async(id, formData) => {
    try {
        if (formData.title !== ''&& formData.price !=='' && formData.description !==''&& formData.category !=='') {
          await axios.put(`${databaseURL}/products/${id}`, formData);
          console.log('product updated successfully');
        } else {
            alert('Please enter all the fields');
        }
    } catch (error) {
        alert('Error storing data:', error);
    }
}
export const deleteProduct = async (id) => {
    try{
        await axios.delete(`${databaseURL}/products/${id}`)
    }catch (error) {
        console.log('error occured')
      }
 }