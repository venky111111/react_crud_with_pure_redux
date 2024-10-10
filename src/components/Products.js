import React, { useState, useEffect } from 'react'
import {getStudent, newProduct, updateProduct, deleteProduct} from '../redux/Api'
import { connect } from "react-redux";
import { select_Id, setData } from "../redux/Action";
function Products({ data, setData }) {
    const [formData, setFormData] = useState({title: '',price: '',description:'',category:''});
    
    const [isEdit, setisEdit] = useState({edit: false, id: 0 })
    useEffect(()=> {
        allStudentsData();
      },[])
      
      const allStudentsData = async () => {
        const students = await getStudent();
        console.log(students);
        setData(students);
        console.log(data)
      }
      const handleInputChange = (event, field) => {
        setFormData({ ...formData, [field]: event.target.value });
      }
      const handleEdit = (id,title,price,description,category) => {
        setisEdit({edit: true, id: id})
        console.log(isEdit)
        setFormData({title: title,price: price,description:description,category:category});
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if (formData.title !== ''&& formData.price !==''&& formData.description !==''&& formData.category !='' && formData !=='') {
            console.log(isEdit)
            if (isEdit.edit) {
              await updateProduct(isEdit.id,formData);
              setisEdit({edit: false, id: 0})
            }else{
              await newProduct(formData);
            }
            console.log("this is form data",formData)
            allStudentsData();
            setFormData({title: '',price: '',description:'',category:''});
          } else {
            alert("Please fill all details");
          }
        } catch (error) {
          console.error('Error adding student:', error);
        }
      }
      const handleDelete = async (id) => {
        await deleteProduct(id);
        allStudentsData();
      }
   
      return (
        <>
            
            <div className="container  justify-content-center mt-5 ">
            <div className="mt-5 mx-auto justify-content-center">
                <div className="col">
                <h2 className="justify-content-center d-flex">
                    <b>Product's Data</b>
                </h2>
               
                <form className='container' onSubmit={handleSubmit}>
                    <div className='row align-items-center'>
                        <div className='col-3'>
                            <label htmlFor="name" className="form-label">Title</label>
                            <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="title"
                            value={formData.title}
                            onChange={(e) => handleInputChange(e, 'title')}
                            />
                        </div>
                        <div className='col-3'>
                            <label htmlFor="name" className="form-label">Price</label>
                            <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="title"
                            value={formData.price}
                           onChange={(e) => handleInputChange(e, 'price')}
                            />
                        </div>
                       
                        <div className='col-3'>
                            <label htmlFor="name" className="form-label">Category</label>
                            <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="title"
                            value={formData.category}
                            onChange={(e) => handleInputChange(e, 'category')}
                            />
                        </div>
                        <div className='col-9'>
                            <label htmlFor="name" className="form-label">Description</label>
                            <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="title"
                            value={formData.description}
                            onChange={(e) => handleInputChange(e, 'description')}
                            />
                        </div>
                        <div className='col-3'>
                          <button type="submit" className="btn btn-primary mt-4 w-100">
                            {isEdit.edit ? 'Edit Product' : 'Add Product'}
                          </button>
                        </div>

                                            
                    </div>                        
                </form>
                {/* This is for printing data in map*/}
                <div>
                    <table className="table table-striped shadow-sm mt-3 border">
                    <thead className="table-info rounded">
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        {/* <th scope="col">Image</th> */}
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student) => (
                        <tr key={student.id}>
                            <td>{student.title}</td>
                            <td>{student.price}</td>
                            <td>{student.description}</td>
                            <td>{student.category}</td>
                            {/* <td><img src={student.image} width={'75px'} height={'75px'} className="rounded-circle border border-info"></img></td> */}
                        
                            <td>
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={() => handleEdit(student.id, student.title, student.price, student.description, student.category)}
                            >
                                Update
                            </button>
                            </td>
                            <td>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => handleDelete(student.id)}
                            >
                                Delete
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
                </div>
            </div>
           
        </>
      )
}
const mapStateToProps = state => {
    return {
      data: state.data,
      selectProductId: state.selectProductId,
    }
  }
  
  const mapDispatchToProps = {
    setData,
    select_Id,
  }


export default connect(mapStateToProps, mapDispatchToProps)(Products) 