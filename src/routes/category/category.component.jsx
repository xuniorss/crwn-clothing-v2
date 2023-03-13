import { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductCard from '../../components/product-card/product-card.component'
import { CategoriesContext } from '../../contexts/categories.context'

import { CategoryTitle, CategoryContainer } from './category.styles'

const Category = () => {
   const { categoriesMap } = useContext(CategoriesContext)
   const { category } = useParams()
   const [products, setProducts] = useState(categoriesMap[category])

   useEffect(() => {
      setProducts(categoriesMap[category])
   }, [categoriesMap, category])

   return (
      <Fragment>
         <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
         <CategoryContainer>
            {products &&
               products.map((product) => <ProductCard key={product.id} product={product} />)}
         </CategoryContainer>
      </Fragment>
   )
}

export default Category
