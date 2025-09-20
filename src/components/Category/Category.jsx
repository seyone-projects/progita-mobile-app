import React from 'react';
import Kumbam from '../../assets/kumbam-1.jpg';
import './category.css';
import Footer from '../Footer/Footer';

const Category = () => {

            const categories = [
                { id: 1, name: 'Ceremonies', img: Kumbam },
                { id: 2, name: 'Homam', img: Kumbam },
                { id: 3, name: 'Pariharam', img: Kumbam },
                { id: 4, name: 'Poojas', img: Kumbam },
                { id: 5, name: 'Donations', img: Kumbam },
                { id: 6, name: 'Astrology', img: Kumbam },
                { id: 7, name: 'Vasthu', img: Kumbam },
            ];

            return (
                <>
                    <div className="container py-3 category">
                        <form >
                            <div className='form-group d-flex align-items-center'>
                                <input type="search" placeholder="Search for categories" className='search-input' />
                                <span><i className="fas fa-search search-i"></i></span>
                            </div>
                        </form>
                        <div className="row">
                            {categories.map(category => (
                                <div className="col-4" key={category.id}>
                                    <div className='category-items '>
                                        <img src={category.img} alt={category.name} className='category-img img-fluid ' />
                                        <p className='m-0'>{category.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Footer />
                </>
            );     
   
}

export default Category
